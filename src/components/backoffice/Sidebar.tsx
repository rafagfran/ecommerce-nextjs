import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="bg-slate-800 space-y-6 text-destructive-foreground w-52">
      <Link href="#">Logo</Link>
      <div>
        <ul className="space-y-3">
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
            <Link href="#">Famers</Link>
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
      </div>
    </aside>
  );
}
