"use client";

import { AlignRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCallback, useState } from "react";
import { ThemeColorToggle } from "../ui/theme-color-toggle";
import { ThemeModeToggle } from "../ui/theme-mode-toggle";

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsOpen((value) => !value);
  }, [setIsOpen]);
  
  return (
    <div className="relative z-20">
      <div 
        onClick={toggleMenu}
        className="border rounded-full py-2 px-3 flex justify-between gap-3 items-center cursor-pointer hover:shadow"
      >
        <AlignRight />
        <Avatar className="select-none">
          <AvatarImage src="https://github.com/shadcn.png" className=""/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      
      {isOpen && (
        <div className="flex absolute right-0 top-16 border rounded-xl p-3 min-w-[300px] w-full bg-background shadow-sm">
          <div className="flex gap-5">
            <ThemeColorToggle/>
            <ThemeModeToggle />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
