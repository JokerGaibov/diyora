export interface GalleryItem {
  id: string;
  title: string;
  alt: string;
  image?: string; // путь в /public/images/gallery
  span?: string; // классы сетки
}

export const gallery: GalleryItem[] = [
  { id: "plov", title: "Плов", alt: "Узбекский плов", span: "md:col-span-2 md:row-span-2" },
  { id: "shashlik", title: "Шашлык", alt: "Шашлык на углях" },
  { id: "samsa", title: "Самса", alt: "Самса" },
  { id: "tea", title: "Восточный чай", alt: "Восточный чай в пиале" },
  { id: "dishes", title: "Национальные блюда", alt: "Национальные блюда", span: "md:col-span-4" },
  { id: "mood", title: "Восточная атмосфера", alt: "Атмосфера кафе" },
];
