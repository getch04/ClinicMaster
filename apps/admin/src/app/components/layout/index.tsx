import {
  AppShell,
  Box,
  ScrollArea,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconMenu2 as IconMenu } from "@tabler/icons-react";
import menuItems from "../dashboard/menu_items";
import ClientNavWrapper from "../clientNavWrapper/clientNavWrapper";

const RootAdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell
      padding="md"
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: true },
      }}
      header={{ height: 60 }}
    >
      <AppShell.Header className="bg-secondary-800 flex justify-between items-center px-4">
        <Text c="primary" size="xl" fw={700}>
          Dental Clinic
        </Text>
        <UnstyledButton className="md:hidden">
          <IconMenu color="white" />
        </UnstyledButton>
      </AppShell.Header>

      <AppShell.Navbar p="xs" className="bg-secondary-900 flex flex-col">
        <ScrollArea className="flex-grow">
          <ClientNavWrapper menuItems={menuItems} />
        </ScrollArea>
        <Box className="border-t border-white pt-4 mt-4 sticky bottom-0 bg-secondary-900">
          <Text size="xs" c="secondary-300" className="text-center text-white">
            © 2024 Dental Clinic Admin
          </Text>
        </Box>
      </AppShell.Navbar>

      <AppShell.Main className="bg-secondary-50">
        <Box p="md">
          {children}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
};

export default RootAdminLayout;