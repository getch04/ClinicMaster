'use client';

import { Box, Text } from "@mantine/core";
import { usePathname } from 'next/navigation';

const ClientPageWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const getTitleFromPath = (path: string) => {
    if (path === "/") return "Dashboard";
    const parts = path.split("/");
    return parts
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" > ");
  };

  return (
    <Box p="md">
      <Text size="xl" fw={700} mb="lg" className="text-secondary-900">
        {getTitleFromPath(pathname)}
      </Text>
      {children}
    </Box>
  );
};

export default ClientPageWrapper;