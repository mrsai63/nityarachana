import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Building2, HardHat, Hammer, Factory, Wrench, Layers,
  ShieldCheck, Sparkles, Lightbulb, Handshake, Award, Leaf, CheckCircle2, Star, Quote,
  TrendingUp, Users, Clock, Trophy, Phone, Mail, MapPin
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import hero from "@/assets/hero-construction.jpg";
import aboutImg from "@/assets/about-team.jpg";
import pSkyline from "@/assets/project-skyline.jpg";
import pApt from "@/assets/project-apartments.jpg";
import pVilla from "@/assets/project-villa.jpg";
import pMetro from "@/assets/project-metro.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nithya Rachana Constructions — Building The Future With Excellence" },
      { name: "description", content: "Premium construction & infrastructure company in Guntur. Residential, commercial, industrial and infrastructure projects delivered with precision since 2015." },
      { property: "og:title", content: "Nithya Rachana Constructions" },
      { property: "og:description", content: "Building The Future With Excellence — 10+ years, 50+ projects." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        name: "Nithya Rachana Infrastructure & Constructions",
        url: "/",
        telephone: "+91 9966080999",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Flat No. 302, Karthekeya Residency, Pragathi Nagar",
          addressLocality: "Guntur",
          postalCode: "522007",
          addressCountry: "IN",
        },
        foundingDate: "2015",
        slogan: "Building The Future With Excellence",
      }),
    }],
  }),
  component: Home,
});

const stats = [
  { label: "Years of Experience", value: 10, suffix: "+", icon: Clock },
  { label: "Projects Completed", value: 50, suffix: "+", icon: Trophy },
  { label: "Happy Clients", value: 100, suffix: "+", icon: Users },
  { label: "Quality Commitment", value: 100, suffix: "%", icon: ShieldCheck },
];

const values = [
  { icon: Handshake, title: "Integrity", text: "Honesty and accountability in all dealings." },
  { icon: Award, title: "Excellence", text: "Uncompromised quality and craftsmanship." },
  { icon: Lightbulb, title: "Innovation", text: "Leveraging modern tools like BIM & 3D modeling." },
  { icon: CheckCircle2, title: "Commitment", text: "On-time delivery with cost efficiency." },
  { icon: ShieldCheck, title: "Safety", text: "Zero accidents with strict compliance standards." },
];

const services = [
  { icon: Layers, title: "Infrastructure Development", text: "Roads, bridges, utilities & public infrastructure built to last." },
  { icon: Building2, title: "Residential Construction", text: "Luxury homes, villas and apartments crafted with care." },
  { icon: Hammer, title: "Commercial Construction", text: "Office buildings, malls and mixed-use complexes." },
  { icon: Factory, title: "Industrial Construction", text: "Factories, warehouses and modern plants." },
  { icon: Wrench, title: "Renovation & Remodeling", text: "Modern upgrades and heritage restoration." },
  { icon: HardHat, title: "Design & Build", text: "Complete end-to-end project delivery, single accountability." },
];

const expertise = [
  { name: "Infrastructure Projects", pct: 95 },
  { name: "Green Building Solutions", pct: 88 },
  { name: "Turnkey Projects", pct: 92 },
  { name: "Smart Construction", pct: 85 },
];

const projects = [
  { img: pSkyline, title: "Skyline Tower", cat: "Commercial", desc: "19-story commercial tower with curtain-wall facade." },
  { img: pApt, title: "Greenfield Apartments", cat: "Residential", desc: "500-unit eco-friendly residential complex." },
  { img: pVilla, title: "Premium Villa Estate", cat: "Residential", desc: "Bespoke modern villa developments." },
  { img: pMetro, title: "Metro Link Project", cat: "Infrastructure", desc: "Large-scale urban transportation infrastructure." },
];

const whyUs = [
  { icon: Trophy, title: "Proven Experience", text: "50+ successful projects delivered." },
  { icon: Users, title: "Professional Team", text: "Skilled engineers, architects & project managers." },
  { icon: ShieldCheck, title: "Compliance & Safety", text: "Global standards and local regulations." },
  { icon: Handshake, title: "Client-Centric", text: "Customized solutions for unique needs." },
  { icon: Leaf, title: "Sustainability", text: "Reducing environmental impact, always." },
];

const process = [
  "Consultation","Planning","Design","Construction","Quality Inspection","Delivery",
];

