"use client";

import { Carousel } from "@mantine/carousel";
import { Avatar, Box, Card, Group, Text } from "@mantine/core";
import {
  ChevronLeftIcon,
  ChevronRightCircleIcon,
  ChevronRightIcon,
  QuoteIcon,
} from "lucide-react";
import React from "react";

interface TestimonialProps {
  title: string;
  description: string;
  author: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  title,
  description,
  author,
  avatar,
}) => {
  return (
    <Card
      shadow="md"
      p="lg"
      radius="md"
      withBorder
      className="relative border-primary-400 h-[350px] w-96 transition-transform duration-300 hover:scale-105 my-10"
    >
      <Box className="absolute top-0 left-0 h-28 w-28 bg-primary-900 rounded-br-full flex justify-center items-center">
        <QuoteIcon
          size={32}
          fill=""
          className="text-white mb-4 mr-5 fill-white"
        />
      </Box>

      <Box className="absolute bottom-12 right-0">
        <Box className="h-8 w-2 bg-black"></Box>
        <Box className="h-8 w-2 bg-primary-900"></Box>
      </Box>

      <Group className="mt-auto flex justify-center items-center">
        <Text size="lg" className="text-teal-500 mb-2 text-center mt-6">
          {title}
        </Text>

        <Text size="sm" color="dimmed" className="text-center mb-4">
          {description}
        </Text>
        <Box className="flex flex-col items-center">
          <Avatar src={avatar} radius="xl" size="lg" />
          <Text size="md" className="text-teal-500">
            {author}
          </Text>
        </Box>
      </Group>
    </Card>
  );
};

// Testimonials section with Carousel
export function Testimonials(): React.ReactElement {
  const testimonials = [
    {
      title: "Excellent Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Alexa Denial",
      avatar: "/path/to/avatar1.jpg",
    },
    {
      title: "Great Experience",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "John Doe",
      avatar: "/path/to/avatar2.jpg",
    },
    {
      title: "Highly Recommend",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Smith",
      position: "Business Owner",
      avatar: "/path/to/avatar3.jpg",
    },
    {
      title: "Excellent Service",
      description:
        "The dental team was professional, kind, and truly cared about my comfort during my visit.",
      author: "Alexa Denial",
      avatar: "/path/to/avatar1.jpg",
    },
    {
      title: "Great Experience",
      description:
        "I’ve always had a fear of dentists, but this clinic changed my view completely. The staff made me feel at ease.",
      author: "John Doe",
      avatar: "/path/to/avatar2.jpg",
    },
    {
      title: "Highly Recommend",
      description:
        "Very modern clinic with the latest technology. They fixed my teeth quickly and painlessly.",
      author: "Jane Smith",
      avatar: "/path/to/avatar3.jpg",
    },
  ];

  return (
    <Box className="py-10 px-10">
      <Box className="flex flex-col justify-center items-center">
        <Text className="text-teal-500 text-xl font-bold mb-4">
          Testimonial
        </Text>
        <Text className="text-3xl font-bold mb-2">What Our Customers Say</Text>
      </Box>
      <Carousel
        withIndicators
        slideSize={{ base: "100%", sm: "50%", md: "29%" }}
        slideGap={{ base: 0, sm: "md" }}
        align="start"
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
        classNames={{
          indicator: "mantine-Carousel-indicator",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Slide key={index}>
            <TestimonialCard {...testimonial} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
