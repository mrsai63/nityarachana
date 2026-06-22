import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import aboutImg from "@/assets/about-team.jpg";
import { ArrowRight, Award, Sparkles, Handshake, ShieldCheck, Lightbulb, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nithya Rachana Constructions" },
      { name: "description", content: "Founded in 2015 in Guntur, Nithya Rachana is a trusted construction & infrastructure company delivering excellence across residential, commercial, industrial and infrastructure projects." },
      { property: "og:title", content: "About — Nithya Rachana Constructions" },
      { property: "og:description", content: "A decade of building trust and skylines." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-16 bg-gradient-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg text-white/10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">About Us</div>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight max-w-3xl">Building <span className="text-gradient">trust</span>, one project at a time.</h1>
          <p className="mt-5 max-w-2xl text-white/75">Founded in 2015, Nithya Rachana Infrastructure & Constructions has grown into a leading construction firm with a decade of experience — delivering complete construction solutions from planning to execution.</p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-elegant">
            <img src={aboutImg} alt="Engineers at site" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary">Who We Are</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We specialize in providing complete construction solutions, from planning and design to project execution. With a highly skilled team of architects, engineers and project managers, we ensure excellence in every step.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[{n:10,s:"+",l:"Years"},{n:50,s:"+",l:"Projects"},{n:100,s:"+",l:"Clients"}].map(s=>(
                <div key={s.l} className="rounded-2xl bg-card border border-border p-5">
                  <div className="text-3xl font-extrabold text-primary" style={{fontFamily:"Sora, sans-serif"}}><AnimatedCounter to={s.n} suffix={s.s} /></div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="py-20 bg-primary text-white">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
          <div className="glass-dark rounded-3xl p-10">
            <div className="flex items-center gap-3"><div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center shadow-glow"><Sparkles className="h-6 w-6"/></div><div className="text-xs tracking-[0.3em] uppercase text-secondary">Vision</div></div>
            <p className="mt-5 text-lg leading-relaxed text-white/85">To become a leading construction company known for innovative, sustainable, and quality-driven projects that transform communities.</p>
          </div>
          <div className="glass-dark rounded-3xl p-10">
            <div className="flex items-center gap-3"><div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center shadow-glow"><Award className="h-6 w-6"/></div><div className="text-xs tracking-[0.3em] uppercase text-secondary">Mission</div></div>
            <ul className="mt-5 space-y-2.5 text-white/85">
              {["Deliver high-quality construction services with precision and care.","Build trust through transparency and long-term client partnerships.","Ensure workplace safety and environmental responsibility.","Incorporate advanced technology to improve efficiency.","Contribute to sustainable urban development."].map(t=>(
                <li key={t} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5"/>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section eyebrow="Core Values" title={<>What we stand for.</>}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            {i:Handshake,t:"Integrity",d:"Honesty and accountability."},
            {i:Award,t:"Excellence",d:"Uncompromised quality."},
            {i:Lightbulb,t:"Innovation",d:"BIM & 3D modeling."},
            {i:CheckCircle2,t:"Commitment",d:"On-time delivery."},
            {i:ShieldCheck,t:"Safety",d:"Zero accidents."},
          ].map(v=>(
            <div key={v.t} className="rounded-2xl bg-card border border-border p-6 hover:border-secondary/50 hover:shadow-glow transition">
              <div className="h-12 w-12 rounded-xl bg-secondary/10 text-secondary grid place-items-center"><v.i className="h-6 w-6"/></div>
              <div className="mt-4 font-bold text-primary">{v.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{v.d}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-accent text-white px-6 py-3 font-semibold shadow-glow">Work with us <ArrowRight className="h-4 w-4"/></Link>
        </div>
      </Section>
    </SiteLayout>
  );
}