"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Photo } from "@/components/ui/Placeholder";
import { cn } from "@/lib/utils";
import type { StreetFoodGroup } from "@/data/streetfood";
import { StreetFoodVariantSelector } from "./StreetFoodVariantSelector";

export function StreetFoodCard({ group, className }: { group: StreetFoodGroup; className?: string }) {
  const [variantId, setVariantId] = useState(group.defaultVariantId);
  const reduce = useReducedMotion();
  const current = group.variants.find((x) => x.id === variantId) ?? group.variants[0];
  // У вегетарианского варианта описание про курицу не показываем
  const description = current.id === "vegetarian" ? "Свежие овощи и ароматный лаваш с румяной корочкой." : group.description;

  return (
    <li className={cn("group flex w-full flex-col self-start rounded-3xl bg-cream p-2.5 text-emerald-deep shadow-md shadow-black/20 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/35 motion-reduce:transition-none motion-reduce:hover:translate-y-0", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <Photo src={group.image} alt={group.name} label={group.name} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-2.5 pb-2 pt-3.5 sm:px-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="h-display min-w-0 text-2xl leading-tight">{group.name}</h3>
          <motion.span
            key={current.id}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            aria-live="polite"
            className="shrink-0 pt-0.5 text-lg font-semibold tabular-nums text-[#8a6a2f]"
          >{current.price} ₽</motion.span>
        </div>
        <p className="mt-2 text-[13px] font-light leading-normal text-[#667463]">{description}</p>
        <div className="mt-4">
          <StreetFoodVariantSelector groupName={group.name} variants={group.variants} value={current.id} onChange={setVariantId} />
        </div>
      </div>
    </li>
  );
}
