import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { FloatingActions } from "./FloatingActions";
import { IntroLoader } from "./IntroLoader";

export function SiteLayout({ children, intro = false }: { children: ReactNode; intro?: boolean }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {intro && <IntroLoader />}
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <FloatingActions />
      <Footer />
    </div>
  );
}