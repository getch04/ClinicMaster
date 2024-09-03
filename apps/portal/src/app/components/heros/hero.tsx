"use client";

import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Grid,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export function Hero() {
  return (
    <Container size="xl" className="py-2">
      <Grid gutter={{ base: "sm", xs: "md", md: "xl", xl: 50 }}>
        {/* Content */}
        <Grid.Col span={5} className="flex flex-col justify-center">
          <Title className="text-[var(--mantine-color-primary-7)] dark:text-[var(--mantine-color-primary-2)] font-[Greycliff CF, var(--mantine-font-family)] text-[rem(44px)] leading-tight font-extrabold md:text-[rem(28px)]">
            Welcome to{" "}
            <span className="relative text-[var(--mantine-color-yellow-7)] rounded-[var(--mantine-radius-sm)] px-[rem(12px)] py-[rem(4px)]">
              Dr. Hilina's
            </span>{" "}
            <br />
            Dental Clinic
          </Title>
          <Text className="text-gray-500 mt-4">
            Providing exceptional dental care with the latest technology. Our
            team is dedicated to making your smile healthy and beautiful.
          </Text>

          <List
            mt={8}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Comprehensive Care</b> – We offer a range of services from
              routine check-ups to advanced treatments.
            </List.Item>
            <List.Item>
              <b>Experienced Professionals</b> – Our team of experts ensures the
              highest standard of care.
            </List.Item>
            <List.Item>
              <b>Comfortable Environment</b> – Enjoy a relaxing visit with our
              state-of-the-art facilities.
            </List.Item>
          </List>

          <Group mt={8} gap="md">
            <Button radius="xl" size="md" className="bg-primary-500 text-white">
              Book an Appointment
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className="border border-primary-500 text-primary-500"
            >
              Contact Us
            </Button>
          </Group>
        </Grid.Col>

        {/* Image */}
        <Grid.Col span={7} className="flex justify-center">
          <Image
            src="/hero.png"
            alt="Hero Image"
            className="w-full h-auto object-cover"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
