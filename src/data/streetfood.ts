// Стритфуд: 4 группы, внутри — варианты с ценами. Цены строго по прайсу кафе, не пересчитывать.
// Фото: когда появятся, добавьте путь в `image` нужной группы (например /images/menu/shawarma-chicken.<hash>.webp).

export interface StreetFoodVariant {
  id: string;
  name: string;
  price: number;
}

export interface StreetFoodGroup {
  id: string;
  name: string;
  description: string; // предварительное описание, без точных ингредиентов и граммовок
  image?: string;
  defaultVariantId: string;
  variants: StreetFoodVariant[];
}

const v = (id: string, name: string, price: number): StreetFoodVariant => ({ id, name, price });

export const streetFood: StreetFoodGroup[] = [
  {
    id: "shawarma-chicken",
    image: "/images/menu/shawarma-chicken.55d76ce3.webp",
    name: "Шаурма с курицей",
    description: "Нежная курица, свежие овощи и аппетитный лаваш с румяной корочкой.",
    defaultVariantId: "classic",
    variants: [
      v("classic", "Классическая", 280),
      v("cheese-lavash", "В сырном лаваше", 320),
      v("cheese", "С сыром", 340),
      v("potato", "С картофелем", 340),
      v("summer-salad", "С летним салатом", 350),
      v("summer-salad-cheese", "С летним салатом и сыром", 370),
      v("potato-summer-salad", "С картофелем и летним салатом", 370),
      v("potato-cheese", "С картофелем и сыром", 370),
      v("vegetarian", "Вегетарианская", 250),
      v("original", "Оригинальная", 420),
      v("double-meat", "С двойным мясом", 420),
    ],
  },
  {
    id: "shawarma-beef",
    image: "/images/menu/shawarma-beef.cc32cee6.webp",
    name: "Шаурма из говядины",
    description: "Сочная говядина, свежие овощи и ароматный лаваш.",
    defaultVariantId: "classic",
    variants: [
      v("classic", "Классическая", 360),
      v("cheese-lavash", "В сырном лаваше", 370),
      v("cheese", "С сыром", 400),
      v("potato", "С картофелем", 380),
      v("summer-salad", "С летним салатом", 400),
      v("summer-salad-cheese", "С летним салатом и сыром", 420),
      v("potato-summer-salad", "С картофелем и летним салатом", 420),
      v("potato-cheese", "С картофелем и сыром", 420),
      v("doner", "Донер", 420),
      v("double-meat", "С двойным мясом", 470),
    ],
  },
  {
    id: "closed-pizza",
    image: "/images/menu/closed-pizza.9b5ebe08.webp",
    name: "Закрытая пицца",
    description: "Румяная закрытая пицца с сочной начинкой и аппетитной корочкой.",
    defaultVariantId: "classic",
    variants: [
      v("classic", "Классическая", 270),
      v("chicken-cheese", "С курицей и сыром", 330),
      v("chicken-cheese-fries", "С курицей, сыром и картофелем фри", 310),
      v("chicken-cheese-salad", "С курицей, сыром и летним салатом", 290),
      v("sausage-cheese", "С колбасой и сыром", 290),
      v("mushroom-cheese", "С грибами и сыром", 320),
      v("assorted", "Сборная", 350),
      v("double-meat", "С двойным мясом", 370),
    ],
  },
  {
    id: "doner",
    image: "/images/menu/doner.cfb2ad2e.webp",
    name: "Донер",
    description: "Сочная мясная начинка с овощами в подрумяненной лепёшке.",
    defaultVariantId: "potato",
    variants: [
      v("potato", "С картофелем", 420),
      v("summer-salad", "С летним салатом", 420),
      v("assorted", "Сборный", 450),
    ],
  },
];
