import React from "react";
import { motion } from "framer-motion";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link as LinkDom } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";

function Home({ imageDetail, image }) {
  const transition = { duration: 1.5, ease: [0.43, 0.13, 0.25, 0.9] };
  return (
    <main>
      <Box
        as={motion.div}
        exit={{ opacity: 0 }}
        transition={transition}
        position={"relative"}
      >
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
                    src={require("../assets/image2.webp")}
                    placeholder={require("../assets/image1.jpg")}
                  >
                    {(src) => (
                      <Image
                        as={motion.img}
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                        w={"100%"}
                        src={src}
                        alt="yasmeen Tariq"
                      />
                    )}
                  </ProgressiveImage>{" "}
                </LinkDom>{" "}
              </Box>
            </Box>
            <Flex
              as={motion.div}
              exit={{ opacity: 0 }}
              transition={transition}
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
