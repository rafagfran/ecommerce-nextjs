import { Navbar } from "@/components/backoffice/Navbar";
import { Sidebar } from "@/components/backoffice/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <h2>
          <Navbar />
        </h2>
        <main>{children}</main>
      </div>
    </div>
  );
}
