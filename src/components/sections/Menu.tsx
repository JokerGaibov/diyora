"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Placeholder";
import { categories, menu, type MenuItem } from "@/data/menu";
import { cn } from "@/lib/utils";

const ALL = "Все блюда";
const PAGE_SIZE = 12; // сколько карточек показывать во вкладке «Все блюда» до нажатия «Показать ещё»

function Card({ item }: { item: MenuItem }) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-forest/50 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-gold/40">
      {/* Фото показываем только если оно задано; иначе карточка текстовая */}
      {item.image && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
            <Photo src={item.image} alt={item.name} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between gap-3 p-4 sm:p-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold/70">{item.category}</p>
          <h3 className="h-display mt-1.5 text-xl leading-tight sm:text-2xl">{item.name}</h3>
          {item.description && <p className="mt-2 text-sm leading-relaxed text-cream/65">{item.description}</p>}
        </div>
        <div className="flex items-end justify-between gap-2 border-t border-gold/10 pt-3">
          <span className="text-xs text-cream/60">{item.volume}</span>
          <span className="font-semibold text-gold">{item.price} ₽</span>
        </div>
      </div>
    </li>
  );
}

export function Menu() {
  const [cat, setCat] = useState<string>(ALL);
  const [expanded, setExpanded] = useState(false);

  const filtered = cat === ALL ? menu : menu.filter((m) => m.category === cat);
  const limited = cat === ALL && !expanded;
  const list = limited ? filtered.slice(0, PAGE_SIZE) : filtered;

  return (
    <section id="menu" className="relative bg-emerald-deep py-20 sm:py-28">
      <div className="container-x">
        <Reveal><SectionHeading eyebrow="Меню" title="Восточная кухня" /></Reveal>

        <div role="tablist" aria-label="Категории меню" className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
          {[ALL, ...categories].map((c) => (
            <button key={c} type="button" role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={cn("min-h-11 shrink-0 rounded-full border px-5 text-sm transition-colors", cat === c ? "border-gold bg-gold text-brown" : "border-cream/25 text-cream/80 hover:border-gold/60")}>{c}</button>
          ))}
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {list.map((m) => <Card key={m.id} item={m} />)}
        </ul>

        {cat === ALL && filtered.length > PAGE_SIZE && (
          <div className="mt-10 text-center">
            <button type="button" onClick={() => setExpanded((v) => !v)}
              className="inline-flex min-h-12 items-center rounded-full border border-gold/60 px-8 font-semibold text-gold transition-colors hover:bg-gold hover:text-brown">
              {expanded ? "Свернуть" : `Показать ещё (${filtered.length - PAGE_SIZE})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
