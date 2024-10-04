"use client";
import { AppShell, Loader } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "src/app/store";
import { useIsMounted } from "src/shared";

const RootAdminLayout = ({ children }: { children: React.ReactNode }) => {
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <div className="min-h-screen relative">
        <Loader />
      </div>
    );
  } else {
    return (
      <Provider store={store}>
        <AppShell className="flex flex-col min-h-screen">
          <div>{children}</div>
        </AppShell>
      </Provider>
    );
  }
};

export default RootAdminLayout;
