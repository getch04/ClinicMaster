"use client";
import {
  AppShell,
  Burger,
  Group,
  Loader,
  ScrollArea,
  Skeleton,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useIsMounted } from "src/shared";

const RootPortalLayout = ({ children }: { children: React.ReactNode }) => {
  const mounted = useIsMounted();
  const [opened, { toggle }] = useDisclosure();

  if (!mounted) {
    return (
      <div className="min-h-screen relative">
        <Loader />
      </div>
    );
  } else {
    return (
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text className="font-bold">CLINIC</Text>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <AppShell.Section>Navbar header</AppShell.Section>
          <AppShell.Section grow my="md" component={ScrollArea}>
            60 links in a scrollable section
            {Array(60)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} h={28} mt="sm" animate={false} />
              ))}
          </AppShell.Section>
          <AppShell.Section>
            Navbar footer – always at the bottom
          </AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    );
  }
};

export default RootPortalLayout;
