"use client";
import { useId, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import type { StreetFoodVariant } from "@/data/streetfood";
import { cn } from "@/lib/utils";

const INLINE_MAX = 4; // до скольки вариантов показываем сразу «пилюлями»; больше — раскрывающийся список

interface Props {
  groupName: string;
  variants: StreetFoodVariant[];
  value: string;
  onChange: (id: string) => void;
}

export function StreetFoodVariantSelector({ groupName, variants, value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const current = variants.find((x) => x.id === value) ?? variants[0];

  const option = (x: StreetFoodVariant, pill: boolean) => {
    const selected = x.id === current.id;
    return (
      <button
        key={x.id}
        type="button"
        role="radio"
        aria-checked={selected}
        onClick={() => { onChange(x.id); setOpen(false); }}
        className={cn(
          "flex min-h-11 items-center justify-between gap-3 text-left text-sm transition-colors",
          pill ? "rounded-full border px-4" : "rounded-xl px-3",
          selected
            ? pill ? "border-emerald-deep bg-emerald-deep text-cream" : "bg-emerald-deep text-cream"
            : pill ? "border-emerald-deep/20 text-emerald-deep hover:border-emerald-deep/50" : "text-emerald-deep hover:bg-emerald-deep/5",
        )}
      >
        <span className="min-w-0">{x.name}</span>
        {!pill && <span className={cn("flex shrink-0 items-center gap-2 tabular-nums", selected ? "text-gold" : "text-[#8a6a2f]")}>
          {selected && <Check className="size-4" aria-hidden />}{x.price} ₽
        </span>}
      </button>
    );
  };

  if (variants.length <= INLINE_MAX) {
    return <div role="radiogroup" aria-label={`Вариант: ${groupName}`} className="flex flex-wrap gap-2">{variants.map((x) => option(x, true))}</div>;
  }

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-11 w-full items-center justify-between gap-3 rounded-full border border-emerald-deep/25 bg-white/50 px-4 text-left text-sm font-medium text-emerald-deep transition-colors hover:border-emerald-deep/50"
      >
        <span className="min-w-0 truncate">{current.name}</span>
        <ChevronDown className={cn("size-4 shrink-0 transition-transform duration-300 motion-reduce:transition-none", open && "rotate-180")} aria-hidden />
      </button>
      <div className={cn("grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div id={panelId} role="radiogroup" aria-label={`Вариант: ${groupName}`} inert={!open}
            className="mt-2 flex max-h-64 flex-col gap-0.5 overflow-y-auto rounded-2xl border border-emerald-deep/10 bg-white/60 p-1.5">
            {variants.map((x) => option(x, false))}
          </div>
        </div>
      </div>
    </div>
  );
}
