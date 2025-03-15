"use client";
import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  useColorModeValue,
  HStack,
  SimpleGrid,
  Center,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import Image from "next/image";

const ProjectData: {
  imageUrl: string;
  heading: string;
  text: string;
  githubLink: string;
}[] = [
  {
    imageUrl: "/assets/project-img/Find.png",
    heading: "Opportunitie-Finder",
    text: "A Python script designed to explore and identify summer internships available.",
    githubLink: "https://github.com/esvin2661/2024-undergraduate-opportunities",
  },
  {
    imageUrl: "/assets/project-img/QR_code_.png",
    heading: "QR-Code-Encoder",
    text: "Effortlessly generate QR codes using Python encoding.",
    githubLink: "https://github.com/esvin2661/QR-Code-Encoder-",
  },
  {
    imageUrl: "/assets/project-img/Books.png",
    heading: "Book-Rating App",
    text: "Interactive React app for rating your favorite books.",
    githubLink: "https://github.com/esvin2661/Book-Rating",
  },
  {
    imageUrl: "/assets/project-img/JSON.png/",
    heading: "JSON-to-CSV Converter",
    text: "Python script designed to seamlessly transform JSON files into CSV format.",
    githubLink: "https://github.com/esvin2661/Convert_JSON_to_CSV",
  },
  {
    imageUrl: "/assets/project-img/Watch.png",
    heading: "Stopwatch",
    text: "Interactive digital stopwatch crafted with HTML, CSS, and JavaScript",
    githubLink: "https://github.com/esvin2661/StopWatch",
  },
  {
    imageUrl: "/assets/project-img/Chess.png",
    heading: "Hikaru-Chess-Analysis",
    text: "Analysis of GM Hikaru Nakamura aimed at understanding chess patterns.",
    githubLink: "https://github.com/esvin2661/Hikaru-Chess-Games-Analysis",
  },
];

export default function Projects() {
  return (
    <div style={{ width: '100%', maxWidth: '100vw' }}>
      <Center py={{ base: 4, md: 6 }} w="100%">
        <VStack spacing={4} align="stretch" width="100%" px={{ base: 2, md: 4 }}>
          <Text
            fontFamily="Nunito Sans"
            fontSize={{ base: 24, md: 30 }}
            textAlign={["center"]}
            fontWeight="bold"
            color="black"
            mb={{ base: 3, md: 5 }}
          >
            Projects
          </Text>
          <SimpleGrid 
            columns={{ base: 1, sm: 2, lg: 3 }} 
            spacing={{ base: 3, md: 4 }}
            width="100%"
            maxW="1200px"
            mx="auto"
          >
            {ProjectData.map((card, index) => (
              <Card
                key={index}
                imageUrl={card.imageUrl}
                heading={card.heading}
                text={card.text}
                githubLink={card.githubLink}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Center>
    </div>
  );
}

function Card({
  imageUrl,
  heading,
  text,
  githubLink
}: {
  imageUrl: string;
  heading: string;
  text: string;
  githubLink: string;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Box
      w="100%"
      maxW={{ base: "300px", md: "320px" }}
      mx="auto"
      rounded={"sm"}
      my={{ base: 2, md: 3 }}
      overflow={"hidden"}
      bg="white"
      border={"1px"}
      borderColor="black"
      boxShadow={useColorModeValue("3px 6px 0 black", "3px 6px 0 cyan")}
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.02)" }}
      height="fit-content"
      position="relative"
    >
      <Box h={{ base: "280px", md: "360px" }} borderBottom={"1px"} borderColor="black" position="relative">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="gray.100"
            display={imageLoaded ? "none" : "flex"}
            alignItems="center"
            justifyContent="center"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
          <Image
            src={imageUrl}
            alt={heading}
            fill
            style={{ 
              objectFit: 'cover',
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
            priority={true}
            onLoadingComplete={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </a>
      </Box>
      <Box p={{ base: 4, md: 5 }} display="flex" flexDirection="column" justifyContent="space-between">
        <Heading 
          color={"black"} 
          fontSize={{ base: "lg", md: "xl" }} 
          noOfLines={1} 
          textAlign="center"
          mb={2}
        >
          {heading}
        </Heading>
        <Text
          fontSize={{ base: 14, md: 16 }}
          color={"gray.500"}
          noOfLines={2}
          whiteSpace="pre-wrap"
          textAlign="center"
        >
          {text}
        </Text>
      </Box>
    </Box>
  );
}