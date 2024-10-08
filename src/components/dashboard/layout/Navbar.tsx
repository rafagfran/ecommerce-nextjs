"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/contexts/sidebarContext";
import { BellIcon, HamburgerMenuIcon, SunIcon } from "@radix-ui/react-icons";
import { User } from "lucide-react";

export function Navbar() {
  const { toggleSidebar } = useSidebar();
  const countNotifications = 999;

  function changeTheme() {
    document.body.classList.toggle("dark");
  }

  return (
    <nav className="mb-6 p-4 border-b sticky top-0 self-start bg-background/50 backdrop-blur-md">
      <div className="flex items-center justify-between  ">
        <Button
          type="button"
          variant="ghost"
          size={"icon"}
          onClick={toggleSidebar}
        >
          <HamburgerMenuIcon className="size-6" />
        </Button>

        <div className="flex items-center space-x-4">
          <Button
            type="button"
            variant="ghost"
            onClick={changeTheme}
            size={"icon"}
            className="hover:border hover:border-primary"
          >
            <SunIcon className="size-6" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="Notifications"
              >
                <span className="absolute -top-1 -left-2 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full ring-1 ring-destructive-foreground">
                  {countNotifications > 99 ? "99+" : countNotifications}
                </span>
                <BellIcon className="size-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="flex justify-between items-center ">
                <span>Notificações</span>
                <Button
                  variant={"link"}
                  size={"sm"}
                  type="button"
                  className="p-0"
                >
                  Marcar todas como lidas
                </Button>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />
              {Array.from({ length: 5 }).map((_, i) => (
                <DropdownMenuItem
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={i}
                  className="flex items-start gap-3 p-3"
                >
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={`https://i.pravatar.cc/150?img=${i + 1}`}
                      alt="User avatar"
                    />
                    <AvatarFallback>U{i + 1}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">
                      <strong>Usuário {i + 1}</strong> finalizou uma compra de
                      Slowbox
                    </p>
                    <span className="text-xs text-muted-foreground">
                      há {i + 1}m atrás
                    </span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                aria-label="User menu"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User avatar"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Meu perfil</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>Faturamento</DropdownMenuItem>
              <DropdownMenuItem>Equipe</DropdownMenuItem>
              <DropdownMenuItem>Assinatura</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
