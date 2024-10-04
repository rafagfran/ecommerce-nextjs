import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="bg-primary text-primary-foreground space-y-6 w-52 h-screen p-3 fixed top-0 left-0">
      <Link href={"#"}>Logo</Link>

      <ul className="space-y-3 flex flex-col">
        <li>
          <Link href="#">Dashboard</Link>
        </li>
        <li>
          <Link href="#">Catalogue</Link>
        </li>
        <li>
          <Link href="#">Customers</Link>
        </li>
        <li>
          <Link href="#">Markets</Link>
        </li>
        <li>
          <Link href="#">Farmers</Link>
        </li>
        <li>
          <Link href="#">Orders</Link>
        </li>
        <li>
          <Link href="#">Staff</Link>
        </li>
        <li>
          <Link href="#">Settings</Link>
        </li>
        <li>
          <Link href="#">Online Store</Link>
        </li>
      </ul>
    </aside>
  );
}
