import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LargeCardsData } from "./cardsData";

export function LargeCards() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {LargeCardsData.map((card) => (
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
