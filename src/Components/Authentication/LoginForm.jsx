import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const LoginForm = () => {
  return (
    <VStack width={"full"}>
      <Box
        border={"1px solid #CBD5E0"}
        borderRadius={1}
        pt={8}
        px={10}
        pb={5}
        minW={"full"}
      >
        <VStack spacing={2} minW={"full"}>
          {/* The Instagram text logo */}
          <Image
            src="/logo.png"
            h={20}
            marginBottom={4}
            cursor={"pointer"}
            alt="Instagram logo"
          />

          {/* Input fields for username and password */}
          <Input
            borderRadius={3}
            bgColor="gray.50"
            placeholder="Phone number, username, or email"
            fontSize={12}
            padding={2}
            size={"38px"}
          />
          <Input
            borderRadius={3}
            bgColor="gray.50"
            placeholder="Password"
            fontSize={12}
            padding={2}
            size={"38px"}
            marginBottom={2}
          />

          {/* Login button */}
          <Button
            size={"sm"}
            minW={"full"}
            textColor={"white"}
            colorScheme="blue"
            bgColor={"#3996E5"}
            mb={2}
          >
            Log in
          </Button>

          {/* ------ OR ------ */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            mb={4}
            width={"full"}
          >
            <Box flex={2} h={"1px"} bg={"#CBD5E0"}></Box>
            <Text
              mx={4}
              fontSize={14}
              fontWeight={500}
              align={"center"}
              color={"gray"}
            >
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"#CBD5E0"}></Box>
          </Flex>

          {/* Log in with Facebook with Facebook icon */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
            mb={2}
          >
            <Image src="facebookPrimary.png" width={5} alt="Facebook logo" />
            <Text mx={2} fontSize={14} fontWeight={500} color={"#0866FF"}>
              Log in with Facebook
            </Text>
          </Flex>
          <Text fontSize={12} cursor={"pointer"}>
            Forgot password?
          </Text>
        </VStack>
      </Box>

      {/* Create new account button */}
      <Box
        textAlign={"center"}
        border={"1px solid #CBD5E0"}
        borderRadius={1}
        padding={5}
        minW={"100%"}
      >
        <Text
          fontSize={14}
          fontWeight={500}
          color={"blue.400"}
          cursor={"pointer"}
        >
          Create new account
        </Text>
      </Box>
    </VStack>
  );
};

export default LoginForm;
