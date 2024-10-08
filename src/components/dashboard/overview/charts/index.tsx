import { BestSellersChart } from "./BestSellersChart";
import { WeeklySalesChart } from "./WeeklySalesChart";

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <WeeklySalesChart />
      <BestSellersChart />
    </div>
  );
}
