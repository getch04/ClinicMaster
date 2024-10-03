"use client";
import { AppShell, Loader } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useIsMounted } from "src/shared";

const RootAdminLayout = ({ children }: { children: React.ReactNode }) => {
  const mounted = useIsMounted();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  if (!mounted) {
    return (
      <div className="min-h-screen relative">
        <Loader />
      </div>
    );
  } else {
    return (
      <AppShell className="flex flex-col min-h-screen">
        <div>{children}</div>
      </AppShell>

      //   <AppShell
      //     header={{ height: 60 }}
      //     navbar={{
      //       width: 300,
      //       breakpoint: "sm",
      //       collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      //     }}
      //     padding="md"
      //   >
      //     <AppShell.Header>
      //       <Group h="100%" px="md">
      //         <Burger
      //           opened={mobileOpened}
      //           onClick={toggleMobile}
      //           hiddenFrom="sm"
      //           size="sm"
      //         />
      //         <Burger
      //           opened={desktopOpened}
      //           onClick={toggleDesktop}
      //           visibleFrom="sm"
      //           size="sm"
      //         />
      //         <Text className="text-primary-900">CLINIC</Text>
      //       </Group>
      //     </AppShell.Header>
      //     <AppShell.Navbar p="md">
      //       Navbar
      //       {Array(15)
      //         .fill(0)
      //         .map((_, index) => (
      //           <Skeleton key={index} h={28} mt="sm" animate={false} />
      //         ))}
      //     </AppShell.Navbar>
      //     <AppShell.Main>Main</AppShell.Main>
      //   </AppShell>
    );
  }
};

export default RootAdminLayout;
