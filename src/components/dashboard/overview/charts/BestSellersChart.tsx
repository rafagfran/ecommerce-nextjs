"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 0.3)",
        "rgba(54, 162, 235, 0.3)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.3)",
      ],
      borderWidth: 1,
    },
  ],
};

export function BestSellersChart() {
  return (
    <Card className="">
      <CardHeader>
        <h4 className="mb-6"> Best Selling Charts</h4>
      </CardHeader>
      <CardContent>
        <Pie data={data} />
      </CardContent>
    </Card>
  );
}
