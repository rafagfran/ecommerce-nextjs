import { Navbar } from "@/components/dashboard/layout/Navbar";
import { Sidebar } from "@/components/dashboard/layout/sidebar";
import { SidebarProvider } from "@/contexts/sidebarContext";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <div className="grid grid-cols-[auto_1fr]">
        <Sidebar />
        <section className="grid grid-rows-[auto_1fr] p w-full  mx-auto">
          <Navbar />
          <main className="min-h-screen  p-4">{children}</main>
        </section>
      </div>
    </SidebarProvider>
  );
}
