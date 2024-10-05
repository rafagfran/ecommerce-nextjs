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

//TODO: Isto esta porco, tem que ser melhorado
export function Sidebar() {
  return (
    <aside className="bg-secondary text-slate-800 space-y-6 w-52 h-screen p-8 fixed top-0 left-0">
      <Link href={"#"} className="flex items-center space-x-2">
        <h3 className="text-primary">Ecommerce</h3>
      </Link>

      <ul className="space-y-6 flex flex-col">
        <li>
          <Link href="#" className="flex items-center space-x-2">
            <Home />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center space-x-2">
            <Box />
            <span>Catalogue</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center space-x-2">
            <Users />
            <span>Customers</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center space-x-2">
            <ShoppingCart />
            <span>Markets</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center space-x-2">
            <User />
            <span>Farmers</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center space-x-2">
            <Package />
            <span>Orders</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center space-x-2">
            <Users />
            <span>Staff</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center space-x-2">
            <Settings />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center space-x-2">
            <Store />
            <span>Online Store</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
