import { LayersIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "./ui/card";

export function SmallCards() {
  const cards = [
    {
      title: "Today Orders",
      value: "20",
      icon: LayersIcon,
      color: "bg-green-500",
    },
    {
      title: "Orders Pending",
      value: "10",
      icon: LayersIcon,
      color: "bg-blue-500",
    },
    {
      title: "Orders Processing",
      value: "45",
      icon: LayersIcon,
      color: "bg-orange-500",
    },
    {
      title: "Orders Delivered",
      icon: LayersIcon,
      value: "306",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {cards.map((card) => (
        <Card key={card.title} className="bg-primary text-primary-foreground">
          <CardContent className="flex gap-4 items-center h-full p-5">
            <div
              className={`p-2 rounded-full  flex items-center justify-center ${card.color}`}
            >
              <card.icon className="size-6" />
            </div>
            <div className="space-y-2">
              <h5>{card.title}</h5>
              <h3>{card.value}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
