import { streetFood } from "@/data/streetfood";
import { StreetFoodCard } from "./StreetFoodCard";

// От sm две независимые колонки (1 и 3 слева, 2 и 4 справа): раскрытие карточки не растягивает соседей
// и не сдвигает другую колонку. На телефоне колонки «растворяются» (contents), карточки идут одним
// столбцом в порядке 1-2-3-4 за счёт order.
const mobileOrder = ["order-1", "order-2", "order-3", "order-4"];

export function StreetFoodSection() {
  const columns = [0, 1].map((c) => streetFood.map((g, i) => ({ g, i })).filter(({ i }) => i % 2 === c));
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
      {columns.map((col, c) => (
        <ul key={c} className="contents sm:flex sm:min-w-0 sm:flex-1 sm:flex-col sm:gap-6">
          {col.map(({ g, i }) => <StreetFoodCard key={g.id} group={g} className={`${mobileOrder[i]} sm:order-none`} />)}
        </ul>
      ))}
    </div>
  );
}
