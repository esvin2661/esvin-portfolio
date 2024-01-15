import React from "react";
import {
  chakra,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

const GitHubContributions = () => {
  return (
    <>
      <Box>
        <Flex h={500} alignItems={"center"} justifyContent={"center"}>
          <div className="github-contributions">
            <Text
              fontFamily="Nunito Sans"
              fontSize={30}
              textAlign={["center"]}
              fontWeight="bold"
              color="black"
              mb={4}
            >
              Github Contribution&apos;s
            </Text>
            <chakra.img
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
