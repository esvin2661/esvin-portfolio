import React from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

interface Photo {
  imageUrl: string;
  heading: string;
  text: React.ReactNode;
}

const PhotoData = [
  {
    imageUrl: "/assets/local-photos/castle.png",
    heading: "The St. Louis Cathedral",
    text: "New Orleans (2022)",
  },
  {
    imageUrl: "/assets/local-photos/arc.png",
    heading: "Santa Catalina Arch ",
    text: "Antigua, Guatemala (2023)",
  },
  {
    imageUrl: "/assets/local-photos/boston.png",
    heading: "Boston",
    text: "Massachusetts (2023)",
  },
  {
    imageUrl: "/assets/local-photos/man.png",
    heading: "Serene",
    text: "Guatemala City (2023)",
  },
  {
    imageUrl: "/assets/local-photos/lights.png",
    heading: "Butterfree",
    text: "Massachusetts (2022)",
  },
  {
    imageUrl: "/assets/local-photos/street.png",
    heading: "Vampire Diaries",
    text: "New Orleans (2022)",
  },
];


export default function Photos() {
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
            mb={4}
          >
            Photo Gallery
          </Text>
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
            {PhotoData.map((card, index) => (
              <Card
                key={index}
                imageUrl={card.imageUrl}
                heading={card.heading}
                text={card.text}
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
}: {
  imageUrl: string;
  heading: string;
  text: React.ReactNode;
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
        <Img
          src={imageUrl}
          roundedTop={"sm"}
          objectFit="cover"
          h="full"
          w="full"
          alt={"Card Image"}
        />
      </Box>
      <Box p={4} display="flex" flexDirection="column" justifyContent="space-between" h="25%">
        <Heading color={"black"} fontSize={"xl"} noOfLines={1} textAlign="center">
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
          direction={["column", "row"]}
        ></Flex>
      </HStack>
    </Box>
  );
}
