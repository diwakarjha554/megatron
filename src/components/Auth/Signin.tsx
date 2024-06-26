'use client';

import Section from "@/components/util/Section";
import Logo from "@/components/util/Logo";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const Signin = () => {

    

  return (
    <Section className="w-full h-screen items-center flex flex-col gap-3">
        <Link 
            href="/"
        >
            <ChevronLeft size={40} className="absolute left-5 p-2 top-5 rounded-full bg-rose-200 cursor-pointer hover:bg-rose-200/90"/>
        </Link>
        <Logo txt txtClass="text-2xl" className=""/>
        <h1 className="text-2xl mt-2 font-[400]">Sign in or create an account</h1>
    </Section>
  )
}

export default Signin;
