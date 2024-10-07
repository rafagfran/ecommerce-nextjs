import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { LargeCardsData } from "./cardsData";

export function LargeCards() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
      {LargeCardsData.map((card) => (
        <Card key={card.title}>
          <CardHeader>
            <p>
              {card.title}{" "}
              <span className="text-lg font-medium text-green-600">+30%</span>
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="focus-text">R$ {card.value}</p>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground">
              {card.lastMonth
                ? `Último mês: R$ ${card.lastMonth}`
                : card.yesterday
                  ? `Ontem: R$ ${card.yesterday}`
                  : ""}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
