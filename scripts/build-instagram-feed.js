// One-off build script: turns an Instagram data export into a website feed.
// Reads posts.json + reels.json, sorts newest-first, generates square-friendly
// thumbnails into /public/instagram, and writes src/data/instagramPosts.json.

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const EXPORT = "Y:/TEMP/SONU JI/instagram-4k_visuals_-2026-06-22-R1MBPbyj";
const ACTIVITY = path.join(EXPORT, "your_instagram_activity", "media");
const PROJECT = "C:/Users/user/Desktop/4kvfx";
const OUT_IMG = path.join(PROJECT, "public", "instagram");
const OUT_DATA = path.join(PROJECT, "src", "data", "instagramPosts.json");
const FFMPEG =
  "C:/Users/user/Desktop/ig-export/_tools/ffmpeg-8.1.1-essentials_build/bin/ffmpeg.exe";
const PROFILE = "https://instagram.com/4k_visuals_";

function indexFiles(dir) {
  const map = {};
  function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (!map[e.name]) map[e.name] = p;
    }
  }
  if (fs.existsSync(dir)) walk(dir);
  return map;
}

function cleanTitle(t) {
  if (!t) return "4K Visuals";
  // first line, strip hashtags tail, trim, cap length
  let s = String(t).split("\n")[0].replace(/#[^\s#]+/g, "").trim();
  if (!s) s = "4K Visuals";
  return s.length > 90 ? s.slice(0, 90).trim() + "…" : s;
}

fs.mkdirSync(OUT_IMG, { recursive: true });
fs.mkdirSync(path.dirname(OUT_DATA), { recursive: true });

const OUT_VID = path.join(OUT_IMG, "videos");
fs.mkdirSync(OUT_VID, { recursive: true });

const postFiles = indexFiles(path.join(EXPORT, "media", "posts"));
const reelFiles = indexFiles(path.join(EXPORT, "media", "reels"));

const posts = JSON.parse(fs.readFileSync(path.join(ACTIVITY, "posts_1.json"), "utf8"));
const reelsRaw = JSON.parse(fs.readFileSync(path.join(ACTIVITY, "reels.json"), "utf8"));
const reels = reelsRaw.ig_reels_media || [];

const items = [];
for (const post of posts) {
  const m = post.media && post.media[0];
  if (!m || !m.uri) continue;
  const src = postFiles[path.basename(m.uri)];
  if (!src) continue;
  items.push({ src, ts: m.creation_timestamp || 0, type: "image", title: cleanTitle(m.title || post.title) });
}
for (const reel of reels) {
  const m = reel.media && reel.media[0];
  if (!m || !m.uri) continue;
  const src = reelFiles[path.basename(m.uri)];
  if (!src) continue;
  items.push({ src, ts: m.creation_timestamp || 0, type: "video", title: cleanTitle(m.title) });
}

items.sort((a, b) => b.ts - a.ts);
console.log(`Found ${items.length} items (posts + reels). Generating thumbnails…`);

const out = [];
let n = 0;
let failures = 0;
let videosDone = 0;
for (const it of items) {
  n++;
  const num = String(n).padStart(4, "0");
  const name = `ig-${num}.jpg`;
  const dest = path.join(OUT_IMG, name);
  const common = ["-vf", "scale=640:800:force_original_aspect_ratio=increase,crop=640:800", "-q:v", "4", dest];

  // Thumbnail — skip if already generated (keeps re-runs fast).
  if (!fs.existsSync(dest)) {
    try {
      if (it.type === "image") {
        execFileSync(FFMPEG, ["-y", "-i", it.src, ...common], { stdio: "ignore", timeout: 30000 });
      } else {
        execFileSync(FFMPEG, ["-y", "-ss", "1", "-i", it.src, "-frames:v", "1", ...common], { stdio: "ignore", timeout: 30000 });
      }
    } catch {
      /* ignore */
    }
  }
  if (!fs.existsSync(dest)) {
    failures++;
    continue;
  }

  const entry = { title: it.title, url: PROFILE, image: `/instagram/${name}`, type: it.type };

  // Reels — compress a web-friendly mp4 for on-site playback (skip if done).
  if (it.type === "video") {
    const vname = `ig-${num}.mp4`;
    const vdest = path.join(OUT_VID, vname);
    if (!fs.existsSync(vdest)) {
      try {
        execFileSync(
          FFMPEG,
          ["-y", "-i", it.src, "-vf", "scale=540:-2", "-c:v", "libx264", "-crf", "30", "-preset", "veryfast", "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", vdest],
          { stdio: "ignore", timeout: 180000 },
        );
      } catch {
        /* ignore */
      }
    }
    if (fs.existsSync(vdest)) {
      entry.video = `/instagram/videos/${vname}`;
      videosDone++;
    }
  }

  out.push(entry);
  if (n % 50 === 0) console.log(`  …${n}/${items.length} (videos: ${videosDone})`);
}

// Posts not present in the export (e.g. collab/repost reels) — keep them in
// place so re-runs don't drop them.
const MANUAL_EXTRAS = [
  {
    index: 8,
    post: {
      title: "Bhooth Bangla — Ram Ji Aake Bhala Karenge",
      url: "https://www.instagram.com/reel/DVOF_DNjEsC/",
      image: "/instagram/bhooth-bangla-reel.jpg",
      type: "video",
      video: "/instagram/videos/bhooth-bangla-reel.mp4",
    },
  },
];
for (const ex of MANUAL_EXTRAS) out.splice(ex.index, 0, ex.post);

fs.writeFileSync(OUT_DATA, JSON.stringify(out, null, 2), "utf8");
console.log(`DONE. Wrote ${out.length} posts to instagramPosts.json. Failures: ${failures}.`);
