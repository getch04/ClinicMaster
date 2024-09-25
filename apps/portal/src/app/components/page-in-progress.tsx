"use client";

import { Container, Title, Text, Button } from "@mantine/core";
import { ArrowLeft, ArrowLeftCircle, MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PageInProgressProps {
  pageName: string;
}

export function PageInProgress({ pageName }: PageInProgressProps) {
  return (
    <Container className="h-screen flex flex-col items-center justify-center text-center space-y-4">
      <Title order={2} className="text-4xl text-primary-900">
        {pageName} Page
      </Title>
      <Text className="text-gray-500 text-lg">
        This page is currently under construction. Please check back later!
      </Text>
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-primary-900 bg-primary-50 border-solid"></div>
      <Link href="/">
        <Button
          leftSection={<ArrowLeft />}
          variant="filled"
          size="md"
          className="mt-8"
        >
          BACK TO HOME
        </Button>
      </Link>
    </Container>
  );
}
