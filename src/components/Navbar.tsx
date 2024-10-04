import {
  BellIcon,
  HamburgerMenuIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-primary text-primary-foreground h-16 px-8 py-4	fixed top-0 right-0 left-52">
      <Button type="button" variant={"ghost"}>
        <HamburgerMenuIcon className="size-6" />
      </Button>
      <div className="flex ">
        <Button type="button" variant={"ghost"}>
          <SunIcon className="size-6" />
        </Button>
        <Button type="button" variant={"ghost"}>
          <BellIcon className="size-6" />
        </Button>
        <Button type="button" variant={"ghost"}>
          <PersonIcon className="size-6" />
        </Button>
      </div>
    </nav>
  );
}
