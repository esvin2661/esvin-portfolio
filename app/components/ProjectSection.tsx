"use client";
import React from "react";
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
} from "@chakra-ui/react";

const ProjectData: {
  imageUrl: string;
  heading: string;
  text: string;
  githubLink: string;
}[] = [
  {
    imageUrl: "/assets/projects-img/find.png",
    heading: "Opportunitie-Finder",
    text: "A Python script designed to explore and identify summer internships available.",
    githubLink: "https://github.com/esvin2661/2024-undergraduate-opportunities",
  },
  {
    imageUrl: "/assets/Projects-img/QR_code_.png",
    heading: "QR-Code-Encoder",
    text: "Effortlessly generate QR codes using Python encoding.",
    githubLink: "https://github.com/esvin2661/QR-Code-Encoder-",
  },
  {
    imageUrl: "/assets/Projects-img/Books.png",
    heading: "Book-Rating App",
    text: "Interactive React app for rating your favorite books.",
    githubLink: "https://github.com/esvin2661/Book-Rating",
  },
  {
    imageUrl: "/assets/Projects-img/JSON.png/",
    heading: "JSON-to-CSV Converter",
    text: "Python script designed to seamlessly transform JSON files into CSV format.",
    githubLink: "https://github.com/esvin2661/Convert_JSON_to_CSV",
  },
  {
    imageUrl: "/assets/Projects-img/Watch.png",
    heading: "Stopwatch",
    text: "Interactive digital stopwatch crafted with HTML, CSS, and JavaScript",
    githubLink: "https://github.com/esvin2661/StopWatch",
  },
  {
    imageUrl: "/assets/Projects-img/Chess.png",
    heading: "Hikaru-Chess-Analysis",
    text: "Analysis of GM Hikaru Nakamura aimed at understanding chess patterns.",
    githubLink: "https://github.com/esvin2661/Hikaru-Chess-Games-Analysis",
  },
];

export default function Projects() {
  return (
    <div>
      <Center py={6}>
          <VStack spacing={4} align="stretch">
            <Text
            fontFamily="Nunito Sans"
            fontSize={30}
            textAlign={["center"]}
            fontWeight="bold"
            color="black"
            mb={5}
          >
              Projects
            </Text>
            <SimpleGrid columns={[1, 2, 3]} spacing={4}>
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
  return (
    <Box
      minW={{ base: "full", md: "xs" }}
      maxW={{ base: "full", md: "xs" }}
      rounded={"sm"}
      my={5}
      mx={[0, 5]}
      overflow={"hidden"}
      bg="white"
      border={"1px"}
      borderColor="black"
      boxShadow={useColorModeValue("3px 6px 0 black", "3px 6px 0 cyan")}
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }} 
    >
      <Box h={"320px"} borderBottom={"1px"} borderColor="black">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <Img
            src={imageUrl}
            roundedTop={"sm"}
            objectFit="cover"
            h="full"
            w="full"
            alt={"Card Image"}
          />
        </a>
      </Box>
      <Box p={4}  display="flex" flexDirection="column" justifyContent="space-between" h="25%">
        <Heading color={"black"} fontSize={"xl"} noOfLines={1} textAlign="center" >
          {heading}
        </Heading>
        <Text
          fontSize={15}
          color={"gray.500"}
          noOfLines={2}
          whiteSpace="pre-wrap"
          textAlign="center"
        >
          {text}
        </Text>
      </Box>
      <HStack>
        <Flex
          p={4}
          alignItems="center"
          justifyContent={"space-between"}
          roundedBottom={"sm"}
          cursor="pointer"
        ></Flex>
      </HStack>
    </Box>
  );
}