"use client";

import { Button, Image } from "@mantine/core";

export function Hero() {
  return (
    <Box className="relative w-screen m-0 p-0 h-[700px]">
      <Box className="absolute inset-0">
        <Image
          src={"hero1.jpg"}
          alt="Hero background"
          style={{ filter: "blur(1px)" }}
          className="w-full h-full object-cover"
        />
      </Box>

      <div className="relative grid grid-cols-1 md:grid-cols-2 h-full z-10 px-4 md:px-10">
        <div className="flex flex-col justify-center items-start space-y-4 text-white px-4 md:px-[100px]">
          <span className="text-md md:text-lg font-bold  text-primary">
            Dental Perfection
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Creating Brighter <br /> Smiles Every Day
          </h1>
          <p className="text-gray-600 max-w-lg text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
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
          </div>
        </div>

        <div className="flex justify-center md:justify-end items-center mt-6 md:mt-0">
          <Image
            src={"doc.png"}
            alt="Doctor"
<<<<<<< HEAD
            className="w-3/4  md:w-auto h-full"
            // style={{ height: "80%" }}
          />
        </Box>
      </Box>
    </Box>
=======
            className="h-auto w-3/4 md:h-full md:w-auto object-cover -scale-x-100"
          />
        </div>
      </div>
    </div>
>>>>>>> f43c38b741308bfa0b4725eaf84c69152c22f7bc
  );
}
