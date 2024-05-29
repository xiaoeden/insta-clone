import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import LogoButton from "../../Buttons/LogoButton";
import React from "react";

const EmailSignupForm = () => {
  return (
    <VStack width={"full"} py={4}>
      <Box
        border={"1px solid #CBD5E0"}
        borderRadius={1}
        pt={8}
        px={10}
        pb={5}
        width={"full"}
      >
        <VStack spacing={2}>
          {/* The Instagram text logo */}
          <Image
            src="/logo.png"
            h={20}
            cursor={"pointer"}
            alt="Instagram logo"
          />
          <Text
            maxW={"full"}
            px={2}
            fontSize={16}
            fontWeight={500}
            align={"center"}
            lineHeight={"20px"}
            color={"gray.500"}
            mb={2}
          >
            Sign up to see photos and videos from your friends.
          </Text>
          <LogoButton
            buttonText="Log in with Facebook"
            size="sm"
            fontSize={14}
            marginBottom={2}
          />
          {/* ------ OR ------ */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            mb={2}
            w={"full"}
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
          <Input
            borderRadius={3}
            bgColor="gray.50"
            placeholder="Phone Number or Email"
            fontSize={12}
            padding={2}
            size={"38px"}
          />
          <Input
            borderRadius={3}
            bgColor="gray.50"
            placeholder="Fullname"
            fontSize={12}
            padding={2}
            size={"38px"}
          />
          <Input
            borderRadius={3}
            bgColor="gray.50"
            placeholder="Username"
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
          <Button
            size={"sm"}
            width={"100%"}
            textColor={"white"}
            colorScheme="blue"
            bgColor={"#3996E5"}
            mb={2}
          >
            Log in
          </Button>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
            mb={2}
          >
            <Image src="facebookPrimary.png" w={5} alt="Facebook logo" />
            <Text mx={2} fontSize={14} fontWeight={500} color={"#0866FF"}>
              Log in with Facebook
            </Text>
          </Flex>
          <Text fontSize={12} cursor={"pointer"}>
            Forgot password?
          </Text>
        </VStack>
      </Box>

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

export default EmailSignupForm;
