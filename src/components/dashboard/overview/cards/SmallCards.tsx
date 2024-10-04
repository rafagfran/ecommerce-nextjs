import { Card, CardContent } from "@/components/ui/card";
import { SmallCardsData } from "./cardsData";

export function SmallCards() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {SmallCardsData.map((card) => (
        <Card key={card.title} className="">
          <CardContent className="flex items-center h-full gap-4 p-5">
            <div
              className={`p-2 rounded-full  flex items-center justify-center ${card.color}`}
            >
              <card.icon className="size-6 text-primary-foreground" />
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
