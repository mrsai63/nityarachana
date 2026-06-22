import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { ArrowUpRight } from "lucide-react";
import pSkyline from "@/assets/project-skyline.jpg";
import pApt from "@/assets/project-apartments.jpg";
import pVilla from "@/assets/project-villa.jpg";
import pMetro from "@/assets/project-metro.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Nithya Rachana Constructions" },
      { name: "description", content: "Articles on infrastructure, residential, commercial, technology and sustainability in construction." },
      { property: "og:title", content: "Insights — Nithya Rachana Constructions" },
      { property: "og:description", content: "Construction industry articles & insights." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { img: pSkyline, cat: "Commercial", title: "Designing high-rise towers for the next decade", date: "Apr 2026" },
  { img: pApt, cat: "Residential", title: "Why eco-friendly apartments are the new gold standard", date: "Mar 2026" },
  { img: pVilla, cat: "Sustainability", title: "Green materials transforming villa construction", date: "Feb 2026" },
  { img: pMetro, cat: "Infrastructure", title: "Inside India's metro-rail boom: lessons learned", date: "Jan 2026" },
  { img: pSkyline, cat: "Technology", title: "BIM & 3D modeling: the new construction playbook", date: "Dec 2025" },
  { img: pApt, cat: "Residential", title: "Smart-home wiring: building for IoT from day one", date: "Nov 2025" },
];

function Blog() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 bg-gradient-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg text-white/10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">Insights</div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight max-w-3xl">Field notes from the <span className="text-gradient">construction frontier</span>.</h1>
        </div>
      </section>
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <a key={i} href="#" className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant transition">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold tracking-widest uppercase text-secondary">{p.cat}</span>
                  <span className="text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-primary leading-snug">{p.title}</h3>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary">Read article <ArrowUpRight className="h-4 w-4"/></div>
              </div>
            </a>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}