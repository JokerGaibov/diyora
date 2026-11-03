// Единый источник данных меню. Чтобы изменить цену, название, фото или добавить блюдо —
// правьте только этот файл. Новая категория: добавьте её в `categories` и используйте в `category`.

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number; // в рублях
  volume?: string; // объём или формат подачи, только если указан в прайсе
  image?: string; // путь вида /images/menu/plov.webp; без него показывается текстовая карточка
  description?: string;
}

// Порядок категорий = порядок вкладок
export const categories = [
  "Салаты",
  "Напитки",
  "Шашлыки и гриль",
  "Гарниры",
  "Выпечка",
  "Первые блюда",
  "Вторые блюда",
] as const;

export const menu: MenuItem[] = [
  // Салаты
  { id: "salad-vitaminny", name: "Салат «Витаминный»", category: "Салаты", price: 150, image: "/images/menu/salad-vitaminny.d285f90d.webp" },
  { id: "carrot-korean", name: "Морковь по-корейски", category: "Салаты", price: 150, image: "/images/menu/carrot-korean.6692f08d.webp" },
  { id: "kimchi", name: "Кимчи", category: "Салаты", price: 170, image: "/images/menu/kimchi.5cec6386.webp" },
  { id: "salad-fresh-veg", name: "Свежий овощной салат", category: "Салаты", price: 200, image: "/images/menu/salad-fresh-veg.6597fb49.webp" },
  { id: "salad-zimny", name: "Салат «Зимний»", category: "Салаты", price: 200, image: "/images/menu/salad-zimny.43268cfd.webp" },
  { id: "herring-fur-coat", name: "Сельдь под шубой", category: "Салаты", price: 220, image: "/images/menu/herring-fur-coat.13967204.webp" },
  { id: "caesar-chicken", name: "Цезарь с курицей", category: "Салаты", price: 250, image: "/images/menu/caesar-chicken.77e30b3f.webp" },
  { id: "vinaigrette", name: "Винегрет", category: "Салаты", price: 190, image: "/images/menu/vinaigrette.9969a4cd.webp" },

  // Напитки
  { id: "tea-lemon", name: "Чай с лимоном", category: "Напитки", price: 50, volume: "0,2 л", image: "/images/menu/tea-lemon.5b8e15ef.webp" },
  { id: "tea-lemon-pot", name: "Чай с лимоном (чайник)", category: "Напитки", price: 100, volume: "Чайник", image: "/images/menu/tea-lemon-pot.9fbead83.webp" },
  { id: "coffee-black", name: "Кофе чёрный", category: "Напитки", price: 50, volume: "0,2 л", image: "/images/menu/coffee-black.7729cc7b.webp" },
  { id: "compote", name: "Компот", category: "Напитки", price: 70, volume: "0,2 л", image: "/images/menu/compote.4887e3a0.webp" },
  { id: "ayran", name: "Айран", category: "Напитки", price: 80, volume: "0,2 л", image: "/images/menu/ayran.21e996ff.webp" },
  { id: "tea-samarkand", name: "Чай «Самарканд»", category: "Напитки", price: 300, volume: "Чайник", image: "/images/menu/tea-samarkand.37a39c42.webp" },

  // Шашлыки и гриль
  { id: "lyulya-beef", name: "Люля-кебаб из говядины", category: "Шашлыки и гриль", price: 270, image: "/images/menu/lyulya-beef.8b30017f.webp" },
  { id: "shashlik-chicken-fillet", name: "Шашлык из куриного филе", category: "Шашлыки и гриль", price: 270, image: "/images/menu/shashlik-chicken-fillet.136df190.webp" },
  { id: "shashlik-chicken-wings", name: "Шашлык из куриных крыльев", category: "Шашлыки и гриль", price: 270, image: "/images/menu/shashlik-chicken-wings.1c640384.webp" },
  { id: "shashlik-beef", name: "Шашлык из говядины", category: "Шашлыки и гриль", price: 400, image: "/images/menu/shashlik-beef.67c5875a.webp" },
  { id: "shashlik-lamb", name: "Шашлык из баранины", category: "Шашлыки и гриль", price: 420, image: "/images/menu/shashlik-lamb.55b412fc.webp" },
  { id: "lamb-rack", name: "Каре баранины", category: "Шашлыки и гриль", price: 950, image: "/images/menu/lamb-rack.304ef9b0.webp" },
  { id: "grilled-vegetables", name: "Овощи на гриле", category: "Шашлыки и гриль", price: 250, image: "/images/menu/grilled-vegetables.9536d7b7.webp" },
  { id: "shashlik-beef-liver", name: "Шашлык из говяжьей печени", category: "Шашлыки и гриль", price: 270, image: "/images/menu/shashlik-beef-liver.9c0849ff.webp" },

  // Гарниры
  { id: "fries", name: "Картофель фри", category: "Гарниры", price: 150, image: "/images/menu/fries.9f71df55.webp" },
  { id: "mashed-potato", name: "Картофельное пюре", category: "Гарниры", price: 170, image: "/images/menu/mashed-potato.85250282.webp" },
  { id: "pasta", name: "Макароны", category: "Гарниры", price: 150, image: "/images/menu/pasta.6b719ac0.webp" },
  { id: "buckwheat", name: "Гречка", category: "Гарниры", price: 150, image: "/images/menu/buckwheat.f82e8d55.webp" },
  { id: "rice", name: "Рис", category: "Гарниры", price: 150, image: "/images/menu/rice.516308a8.webp" },

  // Выпечка
  { id: "pakhlava", name: "Пахлава", category: "Выпечка", price: 100, image: "/images/menu/pakhlava.85417ab1.webp" },
  { id: "flatbread", name: "Лепёшка", category: "Выпечка", price: 50, image: "/images/menu/flatbread.74a90372.webp" },
  { id: "samsa-tandoor-large", name: "Самса из тандыра (большая)", category: "Выпечка", price: 180, image: "/images/menu/samsa-tandoor-large.72bbabc0.webp" },
  { id: "samsa-tandoor-small", name: "Самса из тандыра (маленькая)", category: "Выпечка", price: 150, image: "/images/menu/samsa-tandoor-small.6bb81f9a.webp" },
  { id: "samsa-puff-lamb", name: "Самса из слоёного теста с бараниной", category: "Выпечка", price: 120, image: "/images/menu/samsa-puff-lamb.29833b2e.webp" },
  { id: "samsa-puff-beef", name: "Самса из слоёного теста с говядиной", category: "Выпечка", price: 120, image: "/images/menu/samsa-puff-beef.555eabe8.webp" },
  { id: "samsa-puff-chicken", name: "Самса из слоёного теста с курицей", category: "Выпечка", price: 100, image: "/images/menu/samsa-puff-chicken.29833b2e.webp" },

  // Первые блюда
  { id: "shurpa-beef", name: "Шурпа из говядины", category: "Первые блюда", price: 370, image: "/images/menu/shurpa-beef.e7147787.webp" },
  { id: "lagman", name: "Лагман", category: "Первые блюда", price: 370, image: "/images/menu/lagman.0cbf30df.webp" },
  { id: "chuchvara", name: "Чучвара (пельмени с бульоном)", category: "Первые блюда", price: 320, image: "/images/menu/chuchvara.4a2ad84f.webp" },
  { id: "borscht", name: "Борщ", category: "Первые блюда", price: 350, image: "/images/menu/borscht.c20a31c0.webp" },
  { id: "solyanka", name: "Солянка", category: "Первые блюда", price: 350, image: "/images/menu/solyanka.0dc7a50b.webp" },
  { id: "mastava", name: "Мастава", category: "Первые блюда", price: 370, image: "/images/menu/mastava.7451ce9a.webp" },

  // Вторые блюда
  { id: "plov-beef", name: "Плов из говядины", category: "Вторые блюда", price: 430, image: "/images/menu/plov-beef.19df1cb9.webp" },
  { id: "goulash", name: "Гуляш", category: "Вторые блюда", price: 370, image: "/images/menu/goulash.72a11afa.webp" },
  { id: "manty", name: "Манты (4 шт.)", category: "Вторые блюда", price: 370, image: "/images/menu/manty.a2f0f87a.webp" },
  { id: "khonum", name: "Хонум", category: "Вторые блюда", price: 350, image: "/images/menu/khonum.139c7949.webp" },
  { id: "fried-lagman", name: "Жареный лагман", category: "Вторые блюда", price: 370, image: "/images/menu/fried-lagman.5c9eb4d7.webp" },
  { id: "syltama", name: "Сылтама с гарниром", category: "Вторые блюда", price: 470, image: "/images/menu/syltama.d2eae1e5.webp" },
  { id: "kazan-kebab-beef", name: "Казан-кебаб из говядины", category: "Вторые блюда", price: 520, image: "/images/menu/kazan-kebab-beef.6f2e8128.webp" },
  { id: "chicken-leg-garnish", name: "Куриный окорочок с гарниром", category: "Вторые блюда", price: 400, image: "/images/menu/chicken-leg-garnish.3e247849.webp" },
];
