"use client";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { routeHref, siteConfig } from "@/data/site-config";

const perks = ["Национальные рецепты", "Восточное гостеприимство", "Традиционная кухня"];

export function Hero() {
  const reduce = useReducedMotion();
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-[68px]">
      {/* Фон: сюда ставится фото плова — положить файл в public/images/hero/plov.jpg и раскомментировать <Image> */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,#0f5a45_0%,#062c22_45%,#071b16_100%)]" />
      <div className="pattern-gold absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-forest/70" />

      <div className="container-x relative py-16 sm:py-24">
        <motion.p {...item(0)} className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:text-sm">
          <span className="h-px w-8 bg-gold" /> {siteConfig.fullName}
        </motion.p>
        <motion.h1 {...item(1)} className="h-display max-w-4xl text-[2.6rem] min-[390px]:text-5xl sm:text-7xl lg:text-8xl">
          Настоящий вкус Востока <span className="text-gold italic">в сердце Казани</span>
        </motion.h1>
        <motion.p {...item(2)} className="mt-6 max-w-xl text-lg text-cream/80 sm:text-xl">Восточная кухня</motion.p>
        <motion.div {...item(3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="#menu">Посмотреть меню</Button>
          <Button href={routeHref} external variant="outline"><MapPin className="size-4" /> Как добраться</Button>
        </motion.div>
        <motion.ul {...item(4)} className="mt-14 grid max-w-3xl gap-3 sm:grid-cols-3 sm:gap-6">
          {perks.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm text-cream/75">
              <span className="size-2 shrink-0 rotate-45 bg-gold" /> {p}
            </li>
          ))}
        </motion.ul>
      </div>
      <a href="#about" aria-label="Прокрутить вниз" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-gold/70 hover:text-gold sm:block"><ChevronDown className="size-6 animate-bounce motion-reduce:animate-none" /></a>
    </section>
  );
}