const testimonials = [
  { name: "R. Krishna Murthy", role: "Property Developer", text: "Nithya Rachana delivered our tower ahead of schedule with impeccable finish. A reliable, transparent partner.", rating: 5 },
  { name: "S. Lakshmi", role: "Homeowner", text: "From design to handover, they made the experience seamless. Our villa exceeded every expectation.", rating: 5 },
  { name: "M. Prasad", role: "Industrial Client", text: "Their team handled complex requirements with professionalism. The plant was operational on day one.", rating: 5 },
];

function Home() {
  return (
    <SiteLayout intro>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
        <img src={hero} alt="Construction site at golden hour" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1024]/85 via-[#0b1024]/70 to-[#1A237E]/40" />
        <div className="absolute inset-0 grid-bg text-white/10" />
        <div className="relative mx-auto max-w-7xl px-6 w-full grid lg:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="lg:col-span-8 text-white">
            <div className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" /> Est. 2015 · Guntur, India
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight">
              Building The <span className="text-gradient">Future</span><br />
              With Excellence.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
              With a strong foundation of expertise and innovation, Nithya Rachana shapes modern living through residential, commercial, industrial and infrastructure projects of lasting value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent text-white px-6 py-3.5 font-semibold shadow-glow hover:opacity-95">
                Get Free Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-6 py-3.5 font-semibold hover:bg-white/15">
                View Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.5 }} className="lg:col-span-4">
            <div className="glass-dark rounded-2xl p-6 shadow-elegant">
              <div className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4">Trusted by 100+ clients</div>
              <div className="grid grid-cols-2 gap-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-extrabold text-white" style={{ fontFamily: "Sora, sans-serif" }}>
                      <AnimatedCounter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-white/65 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-[11px] tracking-[0.3em] uppercase animate-float-slow">
          Scroll
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-gradient-ink text-white/70 py-6 overflow-hidden border-y border-white/10">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-sm font-semibold tracking-[0.25em] uppercase">
          {[..."INFRASTRUCTURE · RESIDENTIAL · COMMERCIAL · INDUSTRIAL · GREEN BUILDING · TURNKEY · SMART CONSTRUCTION · DESIGN & BUILD · ".split(" · "), ..."INFRASTRUCTURE · RESIDENTIAL · COMMERCIAL · INDUSTRIAL · GREEN BUILDING · TURNKEY · SMART CONSTRUCTION · DESIGN & BUILD · ".split(" · ")].map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="text-secondary">◆</span>{t}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" eyebrow="Who We Are" title={<>A decade of building <span className="text-gradient">trust & skylines</span>.</>}
        description="Founded in 2015, Nithya Rachana Constructions has grown into a trusted construction and infrastructure company delivering excellence in residential, commercial, industrial and infrastructure development across India.">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img src={aboutImg} alt="Engineers reviewing blueprints" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-6 glass rounded-2xl p-5 shadow-elegant max-w-[260px]">
              <div className="text-3xl font-extrabold text-primary" style={{ fontFamily: "Sora, sans-serif" }}>2015</div>
              <div className="text-xs text-muted-foreground mt-1">The year our journey of crafting future-ready spaces began.</div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <ol className="relative border-l-2 border-secondary/30 ml-2 space-y-8">
              {[
                { year: "2015", title: "Founded", text: "Nithya Rachana established in Guntur with a vision for excellence." },
                { year: "2018", title: "Growth Phase", text: "Expanded across residential & commercial verticals." },
                { year: "2022", title: "Major Projects", text: "Delivered landmark infrastructure & green building projects." },
                { year: "2026", title: "Future Expansion", text: "Smart construction, BIM and sustainable urban development." },
              ].map((t) => (
                <li key={t.year} className="pl-6 relative">
                  <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-gradient-accent shadow-glow" />
                  <div className="text-xs font-bold tracking-widest text-secondary uppercase">{t.year}</div>
                  <div className="text-lg font-bold text-primary">{t.title}</div>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* MISSION / VISION */}
      <section className="relative py-20 sm:py-28 bg-gradient-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg text-white/10" />
        <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
          {[
            { kind: "Vision", icon: Sparkles, text: "To become a leading construction company known for innovative, sustainable, and quality-driven projects that transform communities." },
            { kind: "Mission", icon: Award, text: "Deliver high-quality construction with precision. Build trust through transparency. Ensure safety & environmental responsibility. Incorporate advanced technology. Contribute to sustainable urban development." },
          ].map((b) => (
            <motion.div key={b.kind} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="glass-dark rounded-3xl p-8 sm:p-10 hover:border-secondary/40 transition">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center shadow-glow"><b.icon className="h-6 w-6 text-white" /></div>
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary">Our {b.kind}</div>
              </div>
              <p className="mt-5 text-lg sm:text-xl leading-relaxed text-white/85">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <Section eyebrow="Core Values" title={<>Principles that <span className="text-gradient">build everything</span> we do.</>}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group relative rounded-2xl bg-card p-6 border border-border hover:border-secondary/50 hover:-translate-y-1 transition shadow-sm hover:shadow-glow">
              <div className="h-12 w-12 rounded-xl bg-secondary/10 text-secondary grid place-items-center group-hover:bg-gradient-accent group-hover:text-white transition">
                <v.icon className="h-6 w-6" />
              </div>
              <div className="mt-4 font-bold text-primary">{v.title}</div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" eyebrow="Our Services" title={<>End-to-end construction <span className="text-gradient">tailored to you</span>.</>}
        description="A wide range of integrated construction services designed for diverse client needs — from infrastructure to luxury homes.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.article key={s.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl bg-card p-7 border border-border overflow-hidden hover:shadow-elegant transition">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-15 blur-2xl transition" />
              <div className="h-14 w-14 rounded-2xl bg-gradient-accent grid place-items-center shadow-glow group-hover:scale-110 transition"><s.icon className="h-7 w-7 text-white" /></div>
              <h3 className="mt-5 text-xl font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* EXPERTISE */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-secondary">
              <span className="h-px w-8 bg-secondary"/> Project Expertise
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Large-scale. Complex. <span className="text-gradient">Beautifully delivered.</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We've developed deep expertise across highways, bridges, eco-friendly buildings and turnkey projects — backed by technology-driven workflows.
            </p>
            <div className="mt-8 space-y-5">
              {expertise.map((e, i) => (
                <motion.div key={e.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="text-primary">{e.name}</span>
                    <span className="text-secondary">{e.pct}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${e.pct}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full bg-gradient-accent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={pSkyline} alt="Skyline" loading="lazy" width={1200} height={900} className="rounded-2xl shadow-elegant object-cover h-64 w-full" />
              <img src={pMetro} alt="Metro" loading="lazy" width={1200} height={900} className="rounded-2xl shadow-elegant object-cover h-64 w-full mt-10" />
              <img src={pVilla} alt="Villa" loading="lazy" width={1200} height={900} className="rounded-2xl shadow-elegant object-cover h-64 w-full -mt-6" />
              <img src={pApt} alt="Apartments" loading="lazy" width={1200} height={900} className="rounded-2xl shadow-elegant object-cover h-64 w-full" />
            </div>
            <div className="hidden md:flex absolute -bottom-6 left-1/2 -translate-x-1/2 glass rounded-2xl px-5 py-4 shadow-elegant items-center gap-4">
              <TrendingUp className="h-5 w-5 text-secondary" />
              <div className="text-xs"><span className="font-bold text-primary">+38%</span> YoY project growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <Section id="projects" eyebrow="Portfolio" title={<>Selected work, <span className="text-gradient">built to last</span>.</>}
        description="A glimpse of landmark projects across infrastructure, residential and commercial sectors.">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-5">
          {projects.map((p, i) => (
            <motion.a key={p.title} href="#" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl shadow-elegant ${i === 0 ? "lg:col-span-7 lg:row-span-2" : i === 1 ? "lg:col-span-5" : "lg:col-span-6"}`}
              style={{ aspectRatio: i === 0 ? "16/12" : "16/10" }}>
              <img src={p.img} alt={p.title} loading="lazy" width={1200} height={900} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1024]/95 via-[#0b1024]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-secondary">{p.cat}</div>
                <h3 className="mt-1 text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70 max-w-md">{p.desc}</p>
              </div>
              <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass-dark grid place-items-center text-white group-hover:bg-gradient-accent transition">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <section className="relative py-20 sm:py-28 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg text-white/10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-secondary">
              <span className="h-px w-8 bg-secondary"/> Why Choose Us
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              The confidence and reliability you <span className="text-gradient">deserve</span>.
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyUs.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="glass-dark rounded-2xl p-6 hover:border-secondary/50 transition">
                <div className="h-11 w-11 rounded-xl bg-gradient-accent grid place-items-center shadow-glow"><w.icon className="h-5 w-5 text-white" /></div>
                <div className="mt-4 font-bold">{w.title}</div>
                <p className="mt-1.5 text-sm text-white/70 leading-relaxed">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <Section eyebrow="Construction Process" title={<>From idea to <span className="text-gradient">handover</span>.</>}
        description="A proven six-step methodology refined across hundreds of projects.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {process.map((step, i) => (
            <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="relative rounded-2xl bg-card border border-border p-5 hover:border-secondary/50 hover:shadow-glow transition">
              <div className="text-5xl font-extrabold text-secondary/15" style={{ fontFamily: "Sora, sans-serif" }}>0{i + 1}</div>
              <div className="mt-2 font-bold text-primary">{step}</div>
              {i < process.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary" />
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SUSTAINABILITY */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-elegant">
              <img src={pApt} alt="Sustainable building" loading="lazy" width={1200} height={900} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-900/30 to-transparent" />
            </div>
            <div className="hidden sm:flex absolute -top-6 -left-6 glass rounded-2xl p-5 items-center gap-3 shadow-elegant">
              <Leaf className="h-6 w-6 text-green-600" />
              <div className="text-xs"><div className="font-bold text-primary">Green Certified</div><div className="text-muted-foreground">Eco-friendly materials</div></div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-secondary">
              <span className="h-px w-8 bg-secondary"/> Sustainability
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Greener building. <span className="text-gradient">Smarter living.</span>
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                ["Eco-Friendly Materials", "Responsibly sourced & recyclable."],
                ["Energy Efficient Design", "Passive + active strategies."],
                ["Sustainable Development", "Community-first planning."],
                ["Smart Construction Tech", "BIM, IoT and 3D modeling."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl bg-muted p-4">
                  <div className="flex items-center gap-2 text-primary font-semibold"><CheckCircle2 className="h-4 w-4 text-secondary" /> {t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Testimonials" title={<>Loved by clients & <span className="text-gradient">partners</span>.</>}>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-card border border-border p-7 hover:shadow-elegant transition">
              <Quote className="h-8 w-8 text-secondary/40" />
              <p className="mt-3 text-sm leading-relaxed text-foreground">{t.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-accent text-white grid place-items-center font-bold">{t.name[0]}</div>
                <div>
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5 text-secondary">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CLIENTS / PARTNERS */}
      <section className="py-12 bg-white border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-6">Trusted by government bodies, corporates and global partners</div>
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[..."NHAI · L&T · TATA · BIRLA · APIIC · GHMC · APCRDA · DLF · GODREJ · HCC · ".split(" · "), ..."NHAI · L&T · TATA · BIRLA · APIIC · GHMC · APCRDA · DLF · GODREJ · HCC · ".split(" · ")].map((b, i) => (
              <div key={i} className="text-2xl font-extrabold text-primary/40 tracking-widest" style={{ fontFamily: "Sora, sans-serif" }}>{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-ink text-white p-10 sm:p-16 shadow-elegant">
            <div className="absolute inset-0 grid-bg text-white/10" />
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-accent opacity-20 blur-3xl" />
            <div className="relative grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary">Let's Build Together</div>
                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">Ready to bring your vision to life?</h2>
                <p className="mt-4 text-white/75 max-w-xl">Get a free consultation with our project experts. We'll walk you through scope, timelines and budgets — no obligations.</p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <a href="tel:+919966080999" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 font-semibold shadow-glow"><Phone className="h-4 w-4" /> +91 9966080999</a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-6 py-3.5 font-semibold"><Mail className="h-4 w-4" /> Send Inquiry</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT STRIP */}
      <Section eyebrow="Get in Touch" title={<>Visit, call or <span className="text-gradient">message us</span>.</>}>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: MapPin, title: "Office", text: "Flat No. 302, Karthekeya Residency, Pragathi Nagar, Guntur — 522007" },
            { icon: Phone, title: "Call", text: "+91 9966080999" },
            { icon: Mail, title: "Email", text: "hello@nithyarachana.com" },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl bg-card border border-border p-6 hover:border-secondary/50 hover:shadow-glow transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-accent grid place-items-center shadow-glow"><c.icon className="h-5 w-5 text-white" /></div>
              <div className="mt-4 text-xs uppercase tracking-widest text-secondary font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-foreground leading-relaxed">{c.text}</div>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
