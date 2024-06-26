"use client";

import Container from "@/components/util/Container";
import Section from "@/components/util/Section";
import Logo from "@/components/util/Logo";
import Navlink from "@/components/Header/Navlink";
import Menu from "@/components/Header/Menu";

const Header = () => {
  return (
    <Section className="shadow-sm border-b-[1px] fixed top-0 w-full bg-background z-10">
      <Container className="py-2 flex justify-between items-center">
        <Logo txt txtClass="text-2xl hidden lg:flex" className="" />
        <div className="flex items-center gap-10">
          <Navlink className="hidden lg:flex" />
          <Menu />
        </div>
      </Container>
    </Section>
  );
};

export default Header;
