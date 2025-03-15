"use client";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Stack 
      minH={"100vh"} 
      direction={{ base: "column", md: "row" }} 
      spacing={{ base: 8, md: 0 }}
      pt={{ base: "70px", md: "0" }}
    >
      <Flex p={{ base: 4, md: 8 }} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={{ base: 4, md: 6 }} w={"full"} maxW={"lg"}>
          <Heading
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            textAlign="center"
          >
            <Text
              as={"span"}
              position={"relative"}
              fontFamily="Inter"
              _after={{
                content: "''",
                width: "full",
                height: { base: "20%", md: "25%" },
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Esvin Ruiz
            </Text>
            <br />{" "}
            <Text fontFamily="Intern" color={"blue.400"} as={"span"}>
              Portfolio
            </Text>{" "}
          </Heading>
          <Text
            fontFamily="Nunito Sans"
            fontSize={{ base: "sm", sm: "md", lg: "xl" }}
            color={"black"}
            textAlign="center"
            px={{ base: 4, md: 0 }}
          >
            I am Esvin Ruiz, a dedicated computer science student at
            UMass Boston. My fervor lies in cultivating opportunities
            for underrepresented individulas and transforming innovative concepts
            into tangible reality.
          </Text>
        </Stack>
      </Flex>
      <Flex
        flex={1}
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={{ base: 4, md: 8 }}
      >
        <Image
          alt={"Esvin Ruiz Image"}
          objectFit={"cover"}
          src={"/Esvin Ruiz -3233-fotor-20231205231454.png"}
          width={{ base: "80%", md: "70%" }}
          height="auto"
          transition="transform 1.6s"
          _hover={{
            transform: "scale(0.5) rotate(360deg)",
          }}
        />
      </Flex>
    </Stack>
  );
}