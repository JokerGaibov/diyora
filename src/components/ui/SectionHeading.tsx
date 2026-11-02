import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, light, className }: { eyebrow?: string; title: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <span className="h-px w-8 bg-gold" /> {eyebrow}
        </p>
      )}
      <h2 className={cn("h-display text-4xl sm:text-5xl lg:text-6xl", light ? "text-brown" : "text-cream")}>{title}</h2>
    </div>
  );
}
