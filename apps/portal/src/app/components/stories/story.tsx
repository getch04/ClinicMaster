"use client";

import { Box, Button, Container, Grid, Text, Title } from "@mantine/core";

export function Story() {
  return (
    <Container className="p-10">
      <Grid>
        <Grid.Col span="auto">1</Grid.Col>
        <Grid.Col span="auto">
          <Box className="flex flex-col justify-start items-start">
            <Text>OUR STORY</Text>
            <Title>
              Advanced Dental Care <br /> Tailored just for You.
            </Title>
            <Box className="flex flex-row justify-center items-center">
              <Button
                color="var(--mantine-color-primary-7)"
                size="md"
                className="rounded-md px-72"
                variant="Filled"
              >
                <Text className="px-5">Read More</Text>
              </Button>
            </Box>
            <Box className="flex flex-row">
              <Container className="rounded-md"></Container>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
