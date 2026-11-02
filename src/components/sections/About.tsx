import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandPoster } from "@/components/ui/BrandPoster";

export function About() {
  return (
    <section id="about" className="pattern-brown relative bg-cream py-20 text-brown sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] rounded-tr-[6rem] border border-brown/10 shadow-xl shadow-brown/10">
            <BrandPoster />
          </div>
        </Reveal>
        <div>
          <Reveal><SectionHeading light eyebrow="О нас" title={<>Восточное гостеприимство <span className="italic text-[#9a7436]">каждый день</span></>} /></Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-brown/80">
              <p>Кафе «Диёра» — место, где встречаются традиции восточной кухни.</p>
              <p>Мы знакомим гостей с богатством восточных вкусов и атмосферой настоящего гостеприимства.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {["Восточная кухня", "Национальные рецепты"].map((t) => (
                <li key={t} className="flex items-center gap-3 border-t border-brown/15 pt-4 font-semibold">
                  <span className="size-2 rotate-45 bg-[#b88b45]" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
