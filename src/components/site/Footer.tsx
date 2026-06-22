import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gradient-ink text-white mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 text-sm text-white/65 leading-relaxed">
            Building the future with excellence since 2015. Infrastructure, residential, commercial and industrial projects delivered with precision.
          </p>
          <div className="flex gap-3 mt-5">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full border border-white/15 hover:bg-secondary hover:border-secondary transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {[["/", "Home"],["/about","About Us"],["/services","Services"],["/projects","Portfolio"],["/careers","Careers"],["/blog","Insights"]].map(([h,l])=>(
              <li key={h}><Link to={h} className="hover:text-secondary transition">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {["Infrastructure Development","Residential Construction","Commercial Construction","Industrial Construction","Renovation & Remodeling","Design & Build"].map(s=>(
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0"/> Flat No. 302, Karthekeya Residency, Pragathi Nagar, Guntur — 522007</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-secondary"/> <a href="tel:+919966080999" className="hover:text-secondary">+91 9966080999</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-secondary"/> <a href="mailto:hello@nithyarachana.com" className="hover:text-secondary">hello@nithyarachana.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/55">
          <div>© {new Date().getFullYear()} Nithya Rachana Infrastructure &amp; Constructions. All rights reserved.</div>
          <div>Crafted with precision · Built to last.</div>
        </div>
      </div>
    </footer>
  );
}