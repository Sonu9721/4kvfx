// =============================================================
// 4K VISUALS — SITE CONTENT
// Edit everything here. Swap placeholder text, links and image
// filenames for the client's real content. Images go in /public.
// =============================================================

// Instagram feed — auto-generated from the studio's Instagram export
// (scripts/build-instagram-feed.js). Newest posts first.
import instagramPostsData from "@/data/instagramPosts.json";

export const site = {
  name: "4K Visuals",
  tagline: "Crafting reality, frame by frame",
  description:
    "Since 2012, 4K Visuals has been helping brands, filmmakers, and agencies bring bold ideas to life through VFX, 3D Animation, AI-Powered Content, Branding, and Digital Experiences. Based in Mumbai, we deliver world-class creative solutions for films, advertising, television, and commercial productions that inspire, engage, and leave a lasting impact.",
  url: "https://www.4kvfx.com",
  email: "4kvfxstudios@gmail.com",
  phone: "+91 91524 00063",
  whatsapp: "919152400063",
  address: "Mumbai, Maharashtra, India",
  founded: 2012,
  // YouTube video ID for the hero showreel background.
  showreelYouTubeId: "x-mZZCvqy28",
  social: {
    instagram: "https://instagram.com/4k_visuals_",
    youtube: "https://www.youtube.com/@4kvisualsfx/videos",
    linkedin: "https://linkedin.com/",
  },
};

// Founders / leadership — shown on the About page.
export const team = [
  {
    name: "Chandra Bhan Kushwaha",
    role: "Founder & Director",
    photo: "/team/chandra.png",
    bio: [
      "Chandra Bhan Kushwaha has been responsible for the development, growth and strategy creation in order to have 4K VISUALS utilize its full potential.",
      "With almost 17 years of experience as a Lead VFX Supervisor across films, advertising and television, Chandra Bhan brings a rare command over both cinematic vision and high-end visual execution. From shoot supervision to complete post-production, he understands the full production pipeline with strong technical depth and a sharp creative eye.",
      "His expertise in VFX, direction and filmmaking gives every project a powerful balance of scale, precision and cinematic impact.",
    ],
  },
  {
    name: "Abhijaat Dhongade",
    role: "Co-Founder & Chief Creative Director",
    photo: "/team/abhijaat.png",
    bio: [
      "As Chief Creative Director and Co-Founder of 4K VISUALS, Abhijaat has been leading the creative vision of the studio since its inception. With a strong command over both creative and technical aspects of production, he plays a key role in shaping projects that are visually powerful, technically strong and built with uncompromised quality.",
      "Abhijaat is deeply focused on creative execution, final visual look and overall product quality. From concept development to execution, he ensures that every project carries a distinct visual identity, strong storytelling value and a premium cinematic finish.",
      "With his experience as a Lead Supervisor and Lead Creative on projects such as Haatim and Raanjhanaa, Abhijaat has become one of the creative backbones of 4K VISUALS. His eye for detail, sense of visual design and commitment to quality help the studio deliver work that stands out with impact, precision and creative excellence.",
    ],
  },
  {
    name: "Arvind Yadav",
    role: "Co-Founder, CFO & COO",
    photo: "/team/arvind.png",
    bio: [
      "As the Chief Financial and Operating Officer of 4K VISUALS, Arvind Yadav provides strong financial, operational and strategic leadership to the studio. With a sharp understanding of the VFX business and its production demands, he plays a key role in ensuring that every project moves with clarity, discipline and efficiency.",
      "Arvind brings a powerful balance of management strength and technical understanding. He personally supervises team management, project management and client PR, ensuring smooth communication, strong coordination and timely execution across every stage of production.",
      "An instinctive team leader, Arvind understands how to recognize the strengths of his team and utilize them in the most effective way. His leadership helps 4K VISUALS deliver projects that are not only completed on deadline, but also maintain the quality and reliability expected from a high-end visual production studio.",
    ],
  },
];

// Trust numbers shown across the site. Update with real figures.
export const stats = [
  { value: "12+", label: "Years of craft" },
  { value: "500+", label: "Shots delivered" },
  { value: "50+", label: "Productions" },
  { value: "40+", label: "Artists" },
];

// Short service summary (used on home page cards).
export const services = [
  {
    icon: "movie",
    title: "VFX, 3D & CGI",
    text: "Cinematic visual effects, 3D animation and CGI for film, TV and advertising.",
  },
  {
    icon: "ai",
    title: "AI filmmaking",
    text: "AI-powered filmmaking and creative execution for faster, premium output.",
  },
  {
    icon: "color",
    title: "DI color grading",
    text: "Professional grading that shapes the final look, mood and tone.",
  },
  {
    icon: "concept",
    title: "Concept & pre-production",
    text: "Concept, storyboard and pre-production powered by VFX and AI.",
  },
  {
    icon: "tv",
    title: "Digital content",
    text: "Short-format content, music videos and social media campaigns.",
  },
];

