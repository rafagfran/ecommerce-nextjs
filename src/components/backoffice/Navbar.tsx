import {
  BellIcon,
  HamburgerMenuIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export function Navbar() {
  return (
    <div className="flex items-center justify-between bg-">
      <Button>
        <HamburgerMenuIcon />
      </Button>
      <div className="flex space-x-3">
        <Button>
          <SunIcon />
        </Button>
        <Button>
          <BellIcon />
        </Button>
        <Button>
          <PersonIcon />
          <PersonIcon />
          <PersonIcon />
          <PersonIcon />
          <PersonIcon />
        </Button>
      </div>
    </div>
  );
}
