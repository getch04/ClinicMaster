"use client";

import { Box, Button, Group, Image, Overlay, Text, Title } from "@mantine/core";
import { Award, Calendar, Users, LucideIcon } from "lucide-react";
import CountUp from "react-countup";

interface StatItemProps {
  icon: LucideIcon;
  value: number;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, value, label }) => (
  <Box className="flex items-center space-x-3 bg-white/10 backdrop-blur-md p-3 rounded-lg">
    <Icon size={24} className="text-primary-200" />
    <Box>
      <CountUp
        end={value}
        duration={3}
        className="text-2xl font-bold text-white"
      />
      <Text className="text-xs text-primary-100">{label}</Text>
    </Box>
  </Box>
);

export function Hero() {
  return (
    <Box className="relative w-screen m-0 p-0 h-[710px] overflow-hidden">
      <Image
        src="hero2.png"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Overlay
        gradient="linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)"
        opacity={0.6}
        zIndex={1}
      />

      <Box className="relative z-10 h-full flex flex-col justify-center px-4 md:px-10 max-w-7xl mx-auto">
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Box className="space-y-6">
            <Box className="inline-block bg-white p-2 rounded-md">
              <Title className="text-md md:text-2xl font-bold text-primary-700">
                Dental Perfection
              </Title>
            </Box>
            <Box className="inline-block bg-primary-700/80 p-2 rounded-md">
              <Title className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                Creating Brighter <br /> Smiles Every Day
              </Title>
            </Box>
            {/* <Text className="max-w-lg text-lg text-primary-100">
              Experience top-notch dental care with our expert team, dedicated
              to giving you the confident, healthy smile you deserve.
            </Text> */}
            <Group>
              <Button
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 text-white font-bold transition-colors"
              >
                BOOK APPOINTMENT
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 font-bold transition-colors"
                variant="outline"
              >
                OUR SERVICES
              </Button>
            </Group>
            <Box className="mt">
              <Group className="flex-wrap">
                <StatItem
                  icon={Users}
                  value={5000}
                  label="Satisfied Patients"
                />
                <StatItem
                  icon={Calendar}
                  value={20}
                  label="Years of Excellence"
                />
                <StatItem icon={Award} value={50} label="Expert Dentists" />
              </Group>
            </Box>
          </Box>

          <Box className="relative hidden md:block">
            <Image
              src="doc.png"
              alt="Smiling Doctor"
              className="w-auto h-[710px] object-cover rounded-lg shadow-2xl"
            />
            {/* <Box className="absolute -bottom-4 -left-4 bg-primary-500 p-4 rounded-lg shadow-xl">
              <Smile size={40} className="text-white" />
            </Box> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
