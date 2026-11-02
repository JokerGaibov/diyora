"use client";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Placeholder";
import { gallery } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const n = gallery.length;
  const go = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (idx === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", key);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", key); };
  }, [idx, go]);

  const cur = idx === null ? null : gallery[idx];

  return (
    <section id="gallery" className="bg-forest py-20 sm:py-28">
      <div className="container-x">
        <Reveal><SectionHeading eyebrow="Галерея" title="Атмосфера и блюда" /></Reveal>
        <ul className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] md:grid-cols-4 md:grid-flow-dense md:gap-4">
          {gallery.map((g, i) => (
            <li key={g.id} className={cn("group relative overflow-hidden rounded-2xl", g.span)}>
                <button type="button" onClick={() => setIdx(i)} aria-label={`Открыть: ${g.title}`} className="absolute inset-0 w-full text-left">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"><Photo src={g.image} alt={g.alt} label={g.title} sizes="(min-width:768px) 25vw, 50vw" /></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                  <span className="absolute bottom-3 left-4 text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">{g.title}</span>
                </button>
              </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {cur && (
          <motion.div role="dialog" aria-modal="true" aria-label={cur.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={() => setIdx(null)}>
            <button type="button" aria-label="Закрыть" onClick={() => setIdx(null)} className="absolute right-4 top-4 inline-flex size-12 items-center justify-center rounded-full bg-cream/10 hover:bg-cream/20"><X /></button>
            <button type="button" aria-label="Предыдущее" onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-2 inline-flex size-12 items-center justify-center rounded-full bg-cream/10 hover:bg-cream/20 sm:left-6"><ChevronLeft /></button>
            <button type="button" aria-label="Следующее" onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-2 inline-flex size-12 items-center justify-center rounded-full bg-cream/10 hover:bg-cream/20 sm:right-6"><ChevronRight /></button>
            <motion.figure key={cur.id} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Photo src={cur.image} alt={cur.alt} label={cur.title} sizes="90vw" className="object-contain" /></div>
              <figcaption className="mt-3 text-center text-sm text-cream/70">{cur.title}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
