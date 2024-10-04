import { Heading } from "@/components/dashboard/layout/Heading";
import { LargeCards } from "@/components/dashboard/overview/cards/LargeCards";
import { SmallCards } from "@/components/dashboard/overview/cards/SmallCards";
import { DashboardCharts } from "@/components/dashboard/overview/charts";

export default function Dashboard() {
  return (
    <div className="space-y-6 ">
      <Heading title="Dashboard Overview" />
      <LargeCards />
      <SmallCards />
      <DashboardCharts />
    </div>
  );
}
