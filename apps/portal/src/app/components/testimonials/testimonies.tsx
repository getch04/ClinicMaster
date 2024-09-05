"use client";
import {
  Box,
  Title,
  Text,
  Card,
  Image,
  Group,
  Stack,
  Rating,
} from "@mantine/core";

interface Testimonial {
  image: string;
  name: string;
  rating: number;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/hero.png", // Replace with actual image paths
    name: "Alice Johnson",
    rating: 5,
    feedback:
      "The staff is incredibly friendly and professional. I felt at ease the entire time and love the results. Highly recommended!",
  },
  {
    image: "/hero.png", // Replace with actual image paths
    name: "David Peterson",
    rating: 4,
    feedback:
      "Great experience overall! The service was prompt, and the staff made sure I was comfortable. The results were exactly what I hoped for.",
  },
  {
    image: "/hero.png", // Replace with actual image paths
    name: "Lisa Brown",
    rating: 5,
    feedback:
      "I've always had a fear of dentists, but this clinic completely changed my mind. They were gentle, and I’m really happy with the results.",
  },
];

export function Testimonials() {
  return (
    <Box className="my-12 px-4 md:px-12">
      {/* Section Header */}
      <Box className="text-center mb-8">
        <Title className="text-4xl font-extrabold text-gray-800">
          Testimonials
        </Title>
        <Text size="xl" className="text-primary-700 mt-2 font-semibold">
          What Our Clients Say
        </Text>
      </Box>

      {/* Testimonials List */}
      <Group className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            shadow="md"
            padding="lg"
            className="w-[300px] transition-all hover:shadow-lg hover:scale-105"
          >
            <Stack align="center">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                radius="xl"
                width={100}
                height={100}
                className="object-cover"
              />
              <Text fw={600} size="lg" className="mt-4">
                {testimonial.name}
              </Text>
              <Rating value={testimonial.rating} readOnly />
              <Text size="sm" className="text-gray-600 mt-2 text-center">
                {testimonial.feedback}
              </Text>
            </Stack>
          </Card>
        ))}
      </Group>
    </Box>
  );
}
