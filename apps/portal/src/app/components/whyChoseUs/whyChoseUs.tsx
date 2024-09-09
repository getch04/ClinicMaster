"use client";
import { Box, Grid, Paper, Text, Title } from "@mantine/core";
import {
  IconFirstAidKit,
  IconHeartbeat,
  IconMoodSmile,
  IconStethoscope,
} from "@tabler/icons-react";
import React from "react";

interface Feature {
  icon: React.FC<any>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: IconHeartbeat,
    title: "Work with Hearts",
    description:
      "We care for your dental health with great understanding so that you can have the best smile.",
  },
  {
    icon: IconMoodSmile,
    title: "Serve with Smile",
    description:
      "The smile never fades on doctor's faces as they always want to create a comfortable atmosphere.",
  },
  {
    icon: IconFirstAidKit,
    title: "Help at Hand",
    description:
      "We are ready to check for any teeth issues at any time of the day, even on weekends & holidays.",
  },
  {
    icon: IconFirstAidKit,
    title: "Annual Check-ups",
    description:
      "We provide annual check-up for dental health conditions and offer many promotions.",
  },
  {
    icon: IconStethoscope,
    title: "Precise Diagnosis",
    description:
      "When your teeth are damaged, we use modern tools to detect the area and provide treatment.",
  },
  {
    icon: IconMoodSmile,
    title: "Qualified Doctors",
    description:
      "Our doctors offer all kinds of services and constantly study new technology.",
  },
];

export function WhyChooseUs(): React.ReactElement {
  return (
    <Box size="lg" className="py-10 px-40 bg-slate-100">
      <Text
        color="dimmed"
        className="text-center mb-1 text-primary-500 text-sm"
      >
        WHY CHOOSE US
      </Text>
      <Title
        order={2}
        className="text-center text-2xl font-bold mb-4 text-gray-500"
      >
        What Makes Us Different
      </Title>

      <Grid gutter={40}>
        {features.map((feature, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <Box p="lg" className="h-full">
              <Box
                size="md"
                className="mb-2 bg-primary-300 flex w-8 h-8 items-center justify-center text-white rounded-md"
              >
                <feature.icon size={26} stroke={1.5} />
              </Box>
              <Text
                size="lg"
                fw={500}
                className="mb-1 font-bold text-primary-900 text-xl"
              >
                {feature.title}
              </Text>
              <Text size="sm" c="dimmed">
                {feature.description}
              </Text>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
