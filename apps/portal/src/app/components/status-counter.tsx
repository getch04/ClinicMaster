"use client";
import React from "react";
import {
  Box,
  Card,
  Text,
  Title,
  Group,
  Container,
  SimpleGrid,
} from "@mantine/core";
import CountUp from "react-countup";

export function AnimatedCounters() {
  const countersData = [
    { title: "Successful Surgeries", count: 1500, color: "blue" },
    { title: "Happy Clients", count: 12000, color: "green" },
    { title: "Total Experts", count: 50, color: "purple" },
    { title: "Awards Won", count: 10, color: "orange" },
  ];

  return (
    <Box className="my-12 px-4 md:px-12">
      <Container>
        {/* Section Heading */}
        <Box style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Title className="text-3xl font-extrabold text-gray-800">
            Our Achievements
          </Title>
          <Text size="xl" className="text-primary-700 mt-2 font-semibold">
            We take pride in our work
          </Text>
        </Box>

        {/* Counters Row */}
        <SimpleGrid cols={4} spacing="lg">
          {countersData.map((counter, index) => (
            <Card
              key={index}
              shadow="sm"
              padding="lg"
              radius="md"
              style={{
                backgroundColor: "var(--mantine-color-primary-0)",
                textAlign: "center",
              }}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <Group justify="center" flex="column" gap="xs">
                {/* Animated Counter */}
                <Text
                  size="2xl"
                  fw="bold"
                  className={`text-${counter.color}-600`}
                >
                  <CountUp end={counter.count} duration={3} />
                </Text>
                {/* Title */}
                <Text size="sm" color="dimmed">
                  {counter.title}
                </Text>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
