import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Briefcase, MapPin, Clock, ArrowRight, Upload } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Nithya Rachana Constructions" },
      { name: "description", content: "Join our team of engineers, architects and project managers building landmark projects." },
      { property: "og:title", content: "Careers — Nithya Rachana Constructions" },
      { property: "og:description", content: "Join our team." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const openings = [
  { title: "Senior Site Engineer", loc: "Guntur, AP", type: "Full-time" },
  { title: "Project Manager", loc: "Hyderabad", type: "Full-time" },
  { title: "BIM Specialist", loc: "Guntur, AP", type: "Full-time" },
  { title: "Safety Officer", loc: "On-site", type: "Full-time" },
  { title: "Civil Architect", loc: "Guntur, AP", type: "Full-time" },
  { title: "Quantity Surveyor", loc: "Guntur, AP", type: "Contract" },
];

function Careers() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 bg-gradient-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg text-white/10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">Careers</div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight max-w-3xl">Build your career, <span className="text-gradient">build the future</span>.</h1>
          <p className="mt-5 max-w-2xl text-white/75">Join a team of passionate engineers, architects and project managers delivering landmark projects across India.</p>
        </div>
      </section>

      <Section eyebrow="Open Roles" title="Current openings">
        <div className="grid md:grid-cols-2 gap-4">
          {openings.map(o => (
            <div key={o.title} className="group rounded-2xl bg-card border border-border p-6 flex items-center justify-between gap-4 hover:border-secondary/50 hover:shadow-glow transition">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-secondary font-semibold"><Briefcase className="h-3.5 w-3.5"/>{o.type}</div>
                <div className="mt-1 text-lg font-bold text-primary">{o.title}</div>
                <div className="mt-1 text-xs text-muted-foreground flex items-center gap-3"><span className="flex items-center gap-1"><MapPin className="h-3 w-3"/>{o.loc}</span><span className="flex items-center gap-1"><Clock className="h-3 w-3"/>Apply by 30th Jun</span></div>
              </div>
              <button className="rounded-full bg-primary text-white px-4 py-2 text-sm font-semibold inline-flex items-center gap-2 group-hover:bg-gradient-accent transition">Apply <ArrowRight className="h-4 w-4"/></button>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Join Us" title="Don't see your role? Send us your resume.">
        <form className="max-w-2xl grid gap-4" onSubmit={(e)=>{e.preventDefault();alert("Thanks! We'll be in touch.");}}>
          <div className="grid sm:grid-cols-2 gap-4">
            <input required maxLength={100} placeholder="Full name" className="rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-secondary"/>
            <input required type="email" maxLength={255} placeholder="Email" className="rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-secondary"/>
          </div>
          <input required maxLength={20} placeholder="Phone" className="rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-secondary"/>
          <textarea maxLength={1000} placeholder="Tell us about yourself" rows={4} className="rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-secondary"/>
          <label className="rounded-xl border-2 border-dashed border-border bg-card px-4 py-6 text-sm text-muted-foreground flex items-center gap-3 cursor-pointer hover:border-secondary">
            <Upload className="h-5 w-5 text-secondary"/> Upload your resume (PDF/DOC)
            <input type="file" className="hidden" accept=".pdf,.doc,.docx"/>
          </label>
          <button className="rounded-full bg-gradient-accent text-white px-6 py-3 font-semibold shadow-glow w-fit">Submit Application</button>
        </form>
      </Section>
    </SiteLayout>
  );
}