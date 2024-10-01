"use client";

import { Container, Text, Title } from "@mantine/core";

interface PageInProgressProps {
  pageName: string;
}

export function PageInProgress({ pageName }: PageInProgressProps) {
  return (
    <Container className="min-h-screen flex flex-col items-center justify-center text-center space-y-6">
      <Title order={2} className="text-4xl font-bold text-blue-700">
        {pageName} Page
      </Title>
      <Text className="text-gray-600 text-lg max-w-md">
        We're working hard to get this page ready. Please check back soon for exciting updates!
      </Text>
      <div className="animate-spin-slow rounded-full h-20 w-20 border-t-4 border-blue-500 border-solid shadow-lg"></div>
    </Container>
  );
}
