"use client";

import { Button } from "@/components/ui/button";
import {
  BellIcon,
  HamburgerMenuIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";

export function Navbar() {
  function activeDarkTheme() {
    document.body.classList.toggle("dark");
  }

  return (
    <nav className="flex items-center justify-between p-4 py-8 ml-52">
      <Button type="button" variant="ghost">
        <HamburgerMenuIcon className="size-6" />
      </Button>
      <div className="flex">
        <Button type="button" variant="ghost" onClick={activeDarkTheme}>
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
