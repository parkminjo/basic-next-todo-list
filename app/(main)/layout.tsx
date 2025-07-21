import Header from "@/components/layout/header";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <main> {children}</main>
    </div>
  );
};

export default MainLayout;
