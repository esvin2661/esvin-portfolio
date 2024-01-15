import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { skills } from "../constants/index"




const SkillsPage = () => {
  return (
    <div>
      <Text
        fontFamily="Nunito Sans"
        fontSize={30}
        textAlign={["center"]}
        fontWeight="bold"
        color="black"
        mb={8}
      >
        TechStack
      </Text>
      <Flex
        mb={10}
        direction={["column", "row"]} // Stack items vertically on small screens, horizontally on larger screens
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap" // Allow items to wrap onto the next line on small screens
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb={8}
            mr={4}
            p={2}
            //icon width and height
            width={140}
            height={140}
            border="3px solid black"
            borderRadius="full"
            _hover={{
              transform: "scale(1.25)",}}>
            {skill.icon}
            <Text ml={2}>{skill.name}</Text>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default SkillsPage;