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
  { id: "salad-vitaminny", name: "Салат «Витаминный»", category: "Салаты", price: 150, image: "/images/menu/salad-vitaminny.webp" },
  { id: "carrot-korean", name: "Морковь по-корейски", category: "Салаты", price: 150, image: "/images/menu/carrot-korean.webp" },
  { id: "kimchi", name: "Кимчи", category: "Салаты", price: 170, image: "/images/menu/kimchi.webp" },
  { id: "salad-fresh-veg", name: "Свежий овощной салат", category: "Салаты", price: 200, image: "/images/menu/salad-fresh-veg.webp" },
  { id: "salad-zimny", name: "Салат «Зимний»", category: "Салаты", price: 200, image: "/images/menu/salad-zimny.webp" },
  { id: "herring-fur-coat", name: "Сельдь под шубой", category: "Салаты", price: 220, image: "/images/menu/herring-fur-coat.webp" },
  { id: "caesar-chicken", name: "Цезарь с курицей", category: "Салаты", price: 250, image: "/images/menu/caesar-chicken.webp" },
  { id: "vinaigrette", name: "Винегрет", category: "Салаты", price: 190, image: "/images/menu/vinaigrette.webp" },

  // Напитки
  { id: "tea-lemon", name: "Чай с лимоном", category: "Напитки", price: 50, volume: "0,2 л", image: "/images/menu/tea-lemon.webp" },
  { id: "tea-lemon-pot", name: "Чай с лимоном (чайник)", category: "Напитки", price: 100, volume: "Чайник", image: "/images/menu/tea-lemon-pot.webp" },
  { id: "coffee-black", name: "Кофе чёрный", category: "Напитки", price: 50, volume: "0,2 л", image: "/images/menu/coffee-black.webp" },
  { id: "compote", name: "Компот", category: "Напитки", price: 70, volume: "0,2 л", image: "/images/menu/compote.webp" },
  { id: "ayran", name: "Айран", category: "Напитки", price: 80, volume: "0,2 л", image: "/images/menu/ayran.webp" },
  { id: "tea-samarkand", name: "Чай «Самарканд»", category: "Напитки", price: 300, volume: "Чайник", image: "/images/menu/tea-samarkand.webp" },

  // Шашлыки и гриль
  { id: "lyulya-beef", name: "Люля-кебаб из говядины", category: "Шашлыки и гриль", price: 270, image: "/images/menu/lyulya-beef.webp" },
  { id: "shashlik-chicken-fillet", name: "Шашлык из куриного филе", category: "Шашлыки и гриль", price: 270, image: "/images/menu/shashlik-chicken-fillet.webp" },
  { id: "shashlik-chicken-wings", name: "Шашлык из куриных крыльев", category: "Шашлыки и гриль", price: 270, image: "/images/menu/shashlik-chicken-wings.webp" },
  { id: "shashlik-beef", name: "Шашлык из говядины", category: "Шашлыки и гриль", price: 400, image: "/images/menu/shashlik-beef.webp" },
  { id: "shashlik-lamb", name: "Шашлык из баранины", category: "Шашлыки и гриль", price: 420, image: "/images/menu/shashlik-lamb.webp" },
  { id: "lamb-rack", name: "Каре баранины", category: "Шашлыки и гриль", price: 950, image: "/images/menu/lamb-rack.webp" },
  { id: "grilled-vegetables", name: "Овощи на гриле", category: "Шашлыки и гриль", price: 250, image: "/images/menu/grilled-vegetables.webp" },
  { id: "shashlik-beef-liver", name: "Шашлык из говяжьей печени", category: "Шашлыки и гриль", price: 270, image: "/images/menu/shashlik-beef-liver.webp" },

  // Гарниры
  { id: "fries", name: "Картофель фри", category: "Гарниры", price: 150, image: "/images/menu/fries.webp" },
  { id: "mashed-potato", name: "Картофельное пюре", category: "Гарниры", price: 170, image: "/images/menu/mashed-potato.webp" },
  { id: "pasta", name: "Макароны", category: "Гарниры", price: 150, image: "/images/menu/pasta.webp" },
  { id: "buckwheat", name: "Гречка", category: "Гарниры", price: 150, image: "/images/menu/buckwheat.webp" },
  { id: "rice", name: "Рис", category: "Гарниры", price: 150, image: "/images/menu/rice.webp" },

  // Выпечка
  { id: "pakhlava", name: "Пахлава", category: "Выпечка", price: 100, image: "/images/menu/pakhlava.webp" },
  { id: "flatbread", name: "Лепёшка", category: "Выпечка", price: 50, image: "/images/menu/flatbread.webp" },
  { id: "samsa-tandoor-large", name: "Самса из тандыра (большая)", category: "Выпечка", price: 180, image: "/images/menu/samsa-tandoor-large.webp" },
  { id: "samsa-tandoor-small", name: "Самса из тандыра (маленькая)", category: "Выпечка", price: 150, image: "/images/menu/samsa-tandoor-small.webp" },
  { id: "samsa-puff-lamb", name: "Самса из слоёного теста с бараниной", category: "Выпечка", price: 120, image: "/images/menu/samsa-puff-lamb.webp" },
  { id: "samsa-puff-beef", name: "Самса из слоёного теста с говядиной", category: "Выпечка", price: 120, image: "/images/menu/samsa-puff-beef.webp" },
  { id: "samsa-puff-chicken", name: "Самса из слоёного теста с курицей", category: "Выпечка", price: 100, image: "/images/menu/samsa-puff-chicken.webp" },

  // Первые блюда
  { id: "shurpa-beef", name: "Шурпа из говядины", category: "Первые блюда", price: 370, image: "/images/menu/shurpa-beef.webp" },
  { id: "lagman", name: "Лагман", category: "Первые блюда", price: 370, image: "/images/menu/lagman.webp" },
  { id: "chuchvara", name: "Чучвара (пельмени с бульоном)", category: "Первые блюда", price: 320, image: "/images/menu/chuchvara.webp" },
  { id: "borscht", name: "Борщ", category: "Первые блюда", price: 350, image: "/images/menu/borscht.webp" },
  { id: "solyanka", name: "Солянка", category: "Первые блюда", price: 350, image: "/images/menu/solyanka.webp" },
  { id: "mastava", name: "Мастава", category: "Первые блюда", price: 370, image: "/images/menu/mastava.webp" },

  // Вторые блюда
  { id: "plov-beef", name: "Плов из говядины", category: "Вторые блюда", price: 430, image: "/images/menu/plov-beef.webp" },
  { id: "goulash", name: "Гуляш", category: "Вторые блюда", price: 370, image: "/images/menu/goulash.webp" },
  { id: "manty", name: "Манты (4 шт.)", category: "Вторые блюда", price: 370, image: "/images/menu/manty.webp" },
  { id: "khonum", name: "Хонум", category: "Вторые блюда", price: 350, image: "/images/menu/khonum.webp" },
  { id: "fried-lagman", name: "Жареный лагман", category: "Вторые блюда", price: 370, image: "/images/menu/fried-lagman.webp" },
  { id: "syltama", name: "Сылтама с гарниром", category: "Вторые блюда", price: 470, image: "/images/menu/syltama.webp" },
  { id: "kazan-kebab-beef", name: "Казан-кебаб из говядины", category: "Вторые блюда", price: 520, image: "/images/menu/kazan-kebab-beef.webp" },
  { id: "chicken-leg-garnish", name: "Куриный окорочок с гарниром", category: "Вторые блюда", price: 400, image: "/images/menu/chicken-leg-garnish.webp" },
];
