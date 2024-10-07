import {
  Box,
  Home,
  Package,
  Settings,
  ShoppingCart,
  Store,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const SidebarItem = ({ icon, title }: { icon: ReactNode; title: string }) => {
  return (
    <li>
      <Link
        href="#"
        className="flex items-center px-2 py-3 space-x-3 duration-200 ease-in-out hover:text-primary hover:bg-primary/5 hover: hover:transition-color rounded-l-md"
      >
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  );
};

//TODO: Isto esta porco, tem que ser melhorado
export function Sidebar() {
  const items = [
    { icon: <Home />, title: "Dashboard" },
    { icon: <Box />, title: "Catalogue" },
    { icon: <Users />, title: "Customers" },
    { icon: <ShoppingCart />, title: "Markets" },
    { icon: <User />, title: "Farmers" },
    { icon: <Package />, title: "Orders" },
    { icon: <Users />, title: "Staff" },
    { icon: <Settings />, title: "Settings" },
    { icon: <Store />, title: "Online Store" },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen p-8 pr-0 space-y-6 bg-secondary w-52">
      <Link href={"#"} className="flex items-center space-x-2">
        <h3 className="text-primary">Ecommerce</h3>
      </Link>

      <ul className="flex flex-col">
        {items.map((item) => (
          <SidebarItem key={item.title} icon={item.icon} title={item.title} />
        ))}
      </ul>
    </aside>
  );
}
