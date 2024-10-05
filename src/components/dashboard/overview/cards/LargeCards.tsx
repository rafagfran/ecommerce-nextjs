import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LargeCardsData } from "./cardsData";

export function LargeCards() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 ">
      {LargeCardsData.map((card) => (
        <Card key={card.title}>
          <CardContent className="p-6 space-y-4">
            <div>
              <h5 className="mb-2">
                {card.title}{" "}
                <span className="text-green-600 font-medium">+30%</span>
              </h5>
              <h3>R$ {card.value}</h3>
            </div>
            <div className="flex gap-2">
              <h5>
                {card.lastMonth
                  ? "Ultimo mês R$ " + card.lastMonth
                  : card.yesterday
                    ? "Ontem R$ " + card.yesterday
                    : ""}
              </h5>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
