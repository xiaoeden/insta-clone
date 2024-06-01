import { Box, Container, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CommentIcon,
  LikeIcon,
  SaveIcon,
  ShareIcon,
  UnlikeIcon,
  VerifiedIcon,
} from "../../assets/constants";

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  return (
    <Flex direction={"column"} my={3}>
      {/* Icons */}
      <Flex justifyContent={"space-between"} mb={2} maxWidth={"full"}>
        {/* Left icons */}
        <Flex gap={3}>
          <Box onClick={handleLike} cursor={"pointer"}>
            {liked ? <UnlikeIcon /> : <LikeIcon />}
          </Box>
          <Box cursor={"pointer"}>
            <CommentIcon />
          </Box>
          <Box cursor={"pointer"}>
            <ShareIcon />
          </Box>
        </Flex>
        {/* Right icon */}
        <SaveIcon />
      </Flex>
      {/* Likes */}
      <Text fontSize={14} fontWeight={500}>
        {likes.toLocaleString()} likes
      </Text>
      {/* Username and Caption*/}
      <Text fontSize={14} fontWeight={500} maxWidth={"full"}>
        programmer
        <Box as={"span"} px={1}>
          <VerifiedIcon />
        </Box>
        <Text as={"span"} fontWeight={400}>
          content
        </Text>
      </Text>
      {/* View all comments */}
      {/* Add a comment */}
    </Flex>
  );
};

export default PostFooter;
