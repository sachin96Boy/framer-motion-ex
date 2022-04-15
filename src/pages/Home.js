import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link as LinkDom } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";

function Home({ imageDetail, image }) {
  return (
    <main>
      <Box position={"relative"}>
        <Flex h={"100vh"} justify={"center"} align="center" flexDir="row">
          <Box className="image-container" position={"relative"}>
            <Box
              className="thumbnail"
              overflow={"hidden"}
              position={"relative"}
              ref={image}
              style={{ width: imageDetail.width, height: imageDetail.height }}
            >
              <Box className="frame">
                <LinkDom to={"/model/yasmeen-tariq"}>
                  <ProgressiveImage
                    src={require("../../assets/image2.wepb")}
                    placeholder={require("../../assets/image1.jpg")}
                  >
                    {(src) => (
                      <Image w={"100%"} src={src} alt="yasmeen Tariq" />
                    )}
                  </ProgressiveImage>{" "}
                </LinkDom>{" "}
              </Box>
            </Box>
            <Flex
              className="information"
              position={"absolute"}
              w={"100%"}
              align="center"
              justify={"space-between"}
              mt="20px"
              textTransform={"uppercase"}
            >
              <Text className="title">Yasmeen Tariq</Text>
              <Flex className="location" flexDirection={"column"}>
                <Text>28.234</Text>
                <Text>-28.234</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </main>
  );
}

export default Home;
