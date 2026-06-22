import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { ArrowUpRight } from "lucide-react";
import pSkyline from "@/assets/project-skyline.jpg";
import pApt from "@/assets/project-apartments.jpg";
import pVilla from "@/assets/project-villa.jpg";
import pMetro from "@/assets/project-metro.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Nithya Rachana Constructions" },
      { name: "description", content: "Selected portfolio of infrastructure, residential and commercial projects delivered by Nithya Rachana Constructions." },
      { property: "og:title", content: "Projects — Nithya Rachana Constructions" },
      { property: "og:description", content: "Landmark projects across India." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const all = [
  { img: pSkyline, title: "Skyline Tower", cat: "Commercial", desc: "19-story commercial tower." },
  { img: pApt, title: "Greenfield Apartments", cat: "Residential", desc: "500-unit eco-friendly residential complex." },
  { img: pVilla, title: "Premium Villa Estate", cat: "Residential", desc: "Bespoke modern villa developments." },
  { img: pMetro, title: "Metro Link Project", cat: "Infrastructure", desc: "Urban transportation infrastructure." },
  { img: pSkyline, title: "Corporate Park", cat: "Commercial", desc: "Class-A office campus." },
  { img: pApt, title: "Riverside Residences", cat: "Residential", desc: "Premium waterfront living." },
];
const cats = ["All", "Infrastructure", "Residential", "Commercial"];

function Projects() {
  const [f, setF] = useState("All");
  const list = f === "All" ? all : all.filter(p => p.cat === f);
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 bg-gradient-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg text-white/10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">Portfolio</div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight max-w-3xl">Landmark projects, <span className="text-gradient">built to last</span>.</h1>
        </div>
      </section>
      <Section>
        <div className="flex flex-wrap gap-2 mb-8">
          {cats.map(c => (
            <button key={c} onClick={()=>setF(c)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${f===c?"bg-gradient-accent text-white border-transparent shadow-glow":"bg-card text-primary border-border hover:border-secondary"}`}>{c}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p, i) => (
            <a key={i} href="#" className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-elegant">
              <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1024]/95 via-[#0b1024]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-secondary">{p.cat}</div>
                <h3 className="mt-1 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              </div>
              <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass-dark grid place-items-center text-white group-hover:bg-gradient-accent transition"><ArrowUpRight className="h-4 w-4"/></div>
            </a>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}