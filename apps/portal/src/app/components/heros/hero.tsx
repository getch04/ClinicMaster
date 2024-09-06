"use client";

import { Box, Button, Image, Text, Title } from "@mantine/core";

export function Hero() {
  return (
    <Box className="relative w-screen m-0 p-0 h-[700px]">
      <Box className="absolute inset-0">
        <Image
          src={"hero2.png"}
          alt="Hero background"
          style={{ filter: "blur(1px)" }}
          className="w-full h-full object-cover"
        />
      </Box>

      <Box className="relative grid grid-cols-1 md:grid-cols-2 h-full z-10 px-4 md:px-10">
        <Box className="flex flex-col justify-center items-start space-y-4 text-white px-4 md:px-[100px]">
          <Title className="text-xl md:text-lg font-bold  text-primary-900">
            Dental Perfection
          </Title>
          <Title className="text-3xl md:text-5xl font-bold leading-tight">
            Creating Brighter <br /> Smiles Every Day
          </Title>
          <Text className="text-gray-600 max-w-lg text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </Text>
          <Box className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Button
              color="var(--mantine-color-primary-7)"
              size="md"
              className="rounded-md"
              variant="Filled"
            >
              Learn More
            </Button>
            <Button size="md" className="rounded-md" variant="outline">
              Contact Us
            </Button>
          </Box>
        </Box>

        <Box className="flex justify-center md:justify-end items-center mt-6 md:mt-0">
          <Image
            src={"doc.png"}
            alt="Doctor"
            className="w-3/4  md:w-auto h-full"
            // style={{ height: "80%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
