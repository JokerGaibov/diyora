// Единая конфигурация сайта. Пустые поля (phone, whatsapp, address, hours, socials) на сайте не показываются.
export const siteConfig = {
  name: "Диёра",
  nameEn: "Diyora",
  fullName: "Кафе «Диёра»",
  tagline: "Восточная кухня",
  slogan: "Настоящий вкус Востока в сердце Казани",
  subSlogan: "Восточное гостеприимство каждый день",
  city: "Казань",
  region: "Республика Татарстан",
  url: "https://diyora-mu.vercel.app", // заменить на реальный домен, когда появится
  coords: { lat: 55.86622, lon: 49.028435 },
  twoGis:
    "https://2gis.ru/kazan/geo/70030076760499196/49.028435,55.866220",
  // Заполнить, когда данные будут известны (формат: "+7 900 000-00-00")
  phone: "+7 965 603-02-02" as string,
  whatsapp: "" as string, // только цифры, например "79000000000"
  address: "" as string,
  hours: "" as string,
  socials: [] as { label: string; href: string }[],
  telegram: {
    handle: "@JAFAR_HAMRAEV",
    href: "https://t.me/JAFAR_HAMRAEV",
    qr: "/images/telegram-qr.7cbd6cd2.webp",
  },
};

export const nav = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О нас" },
  { id: "menu", label: "Меню" },
  { id: "contacts", label: "Контакты" },
];

export const phoneHref = (p: string) => "tel:" + p.replace(/[^\d+]/g, "");
export const waHref = (n: string) => `https://wa.me/${n.replace(/\D/g, "")}`;
export const routeHref = siteConfig.twoGis;
