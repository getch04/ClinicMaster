import { Box, Button, Image, Text, Title } from "@mantine/core";

export function Hero() {
  return (
    <div className="relative w-screen m-0 p-0 h-[700px]">
      <div className="absolute inset-0 bg-white">
        <Image
          src={"hero2.png"} // Ensure this image is high quality
          alt="Hero background"
          style={{
            filter: "initial",
          }}
          className="w-full h-full object-cover bg-white"
        />
      </div>

      <Box className="relative grid grid-cols-1 md:grid-cols-2 h-full z-10 px-4 md:px-10">
        <Box className="flex flex-col justify-center items-start space-y-4 px-4 md:px-[100px]">
          <Title
            size={"xl"}
            fw={900}
            className="text-3xl md:text-5xl font-bold leading-tight text-primary-600"
          >
            Love Your Smile
          </Title>
          <Text className=" max-w-lg  text-white text-sm md:text-base">
            Experience exceptional dental care with our team of highly skilled
            professionals. From routine check-ups to advanced procedures, we
            provide comprehensive dental services to keep your smile healthy and
            bright.
          </Text>
          <Text className=" max-w-lg text-sm text-white md:text-base">
            Book an appointment today and take the first step towards a
            healthier smile!
          </Text>
          <Box className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Button
              color="primary"
              size="md"
              className="rounded-md   text-white hover:bg-primary-900"
              variant="filled"
            >
              Book an Appointment
            </Button>
          </Box>
        </Box>

        <Box className="flex justify-center md:justify-end items-center mt-2 md:mt-0">
          <Image
            src={"doc.png"}
            alt="Dental Professional"
            className="h-auto w-3/4 md:w-auto"
          />
        </Box>
      </Box>
    </div>
  );
}
