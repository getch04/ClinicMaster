"use client";
import { AppShell, Loader } from "@mantine/core";
import { ScrollTopAffix, useIsMounted } from "../../_shared";
import Header from "./header/header";
import Main from "./main";
import Footer from "./footer/footer";

const RootPortalLayout = ({ children }: { children: React.ReactNode }) => {
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <div className="min-h-screen relative">
        <Loader />
      </div>
    );
  } else {
    return (
      <AppShell className="flex flex-col min-h-screen ">
        <Header />
        <Main>{children}</Main>
        <Footer />
        <ScrollTopAffix />
      </AppShell>
    );
  }
};

export default RootPortalLayout;
