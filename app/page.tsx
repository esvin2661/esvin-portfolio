"use client";
import React, { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import GitHubContributions from "./components/GitHubContributions";
import ProjectSection from "./components/ProjectSection";
import PhotoSection from "./components/PhotoSection";
import SkillsPage from "./technologies/page";
import './globals.css';
import { Box, Spinner, Center } from "@chakra-ui/react";

// Loading component
const LoadingSpinner = () => (
  <Center py={4}>
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Center>
);

const Home = () => {
  return (
    <Box className="smooth-scrolling">
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      
      <Box 
        as="main"
        sx={{
          '& > div': {
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fadeInUp 0.6s ease-out forwards',
          },
          '@keyframes fadeInUp': {
            '0%': {
              opacity: 0,
              transform: 'translateY(20px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <GitHubContributions />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <SkillsPage />
        </Suspense>

        <div id="projects">
          <Suspense fallback={<LoadingSpinner />}>
            <ProjectSection />
          </Suspense>
        </div>

        <div id="photos">
          <Suspense fallback={<LoadingSpinner />}>
            <PhotoSection />
          </Suspense>
        </div>
      </Box>
    </Box>
  );
};

export default Home;