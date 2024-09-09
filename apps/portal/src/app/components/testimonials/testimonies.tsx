"use client";

import { Carousel } from "@mantine/carousel";
import { Avatar, Card, Group, Text } from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";
import React from "react";

// Define the type for the testimonial card props
interface TestimonialProps {
  title: string;
  description: string;
  author: string;
  position: string;
  avatar: string;
}

// TestimonialCard component
const TestimonialCard: React.FC<TestimonialProps> = ({
  title,
  description,
  author,
  position,
  avatar,
}) => {
  return (
    <Card
      shadow="md"
      p="lg"
      radius="md"
      withBorder
      className="relative h-full transition-transform duration-300 hover:scale-105"
    >
      {/* Top Left Quote Icon */}
      <IconQuote
        size={32}
        className="absolute top-[-1rem] left-[-1rem] text-teal-400"
      />

      {/* Title */}
      <Text
        size="lg"
        weight={500}
        className="text-teal-500 mb-4 text-center mt-6"
      >
        {title}
      </Text>

      {/* Description */}
      <Text size="sm" color="dimmed" className="text-center mb-8">
        {description}
      </Text>

      {/* Author Section */}
      <Group position="center" className="mt-auto">
        <Avatar src={avatar} radius="xl" size="lg" />
        <div className="flex flex-col items-center">
          <Text size="md" weight={700} className="text-teal-500">
            {author}
          </Text>
          <Text size="xs" color="dimmed">
            {position}
          </Text>
        </div>
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
        "The dental team was professional, kind, and truly cared about my comfort during my visit.",
      author: "Alexa Denial",
      position: "CEO / Director",
      avatar: "/path/to/avatar1.jpg",
    },
    {
      title: "Great Experience",
      description:
        "I’ve always had a fear of dentists, but this clinic changed my view completely. The staff made me feel at ease.",
      author: "John Doe",
      position: "Manager",
      avatar: "/path/to/avatar2.jpg",
    },
    {
      title: "Highly Recommend",
      description:
        "Very modern clinic with the latest technology. They fixed my teeth quickly and painlessly.",
      author: "Jane Smith",
      position: "Business Owner",
      avatar: "/path/to/avatar3.jpg",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      {/* Section Heading */}
      <Text align="center" className="text-teal-500 text-xl font-bold mb-4">
        Testimonial
      </Text>
      <Text align="center" className="text-3xl font-bold mb-12">
        What Our Customers Say
      </Text>

      {/* Carousel to Display Testimonials */}
      <Carousel
        slideSize="33.333%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
        slideGap="md"
        align="start"
        loop
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Slide key={index}>
            <TestimonialCard {...testimonial} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
