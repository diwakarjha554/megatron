"use client";

import Link from "next/link";

interface LogoProps {
  txtClass?: string;
  className?: string;
  txt?: boolean;
}

const Logo: React.FC<LogoProps> = ({ txt, txtClass, className }) => {
  return (
    <Link href="/" className={`${className} select-none`}>
      {txt && (
        <span className={`${txtClass} text-[#FF5956] font-[600]`}>Travel Trail Holidays</span>
      )}
    </Link>
  );
};

export default Logo;
