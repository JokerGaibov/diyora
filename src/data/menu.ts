// Единый источник данных меню. Чтобы изменить цену, название, фото или добавить блюдо —
// правьте только этот файл. Новая категория: добавьте её в `categories` и используйте в `category`.

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price?: number; // в рублях; если не задана — показывается «Цена уточняется»
  volume?: string; // объём или формат подачи, только если указан в прайсе
  weight?: number; // граммовка в граммах; если не задана — ничего не показывается
  weightNote?: string; // уточнение к весу, например «в сыром виде»
  image?: string; // путь вида /images/menu/plov.webp; без него показывается текстовая карточка
  description?: string; // черновое ресторанное описание, без подтверждённого состава
  descriptionVerified?: boolean; // true — описание согласовано с кафе; false — черновик
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
  { id: "salad-vitaminny", name: "Салат «Витаминный»", category: "Салаты", price: 150, weight: 130, image: "/images/menu/salad-vitaminny.d285f90d.webp", description: "Лёгкий свежий салат с хрустящими овощами.", descriptionVerified: false },
  { id: "carrot-korean", name: "Морковь по-корейски", category: "Салаты", price: 150, weight: 130, image: "/images/menu/carrot-korean.6692f08d.webp", description: "Хрустящая морковная соломка с чесноком, кориандром и пряной заправкой по-корейски.", descriptionVerified: false },
  { id: "kimchi", name: "Кимчи", category: "Салаты", price: 170, weight: 160, image: "/images/menu/kimchi.5cec6386.webp", description: "Пекинская капуста с острым перцем, чесноком и пряной заправкой — яркая корейская закуска.", descriptionVerified: false },
  { id: "salad-fresh-veg", name: "Свежий овощной салат", category: "Салаты", price: 200, weight: 130, image: "/images/menu/salad-fresh-veg.6597fb49.webp", description: "Сочные помидоры, хрустящие огурцы и свежий репчатый лук.", descriptionVerified: true },
  { id: "salad-zimny", name: "Салат «Зимний»", category: "Салаты", price: 200, weight: 160, image: "/images/menu/salad-zimny.43268cfd.webp", description: "Нежный картофель, морковь, яйца, солёные огурцы, зелёный горошек и колбаса под майонезной заправкой.", descriptionVerified: false },
  { id: "herring-fur-coat", name: "Сельдь под шубой", category: "Салаты", price: 220, weight: 180, image: "/images/menu/herring-fur-coat.13967204.webp", description: "Слоёный салат из сельди, картофеля, моркови и свёклы с яйцом и майонезом.", descriptionVerified: false },
  { id: "caesar-chicken", name: "Цезарь с курицей", category: "Салаты", price: 250, weight: 200, image: "/images/menu/caesar-chicken.77e30b3f.webp", description: "Нежное куриное филе, свежие листья салата, хрустящие сухарики, сыр и соус.", descriptionVerified: false },
  { id: "vinaigrette", name: "Винегрет", category: "Салаты", price: 190, weight: 160, image: "/images/menu/vinaigrette.9969a4cd.webp", description: "Отварная свёкла, картофель и морковь с солёными огурцами — классический русский винегрет.", descriptionVerified: false },

  // Напитки
  { id: "tea-lemon", name: "Чай с лимоном", category: "Напитки", price: 50, volume: "0,2 л", image: "/images/menu/tea-lemon.5b8e15ef.webp", description: "Ароматный горячий чай с освежающей цитрусовой ноткой лимона.", descriptionVerified: false },
  { id: "tea-lemon-pot", name: "Чай с лимоном (чайник)", category: "Напитки", price: 100, volume: "Чайник", image: "/images/menu/tea-lemon-pot.9fbead83.webp", description: "Душистый чай с лимоном для тёплых бесед и приятного отдыха.", descriptionVerified: false },
  { id: "coffee-black", name: "Кофе чёрный", category: "Напитки", price: 50, volume: "0,2 л", image: "/images/menu/coffee-black.7729cc7b.webp", description: "Насыщенный кофейный вкус, выразительный аромат и приятная бодрость в каждой чашке.", descriptionVerified: false },
  { id: "compote", name: "Компот", category: "Напитки", price: 70, volume: "0,2 л", image: "/images/menu/compote.4887e3a0.webp", description: "Лёгкий, освежающий напиток с мягким фруктовым вкусом.", descriptionVerified: false },
  { id: "ayran", name: "Айран", category: "Напитки", price: 80, volume: "0,2 л", image: "/images/menu/ayran.21e996ff.webp", description: "Освежающий кисломолочный напиток с нежным вкусом и лёгкой кислинкой.", descriptionVerified: false },
  { id: "tea-samarkand", name: "Чай «Марокканд»", category: "Напитки", price: 300, volume: "Чайник", image: "/images/menu/tea-morocco.9c803c55.webp", description: "Ароматный чай с яркими восточными нотками, приятной свежестью и насыщенным вкусом.", descriptionVerified: false },

  // Шашлыки и гриль
  { id: "lyulya-beef", name: "Люля-кебаб из говядины", category: "Шашлыки и гриль", price: 270, weight: 160, weightNote: "в сыром виде", image: "/images/menu/lyulya-beef.8b30017f.webp", description: "Сочная рубленая говядина с луком и специями, приготовленная на гриле до румяной корочки.", descriptionVerified: false },
  { id: "shashlik-chicken-fillet", name: "Шашлык из куриного филе", category: "Шашлыки и гриль", price: 270, weight: 180, weightNote: "в сыром виде", image: "/images/menu/shashlik-chicken-fillet.136df190.webp", description: "Нежное куриное филе, приготовленное на углях до аппетитной корочки.", descriptionVerified: false },
  { id: "shashlik-chicken-wings", name: "Шашлык из куриных крыльев", category: "Шашлыки и гриль", price: 270, weight: 270, weightNote: "в сыром виде", image: "/images/menu/shashlik-chicken-wings.1c640384.webp", description: "Румяные куриные крылья с аппетитной корочкой.", descriptionVerified: false },
  { id: "shashlik-beef", name: "Шашлык из говядины", category: "Шашлыки и гриль", price: 400, weight: 160, weightNote: "в сыром виде", image: "/images/menu/shashlik-beef.67c5875a.webp", description: "Сочный шашлык из говядины, приготовленный на гриле.", descriptionVerified: false },
  { id: "shashlik-lamb", name: "Шашлык из баранины", category: "Шашлыки и гриль", price: 420, weight: 160, weightNote: "в сыром виде", image: "/images/menu/shashlik-lamb.55b412fc.webp", description: "Ароматный шашлык из баранины с насыщенным вкусом.", descriptionVerified: false },
  { id: "lamb-rack", name: "Каре баранины", category: "Шашлыки и гриль", price: 950, weight: 300, weightNote: "в сыром виде", image: "/images/menu/lamb-rack.304ef9b0.webp", description: "Нежное каре баранины с румяной корочкой.", descriptionVerified: false },
  { id: "grilled-vegetables", name: "Овощи на гриле", category: "Шашлыки и гриль", price: 250, weight: 160, image: "/images/menu/grilled-vegetables.9536d7b7.webp", description: "Овощи, запечённые на гриле, с лёгким дымным ароматом.", descriptionVerified: false },
  { id: "shashlik-beef-liver", name: "Шашлык из говяжьей печени", category: "Шашлыки и гриль", price: 270, weight: 180, weightNote: "в сыром виде", image: "/images/menu/shashlik-beef-liver.9c0849ff.webp", description: "Нежная говяжья печень, приготовленная на гриле.", descriptionVerified: false },
  { id: "steak-beef", name: "Стейк из говядины", category: "Шашлыки и гриль", price: 1000, weight: 500, weightNote: "в сыром виде", image: "/images/menu/steak-beef.e974786a.webp", description: "Сочный стейк из говядины с румяной корочкой.", descriptionVerified: false },

  // Гарниры
  { id: "fries", name: "Картофель фри", category: "Гарниры", price: 150, weight: 150, image: "/images/menu/fries.9f71df55.webp", description: "Золотистый хрустящий картофель фри.", descriptionVerified: false },
  { id: "mashed-potato", name: "Картофельное пюре", category: "Гарниры", price: 170, weight: 170, image: "/images/menu/mashed-potato.85250282.webp", description: "Нежное воздушное картофельное пюре.", descriptionVerified: false },
  { id: "pasta", name: "Макароны", category: "Гарниры", price: 150, weight: 150, image: "/images/menu/pasta.6b719ac0.webp", description: "Мягкие макароны — классический гарнир к мясным блюдам.", descriptionVerified: false },
  { id: "buckwheat", name: "Гречка", category: "Гарниры", price: 150, weight: 150, image: "/images/menu/buckwheat.f82e8d55.webp", description: "Рассыпчатая гречка — простой и сытный гарнир.", descriptionVerified: false },
  { id: "rice", name: "Рис", category: "Гарниры", price: 150, weight: 150, image: "/images/menu/rice.516308a8.webp", description: "Рассыпчатый отварной рис — нейтральный гарнир к мясу.", descriptionVerified: false },

  // Выпечка
  { id: "pakhlava", name: "Пахлава", category: "Выпечка", price: 100, image: "/images/menu/pakhlava.85417ab1.webp", description: "Тонкие слои хрустящего теста с ореховой начинкой и сладким сиропом.", descriptionVerified: false },
  { id: "flatbread", name: "Лепёшка", category: "Выпечка", price: 50, weight: 200, image: "/images/menu/flatbread.74a90372.webp", description: "Тёплая румяная лепёшка из тандыра.", descriptionVerified: false },
  { id: "samsa-tandoor-large", name: "Самса из тандыра (большая)", category: "Выпечка", price: 180, weight: 250, image: "/images/menu/samsa-tandoor-large.72bbabc0.webp", description: "Румяная самса с ароматной начинкой, приготовленная в традиционном тандыре.", descriptionVerified: false },
  { id: "samsa-tandoor-small", name: "Самса из тандыра (маленькая)", category: "Выпечка", price: 150, weight: 200, image: "/images/menu/samsa-tandoor-small.6bb81f9a.webp", description: "Румяная самса с ароматной начинкой, приготовленная в традиционном тандыре.", descriptionVerified: false },
  { id: "samsa-puff-lamb", name: "Самса из слоёного теста с бараниной", category: "Выпечка", price: 120, image: "/images/menu/samsa-puff-lamb.29833b2e.webp", description: "Сочная баранина, лук и ароматные специи в хрустящем слоёном тесте.", descriptionVerified: false },
  { id: "samsa-puff-beef", name: "Самса из слоёного теста с говядиной", category: "Выпечка", price: 120, weight: 200, image: "/images/menu/samsa-puff-beef.555eabe8.webp", description: "Сочная говядина, лук и ароматные специи в хрустящем слоёном тесте.", descriptionVerified: false },
  { id: "samsa-puff-chicken", name: "Самса из слоёного теста с курицей", category: "Выпечка", price: 100, weight: 150, image: "/images/menu/samsa-puff-chicken.29833b2e.webp", description: "Нежная курица, лук и ароматные специи в хрустящем слоёном тесте.", descriptionVerified: false },

  // Первые блюда
  { id: "shurpa-beef", name: "Шурпа из говядины", category: "Первые блюда", price: 370, weight: 400, image: "/images/menu/shurpa-beef.e7147787.webp", description: "Наваристый бульон с говядиной, картофелем, морковью, луком и душистыми специями.", descriptionVerified: false },
  { id: "lagman", name: "Лагман", category: "Первые блюда", price: 370, weight: 400, image: "/images/menu/lagman.0cbf30df.webp", description: "Лапша с мясом, болгарским перцем, морковью и луком в насыщенном ароматном бульоне.", descriptionVerified: false },
  { id: "chuchvara", name: "Чучвара (пельмени с бульоном)", category: "Первые блюда", price: 320, weight: 350, image: "/images/menu/chuchvara.4a2ad84f.webp", description: "Маленькие пельмени с мясной начинкой в прозрачном ароматном бульоне.", descriptionVerified: false },
  { id: "borscht", name: "Борщ", category: "Первые блюда", price: 350, weight: 400, image: "/images/menu/borscht.c20a31c0.webp", description: "Наваристый борщ со свёклой, капустой, картофелем и морковью — насыщенный и согревающий.", descriptionVerified: false },
  { id: "solyanka", name: "Солянка", category: "Первые блюда", price: 350, weight: 400, image: "/images/menu/solyanka.0dc7a50b.webp", description: "Наваристый мясной суп с копчёностями, солёными огурцами, маслинами, томатной пастой и лимоном.", descriptionVerified: false },
  { id: "mastava", name: "Мастава", category: "Первые блюда", price: 370, weight: 400, image: "/images/menu/mastava.7451ce9a.webp", description: "Густой суп с рисом, мясом и овощами в наваристом бульоне.", descriptionVerified: false },

  // Вторые блюда
  { id: "plov-beef", name: "Плов из говядины", category: "Вторые блюда", price: 430, weight: 400, image: "/images/menu/plov-beef.19df1cb9.webp", description: "Нежная говядина, рассыпчатый рис, сладкая морковь, лук и ароматные специи.", descriptionVerified: false },
  { id: "goulash", name: "Гуляш", category: "Вторые блюда", price: 370, weight: 400, image: "/images/menu/goulash.72a11afa.webp", description: "Нежные кусочки говядины, тушёные до мягкости в густой ароматной подливе.", descriptionVerified: false },
  { id: "manty", name: "Манты (4 шт.)", category: "Вторые блюда", price: 370, weight: 360, image: "/images/menu/manty.a2f0f87a.webp", description: "Сочная говядина с луком и специями, бережно завёрнутая в тонкое тесто.", descriptionVerified: false },
  { id: "khonum", name: "Хонум", category: "Вторые блюда", price: 350, weight: 330, image: "/images/menu/khonum.139c7949.webp", description: "Нежное тесто с сочной начинкой из говядины, картофеля и репчатого лука.", descriptionVerified: true },
  { id: "fried-lagman", name: "Жареный лагман", category: "Вторые блюда", price: 370, weight: 300, image: "/images/menu/fried-lagman.5c9eb4d7.webp", description: "Обжаренная лапша с кусочками мяса и свежими овощами — сытное горячее блюдо.", descriptionVerified: false },
  { id: "syltama", name: "Сылтама с гарниром", category: "Вторые блюда", price: 470, weight: 350, image: "/images/menu/syltama.d2eae1e5.webp", description: "Нежная говядина с репчатым луком, болгарским перцем, томатами и свежей зеленью. Подаётся с рисом.", descriptionVerified: true },
  { id: "kazan-kebab-beef", name: "Казан-кебаб из говядины", category: "Вторые блюда", price: 520, image: "/images/menu/kazan-kebab-beef.6f2e8128.webp", description: "Сочная говядина с обжаренным картофелем, свежим репчатым луком и ароматной зеленью.", descriptionVerified: true },
  { id: "chicken-leg-garnish", name: "Куриный окорочок с гарниром", category: "Вторые блюда", price: 400, weight: 350, image: "/images/menu/chicken-leg-garnish.3e247849.webp", description: "Румяный куриный окорочок, подаётся с гарниром.", descriptionVerified: false },
];
