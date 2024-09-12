"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  TextInput,
  Textarea,
  Title,
  Text,
  Card,
  ThemeIcon,
  Overlay,
  Paper,
  Transition,
  rem,
} from "@mantine/core";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Box className="py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-primary-50">
      <Container size="xl" className="relative z-10">
        <Grid gutter={50} align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Paper
              shadow="xl"
              radius="lg"
              p="xl"
              className="bg-white bg-opacity-90 backdrop-blur-sm transform rotate-1 hover:rotate-0 transition-all duration-300"
            >
              <Title
                order={2}
                className="text-5xl font-bold text-primary-800 mb-8 leading-tight"
              >
                Let's Create Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-800">
                  Perfect Smile
                </span>
              </Title>
              <Text className="text-gray-600 mb-10 text-xl leading-relaxed">
                Your journey to a brighter smile begins here. Reach out to us
                for personalized dental care that puts your comfort first.
              </Text>

              <form onSubmit={handleSubmit} className="space-y-6">
                <TextInput
                  label="Name"
                  placeholder="Your full name"
                  required
                  classNames={{
                    input:
                      "bg-gray-50 border-0 focus:ring-2 focus:ring-primary-500 h-12",
                    label: "text-primary-700 font-medium mb-2",
                  }}
                />
                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  required
                  classNames={{
                    input:
                      "bg-gray-50 border-0 focus:ring-2 focus:ring-primary-500 h-12",
                    label: "text-primary-700 font-medium mb-2",
                  }}
                />
                <TextInput
                  label="Phone"
                  placeholder="Your phone number"
                  classNames={{
                    input:
                      "bg-gray-50 border-0 focus:ring-2 focus:ring-primary-500 h-12",
                    label: "text-primary-700 font-medium mb-2",
                  }}
                />
                <Textarea
                  label="Message"
                  placeholder="How can we help you?"
                  required
                  minRows={4}
                  classNames={{
                    input:
                      "bg-gray-50 border-0 focus:ring-2 focus:ring-primary-500",
                    label: "text-primary-700 font-medium mb-2",
                  }}
                />
                <Transition
                  mounted={isSubmitted}
                  transition="slide-up"
                  duration={400}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Text
                      style={styles}
                      color="teal"
                      className="flex items-center mt-4"
                    >
                      <CheckCircle size={20} className="mr-2" /> Message sent
                      successfully!
                    </Text>
                  )}
                </Transition>
                <Button
                  type="submit"
                  fullWidth
                  size="xl"
                  rightSection={<Send size={20} />}
                  className="bg-gradient-to-r  from-primary-900 to-primary-500 hover:from-primary-900 hover:to-primary-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-full"
                >
                  <Text className="font-bold text-xl">Send Message</Text>
                </Button>
              </form>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <Card
              shadow="lg"
              radius="lg"
              className="bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden transform -rotate-2 hover:rotate-0 transition-all duration-300"
            >
              <Box className="relative h-64 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126080.58834553095!2d38.67488631651464!3d9.006760810162952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1664849231459!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                <Overlay
                  gradient="linear-gradient(145deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 100%)"
                  opacity={0.7}
                  zIndex={1}
                />
              </Box>

              <Box className="p-6">
                <Title order={3} className="text-2xl font-bold mb-6">
                  Contact Information
                </Title>
                <Group gap="lg" className="mb-4">
                  <ThemeIcon
                    size="lg"
                    radius="xl"
                    variant="light"
                    className="bg-white bg-opacity-20 text-white"
                  >
                    <MapPin size={rem(24)} className="p-2" />
                  </ThemeIcon>
                  <Text size="lg">
                    123 Dental Street, Addis Ababa, Ethiopia
                  </Text>
                </Group>

                <Group gap="lg" className="mb-4">
                  <ThemeIcon
                    size="lg"
                    radius="xl"
                    variant="light"
                    className="bg-white bg-opacity-20 text-white"
                  >
                    <Phone size={rem(24)} className="p-2" />
                  </ThemeIcon>
                  <Text size="lg">+251 11 234 5678</Text>
                </Group>

                <Group gap="lg" className="mb-4">
                  <ThemeIcon
                    size="lg"
                    radius="xl"
                    variant="light"
                    className="bg-white bg-opacity-20 text-white"
                  >
                    <Mail size={rem(24)} className="p-2" />
                  </ThemeIcon>
                  <Text size="lg">info@dentalpractice.com</Text>
                </Group>

                <Group gap="lg" align="flex-start">
                  <ThemeIcon
                    size="lg"
                    radius="xl"
                    variant="light"
                    className="bg-white bg-opacity-20 text-white"
                  >
                    <Clock size={rem(24)} className="p-2" />
                  </ThemeIcon>
                  <Box>
                    <Text size="lg">Mon - Fri: 9:00 AM - 6:00 PM</Text>
                    <Text size="lg">Sat: 9:00 AM - 2:00 PM</Text>
                    <Text size="lg">Sun: Closed</Text>
                  </Box>
                </Group>
              </Box>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>

      <Box className="absolute inset-0 z-0 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4299e1"
            fillOpacity="0.1"
            d="M0,96L34.3,106.7C68.6,117,137,139,206,133.3C274.3,128,343,96,411,90.7C480,85,549,107,617,138.7C685.7,171,754,213,823,213.3C891.4,213,960,171,1029,149.3C1097.1,128,1166,128,1234,138.7C1302.9,149,1371,171,1406,181.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-full transform rotate-180"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4299e1"
            fillOpacity="0.1"
            d="M0,96L34.3,106.7C68.6,117,137,139,206,133.3C274.3,128,343,96,411,90.7C480,85,549,107,617,138.7C685.7,171,754,213,823,213.3C891.4,213,960,171,1029,149.3C1097.1,128,1166,128,1234,138.7C1302.9,149,1371,171,1406,181.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </Box>
    </Box>
  );
}
