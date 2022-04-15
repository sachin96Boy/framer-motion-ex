import React from "react";
import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
import ScrollForMore from "../components/ScrollForMore";

function Model() {
  return (
    <Box className="single">
      <Box className="container-fluid">
        <Flex
          className="ow center top-row"
          alignItems={"flex-end"}
          w="100%"
          h={"50vh"}
        >
          <Box className="top" pb={"40px"}>
            <Box
              className="detail"
              display={"flex"}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Flex className="location" flexDir={"column"}>
                <Text>1.7393</Text>
                <Text>1.7393</Text>
              </Flex>
              <Box>
                <Text className="mua" textTransform={"uppercase"}>
                  MUA: @mylifecrystall
                </Text>
              </Box>
            </Box>
            <Box className="model" overflow={"hidden"}>
              <Box
                className="first"
                mr={"72px"}
                display="inline-block"
                position={"relative"}
                fontWeight="normal"
              >
                <span>Y</span>
                <span>a</span>
                <span>s</span>
                <span>m</span>
                <span>e</span>
                <span>e</span>
                <span>n</span>
              </Box>
              <Box className="last">
                <span>T</span>
                <span>a</span>
                <span>r</span>
                <span>i</span>
                <span>q</span>
              </Box>
            </Box>
          </Box>
        </Flex>
        <Box className="row bottom-row" position={"relative"} height="50vh">
          <Box className="bottom" h={"100%"} w="100%">
            <Box className="image-container-single">
              <Box
                className="thumbnail-single"
                width={"100%"}
                h="800px"
                my={0}
                mx="auto"
                overflow={"hidden"}
                position="absolute"
                left={0}
                right={0}
              >
                <Box className="frame-single">
                  <Image
                    position={"absolute"}
                    w={"100%"}
                    src={require("../assets/image2.webp")}
                    alt="An Image"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <ScrollForMore />
        </Box>
      </Box>
      <Box className="detailed-information" mt={"200px"} h="600px">
        <Box className="container">
          <Box
            className="row"
            alignItems={"flex-start"}
            justifyContent="space-between"
          >
            <Heading as="h2">
              {" "}
              The insiration behind the artwork '&' <br /> what it means.
            </Heading>
            <Text w={"800px"} lineHeight="28px">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Model;
