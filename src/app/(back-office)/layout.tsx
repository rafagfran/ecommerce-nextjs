import { Navbar } from "@/components/dashboard/layout/Navbar";
import { Sidebar } from "@/components/dashboard/layout/Sidebar";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ">
        <Navbar />
        <main className="flex-1 min-h-screen p-8 ml-52 ">{children}</main>
      </div>
    </div>
  );
}
