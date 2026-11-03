import Image from "next/image";
import { Clock, MapPin, MessageCircle, Navigation, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { phoneHref, routeHref, siteConfig, waHref } from "@/data/site-config";

export function Contacts() {
  const { phone, whatsapp, address, hours, socials, telegram, coords, city, fullName } = siteConfig;
  const rows = [
    { icon: MapPin, label: "Город", value: address ? `${city}, ${address}` : city },
    hours && { icon: Clock, label: "Режим работы", value: hours },
    phone && { icon: Phone, label: "Телефон", value: phone, href: phoneHref(phone) },
    telegram.href && { icon: Send, label: "Telegram", value: telegram.handle, href: telegram.href },
  ].filter(Boolean) as { icon: typeof MapPin; label: string; value: string; href?: string }[];

  return (
    <section id="contacts" className="bg-forest py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <Reveal><SectionHeading eyebrow="Контакты" title="Ждём вас в гости!" /></Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-cream/75">{fullName} — {siteConfig.tagline.toLowerCase()}.</p>
            <ul className="mt-8 space-y-5">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold"><Icon className="size-5" /></span>
                  <div><p className="text-xs uppercase tracking-widest text-cream/50">{label}</p>
                    {href ? <a href={href} className="text-lg hover:text-gold">{value}</a> : <p className="text-lg">{value}</p>}</div>
                </li>
              ))}
            </ul>
            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-4 text-sm">{socials.map((s) => <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">{s.label}</a></li>)}</ul>
            )}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={siteConfig.twoGis} external><MapPin className="size-4" /> Открыть в 2ГИС</Button>
              <Button href={routeHref} external variant="outline"><Navigation className="size-4" /> Построить маршрут</Button>
              {phone && <Button href={phoneHref(phone)} variant="outline"><Phone className="size-4" /> Позвонить</Button>}
              {telegram.href && <Button href={telegram.href} external variant="outline"><Send className="size-4" /> Написать в Telegram</Button>}
              {whatsapp && <Button href={waHref(whatsapp)} external variant="outline"><MessageCircle className="size-4" /> Написать в WhatsApp</Button>}
            </div>
            {telegram.qr && (
              <div className="mt-10 flex items-center gap-5">
                <a href={telegram.href} target="_blank" rel="noopener noreferrer" aria-label="Открыть Telegram" className="shrink-0 rounded-2xl bg-white p-3 transition-transform hover:scale-[1.03]">
                  <Image src={telegram.qr} alt={`QR-код Telegram ${telegram.handle}`} width={132} height={150} className="h-auto w-[132px]" />
                </a>
                <p className="max-w-[14rem] text-sm leading-relaxed text-cream/65">Наведите камеру телефона на QR-код, чтобы написать нам в Telegram.</p>
              </div>
            )}
          </Reveal>
        </div>

        {/* Стилизованный блок-превью карты (без поддельных скриншотов) */}
        <Reveal delay={0.15}>
          <a href={siteConfig.twoGis} target="_blank" rel="noopener noreferrer" aria-label="Открыть кафе на карте 2ГИС"
            className="pattern-gold group relative flex min-h-[320px] h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-[#0b3d30] to-forest p-8 text-center transition-colors hover:border-gold/60">
            <span className="flex size-16 items-center justify-center rounded-full bg-gold text-brown transition-transform duration-500 group-hover:scale-110"><MapPin className="size-7" /></span>
            <p className="h-display text-3xl">{fullName}</p>
            <p className="text-cream/70">{city}</p>
            <p className="text-sm tabular-nums text-gold/80">{coords.lat.toFixed(6)}, {coords.lon.toFixed(6)}</p>
            <span className="mt-2 text-sm font-semibold text-gold underline-offset-4 group-hover:underline">Открыть карту в 2ГИС →</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
