"use client";

import { Box, Button, Image, Text, Title } from "@mantine/core";

export function Hero() {
  return (
    <Box className="relative w-screen m-0 p-0 h-[710px]">
      <Box className="absolute inset-0">
        <Image
          src={"hero2.png"}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* <Box className="absolute inset-0 bg-gray-400 opacity-35" /> */}
      </Box>

      <Box className="relative grid grid-cols-1 md:grid-cols-2 h-full z-10 px-4 md:px-10">
        <Box className="flex flex-col justify-center items-start space-y-4 text-white px-4 md:px-[100px]">
          <Title className="text-xl md:text-lg font-bold  text-primary-900 bg-white p-1">
            Dental Perfection
          </Title>
          <Box className="relative bg-primary-900 bg-opacity-35 p-2">
            <Box className="absolute inset-0 bg-primary-900 opacity-35 pointer-events-none" />
            <Title className="relative text-3xl md:text-5xl font-bold leading-tight text-white z-10">
              Creating Brighter <br /> Smiles Every Day
            </Title>
          </Box>

          <Text className="max-w-lg text-sm md:text-base bg-white p-2 text-black ">
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
              LEARN MORE
            </Button>
            <Button
              size="md"
              className="rounded-md font-bold"
              variant="outline"
            >
              CONTACT US
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
