"use client";

import { type ReactNode, createContext, useContext, useState } from "react";

interface sidebarContextProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const SidebarContext = createContext({} as sidebarContextProps);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <SidebarContext.Provider value={{ toggleSidebar, isSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
