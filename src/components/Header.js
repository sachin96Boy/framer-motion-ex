import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function header() {
  return (
    <header>
      <Box position={"sticky"}>
        <Flex justify={"space-between"} align="center">
          <Box>
            <Heading>Jimmy Fermin</Heading>
          </Box>
          <Box>
            <Text>Menu</Text>
          </Box>
        </Flex>
      </Box>
    </header>
  );
}

export default header;
