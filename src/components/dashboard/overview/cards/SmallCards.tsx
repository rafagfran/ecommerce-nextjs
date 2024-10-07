import { Card, CardContent } from "@/components/ui/card";
import { SmallCardsData } from "./cardsData";

export function SmallCards() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {SmallCardsData.map((card) => (
        <Card key={card.title} className="">
          <CardContent className="flex items-center gap-4 p-6">
            <span
              className={`p-2 rounded-full flex items-center justify-center ${card.color}`}
            >
              <card.icon className="size-6 text-primary-foreground" />
            </span>
            <div className="space-y-2">
              <p>{card.title}</p>
              <p className="focus-text">{card.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