// Full service list (used on the dedicated /services page).
export const servicesDetailed = [
  {
    title: "VFX, 3D animation & CGI",
    text: "High-end visual effects, 3D animation and CGI for films, television, advertising films and digital platforms. We create cinematic worlds, invisible effects and visually powerful shots with detail, scale and production-ready quality.",
  },
  {
    title: "AI filmmaking & creative execution",
    text: "AI-powered filmmaking and creative execution for films, advertising visuals, web promotions and digital campaigns. Advanced AI workflows speed up ideation, visualisation and execution while keeping the output cinematic, premium and impactful.",
  },
  {
    title: "DI color grading",
    text: "Professional DI color grading in a dedicated grading suite, designed to shape the final look, mood and visual tone of every project with precision and premium finishing.",
  },
  {
    title: "Concept, storyboard & pre-production",
    text: "Concept development, storyboard creation and pre-production planning powered by a smart mix of VFX and AI workflows — visualising ideas faster, planning shots better and building strong creative direction from the start.",
  },
  {
    title: "Digital content production",
    text: "Complete production and post-production for short-format content, music videos, micro dramas and social media campaigns. From shoot to final delivery, we create engaging content built for today's fast-moving online platforms.",
  },
];

// Add real projects here. Drop thumbnails in /public/work/.
export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  thumb: string; // e.g. "/work/project-1.jpg"
  video?: string; // optional video URL (YouTube/Vimeo/MP4)
  brief: string;
  challenge: string;
  process: string;
  credits?: string;
  beforeAfter?: { before: string; after: string }[];
};

// Real projects 4K Visuals has worked on, with real thumbnails and
// before/after breakdowns pulled from the studio's archive.
export const projects: Project[] = [
  {
    slug: "shrimad-ramayan",
    title: "Shrimad Ramayan",
    client: "Sony Entertainment Television",
    category: "TV · Environments",
    thumb: "/work/featured/shrimad-ramayan.jpg",
    brief: "Promo and episodic VFX for the mythological epic Shrimad Ramayan.",
    challenge:
      "Building grand, photoreal mythological environments and palaces around green-screen sets.",
    process: "Set extension, CG environments, matte painting and compositing.",
    credits: "VFX: 4K Visuals",
    beforeAfter: [
      { before: "/work/beforeafter/4a.png", after: "/work/beforeafter/4b.png" },
      { before: "/work/beforeafter/1a.png", after: "/work/beforeafter/1b.png" },
    ],
  },
  {
    slug: "sony-sab-sizzle",
    title: "Sony SAB Sizzle",
    client: "Sony SAB",
    category: "Promo · Compositing",
    thumb: "/work/featured/sony-sab-sizzle.jpg",
    brief: "High-energy channel sizzle and promo work for Sony SAB.",
    challenge: "A bold, vibrant broadcast look delivered on a tight promo timeline.",
    process: "Compositing, motion graphics and finishing.",
    credits: "VFX: 4K Visuals",
  },
  {
    slug: "kundali-bhagya",
    title: "Kundali Bhagya",
    client: "Zee TV",
    category: "Promo · VFX",
    thumb: "/work/featured/kundali-bhagya.jpg",
    brief: "Promo VFX and finishing for the popular Zee TV serial Kundali Bhagya.",
    challenge: "Polished, premium promo visuals consistent with the show's brand.",
    process: "Compositing, clean-up and grade.",
    credits: "VFX: 4K Visuals",
  },
  {
    slug: "satyawan-savitri",
    title: "Satyawan Savitri",
    client: "Television",
    category: "TV · VFX",
    thumb: "/work/featured/satyawan-savitri.jpg",
    brief: "Mythological VFX and effects work for the series Satyawan Savitri.",
    challenge: "Magical effects and environments grounded in a mythological world.",
    process: "CG effects, set extension and compositing.",
    credits: "VFX: 4K Visuals",
  },
  {
    slug: "commercial-set-extension",
    title: "Commercial — Set Extension",
    client: "Brand Commercial",
    category: "Ad · Set Extension",
    thumb: "/work/featured/commercial-taj.png",
    brief: "Cinematic set extension for a brand commercial.",
    challenge: "Seamlessly extending a real location into an iconic backdrop.",
    process: "Matchmove, matte painting, set extension and grade.",
    credits: "VFX: 4K Visuals",
    beforeAfter: [
      { before: "/work/beforeafter/2a.png", after: "/work/beforeafter/2b.png" },
    ],
  },
  {
    slug: "corporate-event",
    title: "Corporate Event Film",
    client: "Corporate",
    category: "Event · CG",
    thumb: "/work/featured/corporate-event.png",
    brief: "CG auditorium and environment build for a corporate event film.",
    challenge: "Transforming a green-screen stage into a polished CG auditorium.",
    process: "CG environment, lighting, compositing and finishing.",
    credits: "VFX: 4K Visuals",
    beforeAfter: [
      { before: "/work/beforeafter/3a.png", after: "/work/beforeafter/3b.png" },
    ],
  },
];

