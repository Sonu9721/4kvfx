"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Member = {
  name: string;
  role: string;
  photo: string;
  bio: string[];
};

export default function TeamCard({ member }: { member: Member }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const modal = (
    <div
      onClick={() => setOpen(false)}
      className="modal-backdrop fixed inset-0 z-[200] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-panel relative max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-surface"
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-muted transition-colors hover:border-accent hover:text-foreground"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="max-h-[88vh] overflow-y-auto p-8 sm:p-10">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={member.photo}
              alt={member.name}
              className="h-28 w-28 shrink-0 rounded-full border border-border object-cover object-top"
            />
            <div>
              <h3 className="text-2xl font-medium">{member.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-accent">
                {member.role}
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 h-px max-w-xs bg-border sm:mx-0 sm:max-w-none" />

          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted">
            {member.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-transform duration-300 hover:-translate-y-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.photo}
          alt={member.name}
          className="aspect-square w-full object-cover object-top"
        />
        <div className="flex flex-1 flex-col p-5">
          <p className="font-medium">{member.name}</p>
          <p className="mt-1 text-sm text-muted">{member.role}</p>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
            {member.bio[0]}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-3 self-start text-sm text-accent transition-opacity hover:opacity-80"
          >
            Read more →
          </button>
        </div>
      </div>

      {mounted && open && createPortal(modal, document.body)}
    </>
  );
}
