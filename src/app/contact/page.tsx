import type { Metadata } from "next";
import { site } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with 4K Visuals — Mumbai VFX and 3D animation studio. Start your project today.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="mb-14">
        <h1 className="text-4xl font-medium sm:text-5xl">Get in touch</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Tell us about your project and we&apos;ll get back to you shortly.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        <ContactForm />

        <aside className="space-y-8 text-sm">
          <div>
            <p className="mb-1 uppercase tracking-[0.15em] text-muted">Email</p>
            <a href={`mailto:${site.email}`} className="text-accent hover:opacity-80">
              {site.email}
            </a>
          </div>
          <div>
            <p className="mb-1 uppercase tracking-[0.15em] text-muted">Phone</p>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-accent">
              {site.phone}
            </a>
          </div>
          <div>
            <p className="mb-1 uppercase tracking-[0.15em] text-muted">WhatsApp</p>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:opacity-80"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div>
            <p className="mb-1 uppercase tracking-[0.15em] text-muted">Studio</p>
            <p>{site.address}</p>
          </div>

        </aside>
      </div>
    </div>
  );
}
