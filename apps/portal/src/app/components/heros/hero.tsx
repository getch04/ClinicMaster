"use client";

import { Box, Button, Group, Image, Overlay, Text, Title } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import { Award, Calendar, ChevronDown, LucideIcon, Users } from "lucide-react";
import { useEffect } from "react";
import CountUp from "react-countup";

interface StatItemProps {
  icon: LucideIcon;
  value: number;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center space-x-3 bg-white/10 backdrop-blur-md p-3 rounded-lg"
  >
    <Icon size={24} className="text-primary-600" />
    <Box>
      <CountUp
        end={value}
        duration={3}
        className="text-3xl font-bold text-white"
      />
      <Text className="text-xs font-bold text-white">{label}</Text>
    </Box>
  </motion.div>
);

const ScrollArrow = () => {
  const arrowAnimation = {
    y: [0, 10, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight - 50,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
      animate={arrowAnimation}
      onClick={handleScrollClick}
    >
      <ChevronDown size={40} className="text-white" />
    </motion.div>
  );
};

export function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <Box className="relative w-screen m-0 p-0 h-[710px] overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="hero2.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <Overlay
        gradient="linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)"
        opacity={0.6}
        zIndex={1}
      />

      <Box className="relative z-10 h-full flex flex-col justify-center px-4 md:px-10 max-w-7xl mx-auto">
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-white p-2 rounded-md"
            >
              <Title className="text-md md:text-2xl font-bold text-primary-700">
                Dental Perfection
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-block bg-primary-700/80 p-2 rounded-md"
            >
              <Title className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                Creating Brighter <br /> Smiles Every Day
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6"
            >
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative hidden md:block"
          >
            <Image
              src="doc.png"
              alt="Smiling Doctor"
              className="w-auto h-[710px] ml-10 object-cover rounded-lg"
            />
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-primary-500 p-4 rounded-lg shadow-xl"
            > */}
            {/* <Award size={40} className="text-white" /> */}
            {/* </motion.div> */}
          </motion.div>
        </Box>
      </Box>

      <ScrollArrow />
    </Box>
  );
}
