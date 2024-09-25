"use client";

import { Box, Button, Group, Image, Overlay, Text, Title } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import {
  Award,
  Calendar,
  ChevronDown,
  LucideIcon,
  Users,
  Smile,
} from "lucide-react";
import { useEffect, useState } from "react";
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
    className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg"
  >
    <Icon size={36} className="text-primary-300 mb-2" />
    <CountUp
      end={value}
      duration={3}
      className="text-4xl font-bold text-white"
    />
    <Text className="text-sm font-medium text-primary-100 text-center mt-1">
      {label}
    </Text>
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
      <ChevronDown
        size={48}
        className="text-primary-300 hover:text-primary-100 transition-colors"
      />
    </motion.div>
  );
};

export function Hero() {
  const controls = useAnimation();

  const [heroContent, setHeroContent] = useState<{
    type: "image" | "video";
    src: string;
  }>({
    type: "video",
    src: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const parallaxY = scrollY * 0.5;

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  useEffect(() => {
    const fetchHeroContent = async () => {
      const response = await fetch("http://localhost:3003/heroSection");
      const data = await response.json();
      setHeroContent(data);
      setIsLoading(false);
    };

    fetchHeroContent();
  }, []);

  return (
    <Box className="relative h-[710px] m-0 p-0 w-screen overflow-hidden bg-gradient-to-br from-primary-900 to-primary-700">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        {isLoading ? (
          <Image
            src="hero2.png"
            alt="Placeholder background"
            className="w-full h-full object-cover opacity-90"
          />
        ) : heroContent.type === "image" ? (
          <Image
            src={heroContent.src}
            alt="Hero background"
            className="w-full h-full object-cover opacity-90"
          />
        ) : (
          <video
            src={heroContent.src}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-70"
          />
        )}
      </motion.div>
      <Overlay
        gradient="radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)"
        opacity={0.6}
        zIndex={1}
      />

      <Box className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className="text-center"
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Smile size={80} className="mx-auto text-primary-300" />
          </motion.div>
          <Title className="mb-4 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Smile with
            <span className="relative">
              <span className="relative z-10 px-2">Confidence</span>
              <motion.span
                className="absolute bottom-0 left-0 h-3 w-full bg-primary-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{ originX: 0 }}
              />
            </span>
          </Title>
          <Text className="mb-8 text-xl text-primary-200 md:text-2xl">
            Experience modern dentistry with a personal touch
          </Text>

          {/* Interactive buttons */}
          <Box className="flex flex-row justify-center items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-lg font-semibold text-primary-900 transition-all duration-300 hover:shadow-lg"
            >
              <span className="relative z-10">Book Appointment</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group rounded-full border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary-900"
            >
              Our Services
            </motion.button>
          </Box>
        </motion.div>
      </Box>

      <ScrollArrow />
    </Box>
  );
}
