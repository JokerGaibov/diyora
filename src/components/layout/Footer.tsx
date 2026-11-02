import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-forest py-12">
      <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-cream/60">{siteConfig.tagline} · {siteConfig.city}</p>
        </div>
        <nav aria-label="Навигация в подвале">
          <ul className="flex gap-6 text-sm text-cream/80">
            <li><a href="#home" className="hover:text-gold">Главная</a></li>
            <li><a href="#menu" className="hover:text-gold">Меню</a></li>
            <li><a href="#contacts" className="hover:text-gold">Контакты</a></li>
          </ul>
        </nav>
      </div>
      <div className="container-x mt-8 border-t border-cream/10 pt-6 text-xs text-cream/40">© 2026 Кафе «Диёра»</div>
    </footer>
  );
}
