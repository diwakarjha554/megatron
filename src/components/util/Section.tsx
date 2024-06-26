"use client";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return <section className={`${className} flex justify-center`}>{children}</section>;
};

export default Section;
