import { LayersIcon } from "@radix-ui/react-icons";

export const LargeCardsData = [
  {
    title: "Hoje",
    value: "1000,00",
    yesterday: "1200,00",
  },
  {
    title: "Este mês",
    value: "120.58K",
    lastMonth: "141.25K",
  },
  {
    title: "Todas as vendas",
    value: "20M",
  },
];

export const SmallCardsData = [
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
