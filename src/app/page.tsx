import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Contacts } from "@/components/sections/Contacts";
import { siteConfig } from "@/data/site-config";

// Schema.org только с проверенными данными (без телефона, цен и часов)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.fullName,
  servesCuisine: ["Восточная"],
  url: siteConfig.url,
  hasMap: siteConfig.twoGis,
  address: { "@type": "PostalAddress", addressLocality: siteConfig.city, addressRegion: siteConfig.region, addressCountry: "RU" },
  geo: { "@type": "GeoCoordinates", latitude: siteConfig.coords.lat, longitude: siteConfig.coords.lon },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Contacts />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
