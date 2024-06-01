import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { OptionsIcon, VerifiedIcon } from "../../assets/constants";

const PostHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        {/* Profile pic */}
        <Avatar src="/img1.png" alt="user profile pic" size={"sm"} />

        {/* Username and location */}
        <Flex direction={"column"}>
          <Flex
            fontSize={14}
            fontWeight={"500"}
            gap={1}
            justifyContent={"center"}
            alignContent={"center"}
          >
            programmer
            {/* TODO: Shown only for verified account */}
            <Box alignContent={"center"} justifyContent={"center"}>
              <VerifiedIcon />
            </Box>
            <Box color={"gray.500"}>• 1d</Box>
          </Flex>
          <Box>
            <Text fontSize={12}>Location</Text>
          </Box>
        </Flex>
      </Flex>

      {/* Dots on the right */}
      <Box cursor={"pointer"}>
        {/* TODO: Modal when clicked */}
        <OptionsIcon />
      </Box>
    </Flex>
  );
};

export default PostHeader;
