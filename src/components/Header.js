import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <header>
      <Box
        flexGrow={"1"}
        my="0"
        mx="auto"
        py={"0"}
        px="32px"
        position={"sticky"}
        w="auto"
        h={"100%"}
      >
        <Flex justify={"space-between"} align="center">
          <Box>
            <Heading>Jimmy Fermin</Heading>
          </Box>
          <Box
            cursor={"pointer"}
            borderRadius="full"
            h={"80px"}
            w={"80px"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
          >
            <Text>Menu</Text>
          </Box>
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
