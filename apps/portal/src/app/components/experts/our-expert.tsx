"use client";
import { Carousel } from "@mantine/carousel";
import {
  Box,
  Button,
  Card,
  Container,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Clock,
  Star,
  Stethoscope,
} from "lucide-react";

interface Doctor {
  name: string;
  job: string;
  image: string;
  specialization: string;
  experience: string;
  rating: number;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Hilina Abebe",
    job: "Orthodontist",
    image: "services/cosmeticdentistry.png",
    specialization: "Braces & Invisalign",
    experience: "15+ years",
    rating: 4.9,
  },
  {
    name: "Dr. Yohannes Tadesse",
    job: "Endodontist",
    image: "doc1.png",
    specialization: "Root Canal Therapy",
    experience: "12+ years",
    rating: 4.8,
  },
  {
    name: "Dr. Tigist Bekele",
    job: "Pediatric Dentist",
    image: "docs.jpg",
    specialization: "Children's Dental Care",
    experience: "10+ years",
    rating: 4.9,
  },
];

export function ExpertsSection() {
  return (
    <Box className="m-20  py-2">
      <Container size="xl">
        <Box className="text-center pb-1">
          <Title
            order={2}
            className="text-primary-500 text-sm text-center mb-2"
          >
            Our Expert Dentists
          </Title>
          <Text
            size="xl"
            className=" text-xl text-gray-500 text-center font-bold mb-10 "
          >
            Meet our team of experienced professionals dedicated to providing
            you with the highest quality dental care.
          </Text>
        </Box>

        <Carousel
          slideSize="30%"
          slideGap="md"
          align="start"
          slidesToScroll={1}
          withControls
          loop
          classNames={{
            control: "bg-primary-600 text-white hover:bg-primary-700 ",
          }}
          nextControlIcon={
            <ChevronRightIcon
              className="mantine-Carousel-control p-1 rounded-full text-white"
              size={30}
            />
          }
          previousControlIcon={
            <ChevronLeftIcon
              className="mantine-Carousel-control p-1 rounded-full text-white"
              size={30}
            />
          }
        >
          {doctors.map((doctor, index) => (
            <Carousel.Slide key={doctor.name} className="p-4">
              <Card
                shadow="md"
                radius="lg"
                className="h-full  transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-white"
              >
                <Card.Section>
                  <Box className="w-full h-72">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fit="cover"
                      className="object-cover w-full h-full"
                    />
                  </Box>
                </Card.Section>

                <Box className="p-6">
                  <Text className="text-2xl font-bold text-gray-800 mb-1">
                    {doctor.name}
                  </Text>
                  <Text className="text-lg text-primary-600 font-medium mb-4">
                    {doctor.job}
                  </Text>

                  <Group gap="md" mb="md">
                    <Group gap="xs">
                      <Stethoscope size={18} className="text-primary-500" />
                      <Text size="sm" className="text-gray-600">
                        {doctor.specialization}
                      </Text>
                    </Group>
                    <Group gap="xs">
                      <Clock size={18} className="text-primary-500" />
                      <Text size="sm" className="text-gray-600">
                        {doctor.experience}
                      </Text>
                    </Group>
                  </Group>

                  <Group gap="xs" mb="md">
                    <Star size={18} className="text-yellow-400" />
                    <Text size="sm" className="text-gray-600 font-medium">
                      {doctor.rating} / 5
                    </Text>
                  </Group>

                  <Button
                    fullWidth
                    variant="filled"
                    color="blue"
                    size="md"
                    className="mt-4 rounded-full bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
                  >
                    Book Appointment
                  </Button>
                </Box>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