// TODO: keep only clients/productions 4K Visuals genuinely worked with.
// Portfolio gallery — real stills from the studio archive (/public/work/gallery).
export const gallery = [
  "/work/gallery/65b9f39a8a614.jpg", // Shrimad Ramayan
  "/work/gallery/6455771f3e9c3.png", // Brahmastra (Star Gold)
  "/work/gallery/6455763ec6fc2.png", // KGF 2 (Sony Max)
  "/work/gallery/6455781e0ffa0.png", // Ali Baba (night)
  "/work/gallery/64563c5c8012e.jpg", // Ali Baba (day)
  "/work/gallery/6455773a1ac5a.png", // Ahilyabai (Sony)
  "/work/gallery/64557754a4234.png", // Dhruv Tara
  "/work/gallery/6455784cd32b4.png", // Dhruv Tara
  "/work/gallery/645577c55fe23.png", // Sony Max Image Spot
  "/work/gallery/645577ef213ba.png", // Sony Sports Network Ident
  "/work/gallery/64557796f35aa.jpg", // Sony SAB Sizzle
  "/work/gallery/65b9f6df371f0.jpg", // Prachand Ashok (Colors)
  "/work/gallery/64563b68cdcf7.jpg", // Maitri (Zee)
  "/work/gallery/64563bc1128ed.jpeg", // Radha Mohan
  "/work/gallery/64563c04d48c1.jpg", // Radha Mohan
  "/work/gallery/64563cd29da40.jpg", // Yashomati Maiyya (Sony)
  "/work/gallery/64563df9976da.jpg", // Satyawan Savitri
  "/work/gallery/sony-sport.jpg", // Sherdil Shergill
];

export type InstagramPost = {
  title: string;
  url: string;
  image: string;
  type: "image" | "video";
  video?: string; // local mp4 path for on-site playback (video posts only)
};

// Newest posts first to match the Instagram profile order. The list is
// generated from the Instagram export; re-run the build script to refresh it.
export const instagramPosts: InstagramPost[] = instagramPostsData as InstagramPost[];

export const beholdFeedId = "8WXuhzVvdli8yXd7Vq1r";

// Instagram reel URLs to embed on the Work page — best / most recognisable first.
export const reels: string[] = [
  "https://www.instagram.com/reel/DUv6XJvirr2/", // Shark Tank India — Sony TV
  "https://www.instagram.com/reel/DUvtyMFivUL/", // India's Got Talent
  "https://www.instagram.com/reel/DUvxIlRCtFB/", // Big Boss Marathi — VFX & DI
  "https://www.instagram.com/reel/DUvvX8eCoN7/", // MasterChef — AI promo
  "https://www.instagram.com/reel/DQs-2-zjEWo/", // Dance Karnataka Dance (Kantara DOP)
  "https://www.instagram.com/reel/DMpKXtfqyq5/", // Prithvi Raj Chauhan — Sony TV
  "https://www.instagram.com/reel/DUvxhB4Cmu7/", // Mahadev & Sons — Colors TV
  "https://www.instagram.com/reel/DUv2KYuCgPw/", // Maunragam — Colors TV
  "https://www.instagram.com/reel/DUv1h3ACsES/", // Do Duniyan Ek Dil — Colors TV
  "https://www.instagram.com/reel/DUvuKVACnoP/", // Vasudha — Zee TV
  "https://www.instagram.com/reel/DUvtcD0ireZ/", // Jagdhatari — Zee TV
  "https://www.instagram.com/reel/DUwAaoHipA0/", // Saregama Little Champs — Zee Kannada
  "https://www.instagram.com/reel/DUwDjvHChv-/", // Valentine Song VFX — Zee Kannada
  "https://www.instagram.com/reel/DQs-FI3DHbZ/", // Dance Kannada Dance — Zee Kannada
  "https://www.instagram.com/reel/DIvrwLgNbym/", // Shree Raghvendra Swami
  "https://www.instagram.com/reel/DVOF_DNjEsC/", // Bhooth Bangla (reposted from @ganeshacharyaa)
];

export const clients = [
  "Star Plus",
  "Sony",
  "Colors",
  "Zee",
  "Prakash Jha Productions",
  "Big Magic",
  "Contiloe Pictures",
];

// Open roles for the /careers page.
export const roles = [
  { title: "Compositor", type: "Full-time · Mumbai", text: "Nuke compositing for film and episodic." },
  { title: "Roto / Paint Artist", type: "Full-time · Mumbai", text: "Frame-accurate roto, paint and cleanup." },
  { title: "3D Generalist", type: "Full-time · Mumbai", text: "Modelling, texturing, lighting and rendering." },
  { title: "Matchmove Artist", type: "Full-time · Mumbai", text: "Camera tracking and matchmove." },
  { title: "AI Automation - Generative AI Developer", type: "Full-time · Mumbai", text: "Creating videos, photos, and automated workflows using Generative AI tools (ComfyUI, Stable Diffusion, Midjourney, Kling, etc.)." },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
