"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Image,
  Title,
  Text,
  Grid,
} from "@mantine/core";

export function FreeConsultation() {
  return (
    <Box className="bg-primary-700">
      <Grid gutter={0} className="md:h-[450px] h-auto">
        <Grid.Col span={{ base: 12, md: 6 }} className="flex items-center">
          <Container size="md" className="text-white px-24">
            <Title order={2} className="text-4xl font-bold mb-4">
              Free Consultation
            </Title>
            <Text className="mb-6">
              Not sure which service is right for you? Schedule a free
              consultation with us to discuss your needs and the options
              available.
            </Text>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500 transition-colors"
            >
              Contact Us
            </Button>
          </Container>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} p={0} className="h-full">
          <Box className="h-full w-full overflow-hidden">
            <Image
              src="services/freeConsultation.png"
              alt="Consultation Background"
              className="object-cover w-full h-[450px]"
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
