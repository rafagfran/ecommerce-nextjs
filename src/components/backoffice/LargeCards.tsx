import { LayersIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader } from "../ui/card";

export function LargeCards() {
  const cards = [
    {
      title: "Today Orders",
      value: "1000,00",
      icon: LayersIcon,
      color: "bg-green-500",
    },
    {
      title: "Yesterday Orders",
      value: "0",
      icon: LayersIcon,
      color: "bg-blue-500",
    },
    {
      title: "This Month",
      value: "12000,00",
      icon: LayersIcon,
      color: "bg-orange-500",
    },
    {
      title: "Last Month",
      value: "141K",
      icon: LayersIcon,
      color: "bg-purple-500",
    },
    {
      title: "All-times Sales",
      value: "20M",
      icon: LayersIcon,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {cards.map((card) => (
        <Card key={card.title} className={`text-white ${card.color}`}>
          <CardHeader>
            <card.icon className="size-6" />
            <h4>{card.title}</h4>
          </CardHeader>
          <CardContent>
            <h3>R$ {card.value}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
