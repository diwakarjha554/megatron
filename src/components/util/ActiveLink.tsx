"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  exact?: boolean;
  text: string;
  className?: string;
}

const ActiveLink: React.FC<NavLinkProps> = ({
  href,
  exact,
  text,
  className,
}) => {
  const pathname = usePathname() ?? "";

  let isActive = exact ? pathname === href : pathname.startsWith(href);

  if (!exact) {
    isActive = false;
  }

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "!text-[#FF5956]" : "text-custom-txl"}
      dark:text-custom-txd hover:text-[#FF5956] hover:cursor-pointer
      dark:hover:text-[#FF5956]`}
    >
      {text}
    </Link>
  );
};

export default ActiveLink;
