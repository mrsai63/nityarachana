import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, description, align = "left", children, className = "" }: {
  id?: string; eyebrow?: string; title?: ReactNode; description?: ReactNode; align?: "left" | "center"; children?: ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title || description) && (
          <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12`}>
            {eyebrow && (
              <div className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-secondary`}>
                <span className="h-px w-8 bg-secondary" /> {eyebrow}
              </div>
            )}
            {title && <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-[1.05]">{title}</h2>}
            {description && <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}