import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";

const useCollapsibleState = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  return [isOpen, toggle] as const;
};

type SidebarItemProps = {
  icon: React.ElementType;
  title: string;
  href?: string;
  subLinks?: { icon: React.ElementType; title: string; href: string }[];
  isSidebarOpen: boolean;
};

export function SidebarItem({
  icon: Icon,
  title,
  href,
  subLinks,
  isSidebarOpen,
}: SidebarItemProps) {
  const [isOpen, toggle] = useCollapsibleState();

  const commonClasses =
    "flex items-center w-full py-2 px-3 rounded-md transition-colors duration-200 hover:bg-primary/10 hover:text-primary";

  if (subLinks) {
    return (
      <Collapsible open={isOpen && isSidebarOpen} onOpenChange={toggle}>
        <CollapsibleTrigger className={cn(commonClasses, "justify-between")}>
          <div className="flex items-center space-x-3">
            <Icon className="min-w-5 h-5" />
            {isSidebarOpen && <span className="font-medium ">{title}</span>}
          </div>
          {isSidebarOpen &&
            (isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            ))}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="mt-2 ml-4 space-y-1">
            {subLinks.map((subLink) => (
              <li key={subLink.title}>
                <Link href={subLink.href} className={commonClasses}>
                  <subLink.icon className="min-w-4 h-4 mr-3" />
                  {isSidebarOpen && (
                    <span className="text-sm">{subLink.title}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Link href={href || "#"} className={commonClasses}>
      <Icon className="min-w-5 h-5" />
      {isSidebarOpen && (
        <span className="ml-3 font-medium truncate">{title}</span>
      )}
    </Link>
  );
}
