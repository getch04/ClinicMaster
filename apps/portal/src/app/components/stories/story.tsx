"use client";

import { Box, Button, Grid, Image, Modal, Text, Title } from "@mantine/core";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { useState } from "react";

export function Story() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="lg"
        title="Watch Our Story"
        centered
      >
        <Box className="relative pb-[56.25%] h-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // replace this URL with your actual video
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>

      <Box className="px-36 py-10">
        <Grid justify="flex-center" align="stretch">
          <Grid.Col span={5} className="relative">
            <Image
              src={"docs.jpg"}
              radius="lg"
              className="rounded-8 w-full h-[400px] object-cover border-4 border-white"
              alt="Doctor Image"
            />
            <Box className="absolute bottom-[-40px] right-[30px]">
              <Image
                src={"odontologia.jpg"}
                radius="lg"
                className="rounded-8 w-[200px] h-[200px] object-cover border-8 border-white shadow-md"
                alt="Dental Image"
              />
            </Box>
          </Grid.Col>

          <Grid.Col span={7}>
            <Box className="flex flex-col justify-start items-start space-y-4">
              <Text className="text-primary-500 text-sm">OUR STORY</Text>
              <Title className="text-primary-900 text-4xl">
                Advanced Dental Care <br /> Tailored Just for You.
              </Title>
              <Text className="text-gray-500 text-md leading-relaxed">
                At our clinic, we’re redefining dental care with a focus on
                advanced techniques and personalized treatment. Led by Dr.
                Helina, our team is committed to ensuring every patient receives
                exceptional care in a comfortable, welcoming environment.
              </Text>
              <Text className="italic text-gray-400">
                “We offer reasonable pricing health care plans, insurance
                packages to clients insurance packages to clients”.
              </Text>
              <Text className="text-primary-800 font-bold">
                Helina, Chief Doctor
              </Text>

              <Box className="flex flex-row justify-start items-center space-x-4 pt-4">
                <Button
                  size="md"
                  radius="md"
                  className="bg-primary-500 text-white hover:bg-primary-600 transition"
                >
                  Read More
                </Button>
                <Box
                  className="flex items-center cursor-pointer"
                  onClick={() => setOpened(true)}
                >
                  <Box className="rounded-full border-2 border-primary-200 p-2 flex justify-center items-center">
                    <IconPlayerPlayFilled
                      size={18}
                      className="text-primary-900"
                    />
                  </Box>
                  <Text className="pl-2">Watch Video</Text>
                </Box>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
