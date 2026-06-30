"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { roles, site } from "@/lib/content";

export default function CareersList() {
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSubject, setCopiedSubject] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopySubject = (subject: string) => {
    navigator.clipboard.writeText(subject);
    setCopiedSubject(true);
    setTimeout(() => setCopiedSubject(false), 2000);
  };

  const currentRole = roles.find((r) => r.title === activeRole);
  const subjectText = currentRole ? `Application — ${currentRole.title}` : "";

  return (
    <>
      <div className="space-y-4">
        {roles.map((r, i) => (
          <Reveal key={r.title} delay={i * 70}>
            <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-medium">{r.title}</h2>
                <p className="text-sm text-muted">{r.type}</p>
                <p className="mt-1 text-sm text-muted">{r.text}</p>
              </div>
              <button
                onClick={() => setActiveRole(r.title)}
                className="shrink-0 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent cursor-pointer"
              >
                Apply
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Modal */}
      {activeRole && currentRole && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm modal-backdrop"
          onClick={() => setActiveRole(null)}
        >
          <div 
            className="w-full max-w-md rounded-xl border border-border bg-surface p-6 shadow-2xl relative modal-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveRole(null)}
              className="absolute top-4 right-4 text-muted hover:text-foreground text-2xl transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h3 className="text-xl font-semibold mb-1">Apply for Role</h3>
            <p className="text-sm text-accent mb-6 font-medium">{currentRole.title}</p>

            <div className="space-y-6">
              {/* Step 1: Copy Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                  1. Recipient Email Address
                </label>
                <div className="flex items-center justify-between gap-2 rounded-md bg-background border border-border p-3">
                  <span className="text-sm font-mono select-all truncate">{site.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 text-xs font-medium text-accent hover:text-foreground transition-colors px-3 py-1.5 rounded bg-surface border border-border cursor-pointer"
                  >
                    {copiedEmail ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Step 2: Subject Line */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                  2. Email Subject Line
                </label>
                <div className="flex items-center justify-between gap-2 rounded-md bg-background border border-border p-3">
                  <span className="text-sm font-mono select-all truncate">{subjectText}</span>
                  <button
                    onClick={() => handleCopySubject(subjectText)}
                    className="shrink-0 text-xs font-medium text-accent hover:text-foreground transition-colors px-3 py-1.5 rounded bg-surface border border-border cursor-pointer"
                  >
                    {copiedSubject ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Step 3: Action Buttons */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                  3. Send Application via
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(subjectText)}`}
                    className="flex items-center justify-center gap-2 rounded-md bg-accent text-white px-4 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity text-center cursor-pointer"
                  >
                    Default Mail App
                  </a>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}&su=${encodeURIComponent(subjectText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium hover:bg-surface hover:text-accent transition-all text-center cursor-pointer"
                  >
                    Gmail (Web)
                  </a>
                </div>
                <p className="mt-4 text-xs text-muted text-center leading-relaxed">
                  Please attach your CV/resume and showcase/portfolio link.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
