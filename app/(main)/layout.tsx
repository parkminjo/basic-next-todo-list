import Header from "@/components/layout/header";
import { ROUTER_PATH } from "@/constants/router-path";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

const MainLayout = async ({ children }: PropsWithChildren) => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect(ROUTER_PATH.LOGIN);
  }
  return (
    <div>
      <Header />
      <main> {children}</main>
    </div>
  );
};

export default MainLayout;
