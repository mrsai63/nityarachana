import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Building2, Hammer, Factory, Wrench, HardHat, Layers, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nithya Rachana Constructions" },
      { name: "description", content: "Infrastructure, residential, commercial, industrial construction, renovation and complete design-build services." },
      { property: "og:title", content: "Services — Nithya Rachana Constructions" },
      { property: "og:description", content: "End-to-end construction tailored to you." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Layers, title: "Infrastructure Development", text: "Highways, bridges, utilities and public infrastructure engineered for resilience and longevity.", bullets: ["Roads & Highways","Bridges & Flyovers","Public Utilities"] },
  { icon: Building2, title: "Residential Construction", text: "Luxury homes, villas and apartments designed for modern, comfortable living.", bullets: ["Luxury Villas","High-rise Apartments","Gated Communities"] },
  { icon: Hammer, title: "Commercial Construction", text: "Office buildings, malls and complexes built to support thriving businesses.", bullets: ["Office Towers","Malls & Retail","Mixed-use"] },
  { icon: Factory, title: "Industrial Construction", text: "Factories, warehouses and plants engineered for efficient operations.", bullets: ["Factories","Warehouses","Process Plants"] },
  { icon: Wrench, title: "Renovation & Remodeling", text: "Modern upgrades and heritage restoration with minimal disruption.", bullets: ["Interior Remodel","Facade Upgrades","Heritage Restoration"] },
  { icon: HardHat, title: "Design & Build", text: "End-to-end project delivery with one accountable partner.", bullets: ["Architecture","MEP & Structural","Project Management"] },
];

function Services() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 bg-gradient-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg text-white/10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">Services</div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight max-w-3xl">Integrated construction services <span className="text-gradient">tailored to you</span>.</h1>
        </div>
      </section>
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-3xl bg-card border border-border p-8 hover:shadow-elegant transition">
              <div className="h-14 w-14 rounded-2xl bg-gradient-accent grid place-items-center shadow-glow"><s.icon className="h-7 w-7 text-white"/></div>
              <h3 className="mt-5 text-2xl font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.text}</p>
              <ul className="mt-4 grid sm:grid-cols-3 gap-2 text-xs">
                {s.bullets.map(b => <li key={b} className="rounded-full bg-muted px-3 py-1.5 text-center font-medium text-primary">{b}</li>)}
              </ul>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary">Enquire about this service <ArrowRight className="h-4 w-4"/></Link>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}