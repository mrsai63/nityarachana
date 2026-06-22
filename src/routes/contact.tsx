import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nithya Rachana Constructions" },
      { name: "description", content: "Get in touch with Nithya Rachana Constructions. Call +91 9966080999 or visit our Guntur office for a free consultation." },
      { property: "og:title", content: "Contact — Nithya Rachana Constructions" },
      { property: "og:description", content: "Let's build together. Free consultation available." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 bg-gradient-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg text-white/10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">Contact</div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight max-w-3xl">Let's <span className="text-gradient">build</span> something remarkable.</h1>
          <p className="mt-5 max-w-2xl text-white/75">We're ready to collaborate and bring your vision to life. Tell us about your project and we'll get back within 24 hours.</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, t: "Office", d: "Flat No. 302, Karthekeya Residency, Pragathi Nagar, Guntur — 522007" },
              { icon: Phone, t: "Phone", d: "+91 9966080999", href: "tel:+919966080999" },
              { icon: MessageCircle, t: "WhatsApp", d: "+91 9966080999", href: "https://wa.me/919966080999" },
              { icon: Mail, t: "Email", d: "hello@nithyarachana.com", href: "mailto:hello@nithyarachana.com" },
            ].map(c => (
              <a key={c.t} href={c.href || "#"} className="block rounded-2xl bg-card border border-border p-6 hover:border-secondary/50 hover:shadow-glow transition">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gradient-accent grid place-items-center shadow-glow shrink-0"><c.icon className="h-5 w-5 text-white"/></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-secondary font-semibold">{c.t}</div>
                    <div className="mt-1 text-sm text-foreground leading-relaxed">{c.d}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="lg:col-span-3">
            <form className="rounded-3xl bg-card border border-border p-8 grid gap-4 shadow-elegant" onSubmit={(e)=>{e.preventDefault(); setSent(true);}}>
              <h2 className="text-2xl font-bold text-primary">Project Inquiry</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required maxLength={100} placeholder="Full name" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-secondary"/>
                <input required type="email" maxLength={255} placeholder="Email" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-secondary"/>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required maxLength={20} placeholder="Phone" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-secondary"/>
                <select className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-secondary">
                  <option>Project type</option>
                  <option>Infrastructure</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Renovation</option>
                </select>
              </div>
              <textarea required maxLength={1000} placeholder="Tell us about your project" rows={5} className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-secondary"/>
              <button className="rounded-full bg-gradient-accent text-white px-6 py-3.5 font-semibold shadow-glow inline-flex items-center justify-center gap-2 w-fit">
                <Send className="h-4 w-4"/> {sent ? "Sent — we'll be in touch!" : "Send Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </Section>

      <Section eyebrow="Visit us" title="Find our office">
        <div className="rounded-3xl overflow-hidden shadow-elegant border border-border">
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=Pragathi+Nagar+Guntur&output=embed"
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </SiteLayout>
  );
}