"use client";
import { AppShell, Loader } from "@mantine/core";
import Header from "./header/header";
import Main from "./main";
import Footer from "./footer/footer";
import { ScrollTopAffix, useIsMounted } from "../../../shared";
import TopHeader from "./header/top-header";

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
              <TopHeader />
        <Header />
        <Main>{children}</Main>
        <Footer />
        <ScrollTopAffix />
      </AppShell>
    );
  }
};

export default RootPortalLayout;
