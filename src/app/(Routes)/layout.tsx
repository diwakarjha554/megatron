import Header from "@/components/Header/Header";

const Routeslayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
        <Header />
        {children}
    </>
  );
};

export default Routeslayout;