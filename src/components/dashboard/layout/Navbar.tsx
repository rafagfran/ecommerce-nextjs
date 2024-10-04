"use client";

import { Button } from "@/components/ui/button";
import {
  BellIcon,
  HamburgerMenuIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b bg-background/80 h-16 px-8 py-4 fixed top-0 right-0 left-52 transition-transform duration-300 backdrop-blur-md">
      <Button type="button" variant="ghost">
        <HamburgerMenuIcon className="size-6" />
      </Button>
      <div className="flex">
        <Button type="button" variant="ghost">
          <SunIcon className="size-6" />
        </Button>
        <Button type="button" variant="ghost">
          <BellIcon className="size-6" />
        </Button>
        <Button type="button" variant="ghost">
          <PersonIcon className="size-6" />
        </Button>
      </div>
    </nav>
  );
}
