"use client";

import { Box, Button, Grid, Image, Modal, Text, Title } from "@mantine/core";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { motion, useAnimation, useInView } from "framer-motion"; // Import useInView
import { useState, useEffect, useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function Story() {
  const [opened, setOpened] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" //TODO: Add the correct video URL
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>

      <Box className="px-36 py-20" ref={ref}>
        {" "}
        {/* Add the ref here */}
        <Grid justify="flex-center" align="stretch">
          <Grid.Col span={5} className="relative">
            <motion.div
              initial="hidden"
              animate={controls} // Bind animation control
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={"docs.jpg"}
                radius="lg"
                className="rounded-8 w-full h-[400px] object-cover border-4 border-white"
                alt="Doctor Image"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-[-40px] right-[30px]"
              initial="hidden"
              animate={controls} // Bind animation control
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Image
                src={"odontologia.jpg"}
                radius="lg"
                className="rounded-8 w-[200px] h-[200px] object-cover border-8 border-white shadow-md"
                alt="Dental Image"
              />
            </motion.div>
          </Grid.Col>

          <Grid.Col span={7}>
            <motion.div
              initial="hidden"
              animate={controls} // Bind animation control
              variants={fadeInUp}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col justify-start items-start space-y-4"
            >
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
                <motion.div
                  initial="hidden"
                  animate={controls} // Bind animation control
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Button
                    size="md"
                    radius="md"
                    className="bg-primary-500 text-white hover:bg-primary-600 transition"
                  >
                    Read More
                  </Button>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={controls} // Bind animation control
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: 0.6, duration: 0.6 }}
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
                </motion.div>
              </Box>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
