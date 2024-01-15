"use-client";
import React from "react";
import {
  chakra,
  Box,
  Flex,
  HStack,
  Center,
  Text,
} from "@chakra-ui/react";

// This section handles the github contributios api as a img src
const GitHubContributions = () => {
  return (
    <>
      <Box>
        <Flex h={500} alignItems={"center"} justifyContent={"Center"}>
          <div className="github-contributions">
            <Text
              fontFamily="Nunito Sans"
              fontSize={30}
              textAlign={["center"]}
              fontWeight="bold"
              color="black"
              mb={4}
            >
              Github Contribution's
            </Text>
            <img
              src="http://ghchart.rshah.org/esvin2661"
              alt="Esvin Ruiz 2023 Github chart"
              style={{ width: "800px", height: "auto" }}
            />
          </div>
        </Flex>
      </Box>
    </>
  );
};

export default GitHubContributions;