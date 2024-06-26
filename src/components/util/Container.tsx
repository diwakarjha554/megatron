"use client";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`${className} w-[95%] sm:w-[90%] max-w-[1600px]`}>{children}</div>;
};

export default Container;
