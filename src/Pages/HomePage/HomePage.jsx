import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import FeedPosts from "../../Components/FeedPosts/FeedPosts";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box
          flex={2}
          py={20}
          px={16}
          // width={"calc(100% - 80px)"}
          // width= {80}
          width={"300px"}
          // border={"1px solid blue"}
        >
          <FeedPosts />
          {/* FeedPosts */}
        </Box>
        <Box
          flex={3}
          mr={2}
          display={{ base: "none", lg: "block" }}
          maxWidth={"300px"}
          border={"1px solid red"}
        >
          Suggested for you
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
