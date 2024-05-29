import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Link,
  Text,
  VStack,
  textDecoration,
} from "@chakra-ui/react";
import LogoButton from "../../Buttons/LogoButton";
import React from "react";

const EmailSignupForm = () => {
  return (
    <VStack width={"full"} paddingTop={3}>
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

          {/* Text below the logo */}
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

          {/* Log in button with logo */}
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

          {/* Input fields for sign up */}
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

          {/* Terms and condition */}
          <Text fontSize={12} color={"gray"} align={"center"} mb={1}>
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <Link
              color={"blue.700"}
              href="https://www.facebook.com/help/instagram/261704639352628"
            >
              Learn More
            </Link>
          </Text>
          <Text fontSize={12} color={"gray"} align={"center"} mb={1}>
            By signing up, you agree to our{" "}
            <Link
              color={"blue.700"}
              href="https://help.instagram.com/581066165581870/?locale=en_US"
            >
              Terms
            </Link>
            ,{" "}
            <Link
              color={"blue.700"}
              href="https://www.facebook.com/privacy/policy"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              color={"blue.700"}
              href="https://privacycenter.instagram.com/policies/cookies/"
            >
              Cookies Policy
            </Link>
            .
          </Text>

          {/* Sign up button */}
          <Button
            size={"sm"}
            width={"100%"}
            textColor={"white"}
            colorScheme="blue"
            bgColor={"#3996E5"}
            mb={4}
          >
            Sign up
          </Button>
        </VStack>
      </Box>

      {/* Log in */}
      <Box
        textAlign={"center"}
        border={"1px solid #CBD5E0"}
        borderRadius={1}
        padding={6}
        minW={"100%"}
      >
        <Text fontSize={14}>
          Have an account?{" "}
          <Link color={"blue.400"} fontWeight={500}>
            Log in
          </Link>
        </Text>
      </Box>
    </VStack>
  );
};

export default EmailSignupForm;
