import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {AiOutlineArrowDown} from "react-icons/ai";

function ScrollForMore() {
  return (
    <Box className="scroll-for-more">
      <AiOutlineArrowDown />

      <Box>
        <Text>
          scroll
          <br />
          for More
        </Text>
      </Box>
    </Box>
  );
}

export default ScrollForMore;
