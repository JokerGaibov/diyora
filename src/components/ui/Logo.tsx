import { siteConfig } from "@/data/site-config";

export function Logo({ compact }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 40 40" className="size-9 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M20 3l17 17-17 17L3 20z" />
        <path d="M20 11l9 9-9 9-9-9z" />
        <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="h-display text-2xl text-cream">{siteConfig.name}</span>
        {!compact && <span className="mt-1 hidden text-[10px] uppercase tracking-[0.16em] text-gold/90 min-[380px]:block">{siteConfig.tagline}</span>}
      </span>
    </span>
  );
}
