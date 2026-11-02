import Image from "next/image";
import { UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

// Показывает реальное фото, если путь задан; иначе — нейтральную заглушку (не выдаётся за фото кафе).
export function Photo({ src, alt, label, className, sizes = "(min-width:1024px) 33vw, 100vw", priority }: { src?: string; alt: string; label?: string; className?: string; sizes?: string; priority?: boolean }) {
  if (src) return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", className)} />;
  return (
    <div role="img" aria-label={`${alt} — фото будет добавлено`} className={cn("pattern-gold absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#0b3d30] to-[#06251d] text-gold/70", className)}>
      <UtensilsCrossed className="size-8" strokeWidth={1.25} />
      {label && <span className="px-4 text-center text-xs uppercase tracking-[0.18em]">{label}</span>}
    </div>
  );
}
