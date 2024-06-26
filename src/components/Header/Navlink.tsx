"use client";

import ActiveLink from "@/components/util/ActiveLink";

interface NavlinkProps {
  className?: string;
}

const Navlink: React.FC<NavlinkProps> = ({ className }) => {
  return (
    <div className={`${className} flex gap-5 font-[500]`}>
      <ActiveLink exact href="/" text="Home" />
      <ActiveLink exact href="/about-us" text="About" />
      <ActiveLink exact href="/contact-us" text="Contact" />
      <ActiveLink exact href="/payments" text="Payments" />
    </div>
  );
};

export default Navlink;
