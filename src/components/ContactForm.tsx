"use client";

import { useState } from "react";
import { site } from "@/lib/content";

// To enable real email delivery, create a free form endpoint at
// https://formspree.io and paste it here. Until then, the form opens
// the visitor's email client with the details pre-filled.
const FORM_ENDPOINT = "";

const inputClass =
  "w-full rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (FORM_ENDPOINT) return; // let the real endpoint handle it
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Project type: ${data.get("projectType")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "New project inquiry"
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={FORM_ENDPOINT || undefined}
      method={FORM_ENDPOINT ? "POST" : undefined}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <input name="name" required placeholder="Your name *" className={inputClass} />
        <input
          name="email"
          type="email"
          required
          placeholder="Email address *"
          className={inputClass}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <input name="phone" placeholder="Phone" className={inputClass} />
        <select name="projectType" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Project type
          </option>
          <option>VFX for Film</option>
          <option>VFX for TV Show</option>
          <option>3D Animation</option>
          <option>OTT Content</option>
          <option>Corporate Branding</option>
          <option>Other</option>
        </select>
      </div>
      <textarea
        name="message"
        required
        rows={6}
        placeholder="Tell us about your project *"
        className={inputClass}
      />
      <button
        type="submit"
        className="rounded-md bg-accent px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Send inquiry
      </button>
      {sent && (
        <p className="text-sm text-accent">
          Opening your email app — thanks for reaching out!
        </p>
      )}
    </form>
  );
}
