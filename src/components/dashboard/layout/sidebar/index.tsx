"use client";
import { useSidebar } from "@/contexts/sidebarContext";
import {
  Book,
  ClipboardList,
  Grid,
  Image,
  LayoutDashboard,
  List,
  Package,
  Settings,
  ShoppingCart,
  Store,
  TicketPercent,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  const items = [
    { icon: LayoutDashboard, title: "Dashboard", href: "/dashboard" },
    {
      icon: Book,
      title: "Catalogue",
      subLinks: [
        {
          icon: Package,
          title: "Products",
          href: "/dashboard/catalogue/products",
        },
        {
          icon: Grid,
          title: "Categories",
          href: "/dashboard/catalogue/categories",
        },
        {
          icon: List,
          title: "Attributes",
          href: "/dashboard/catalogue/attributes",
        },
        { icon: Image, title: "Banners", href: "/dashboard/catalogue/banners" },
        {
          icon: TicketPercent,
          title: "Coupons",
          href: "/dashboard/catalogue/coupons",
        },
      ],
    },
    { icon: Users, title: "Customers", href: "/customers" },
    { icon: ShoppingCart, title: "Markets", href: "/markets" },
    { icon: User, title: "Farmers", href: "/farmers" },
    { icon: ClipboardList, title: "Orders", href: "/orders" },
    { icon: Users, title: "Staff", href: "/staff" },
    { icon: Settings, title: "Settings", href: "/settings" },
    { icon: Store, title: "Online Store", href: "/store" },
  ];

  //TODO: OS icones estao se mexendo na anima;cao da sidebar
  return (
    <aside
      id="sidebar"
      className={`sticky top-0 self-start h-screen bg-secondary transition-all duration-300 ease-in-out ${isSidebarOpen ? " w-60" : "w-20 "} `}
    >
      <div className="flex items-center justify-center border-b py-4 pb-5 mb-6">
        <Link href={"#"} className="">
          <h4 className="text-primary">{isSidebarOpen ? "Ecommerce" : "E"}</h4>
        </Link>
      </div>

      <nav className="p-4 space-y-2">
        {items.map((item) => (
          <SidebarItem
            key={item.title}
            {...item}
            isSidebarOpen={isSidebarOpen}
          />
        ))}
      </nav>
    </aside>
  );
}
