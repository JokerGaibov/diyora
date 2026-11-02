"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu as MenuIcon, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { nav, phoneHref, siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { phone } = siteConfig;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-colors duration-300", scrolled || open ? "bg-forest/90 backdrop-blur-md border-b border-gold/10" : "bg-transparent")}>
      <div className="container-x flex h-[68px] items-center justify-between gap-4">
        <a href="#home" aria-label="Диёра — на главную" onClick={() => setOpen(false)}><Logo /></a>

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="text-sm text-cream/80 transition-colors hover:text-gold">{n.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {phone && (
            <a href={phoneHref(phone)} aria-label="Позвонить" className="hidden size-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10 sm:flex"><Phone className="size-4" /></a>
          )}
          <button type="button" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="inline-flex size-12 items-center justify-center rounded-full text-cream hover:bg-cream/10 lg:hidden">
            {open ? <X className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="fixed inset-x-0 top-[68px] bottom-0 overflow-y-auto bg-forest lg:hidden">
            <nav aria-label="Мобильная навигация" className="container-x flex flex-col py-6">
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="h-display border-b border-gold/10 py-4 text-3xl text-cream active:text-gold">{n.label}</a>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                {phone && <Button href={phoneHref(phone)} variant="outline"><Phone className="size-4" /> {phone}</Button>}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
