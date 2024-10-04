import { DashboardCharts } from "@/components/DashboardCharts";
import { Heading } from "@/components/Heading";
import { LargeCards } from "@/components/LargeCards";
import { SmallCards } from "@/components/SmallCards";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <Heading title="Dashboard Overview" />
      <LargeCards />
      <SmallCards />
      <DashboardCharts />
    </div>
  );
}
