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
  // «180 г» или «180 г · в сыром виде»; для блюд без веса и объёма ничего не показываем
  const weight = item.weight !== undefined ? [`${item.weight} г`, item.weightNote].filter(Boolean).join(" · ") : undefined;
  const meta = [item.volume, weight].filter(Boolean).join(" · ");
  return (
    <li className="group flex flex-col rounded-3xl bg-cream p-2.5 text-emerald-deep shadow-md shadow-black/20 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/35 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {/* Фото показываем только если оно задано; иначе карточка текстовая */}
      {item.image && (
        <div className="relative aspect-[5/3] overflow-hidden rounded-2xl">
          <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
            <Photo src={item.image} alt={item.name} sizes="(min-width:1024px) 33vw, (min-width:480px) 50vw, 100vw" />
          </div>
          {/* Вес/объём поверх фото: небольшой полупрозрачный бейдж в нижнем левом углу */}
          {meta && <span className="absolute bottom-2.5 left-2.5 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-cream backdrop-blur-sm">{meta}</span>}
        </div>
      )}
      <div className="flex flex-1 flex-col px-2.5 pb-2 pt-3.5 sm:px-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="h-display line-clamp-2 min-w-0 text-xl leading-tight sm:text-2xl">{item.name}</h3>
          {item.price !== undefined
            ? <span className="shrink-0 pt-0.5 font-semibold tabular-nums text-[#8a6a2f]">{item.price} ₽</span>
            : <span className="shrink-0 pt-1 text-xs text-[#667463]">Цена уточняется</span>}
        </div>
        {/* Без фото вес/объём показываем под названием */}
        {!item.image && meta && <p className="mt-1.5 text-xs font-medium text-[#667463]">{meta}</p>}
        {item.description && <p className="mt-2 line-clamp-3 text-[13px] font-light leading-normal text-[#667463]">{item.description}</p>}
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
