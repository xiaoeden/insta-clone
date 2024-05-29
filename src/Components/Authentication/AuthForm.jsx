import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import LoginForm from "./LoginForm";
import EmailSignupForm from "./EmailSignupForm";

const AuthForm = (props) => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"}>
      <VStack
        spacing={4}
        alignItems={"center"}
        justifyContent={"center"}
        align={"stretch"}
        width={"350px"}
      >
        {props.isLogin ? <LoginForm /> : <EmailSignupForm />}
        <Box textAlign={"center"} fontSize={14}>
          Get the app.
        </Box>
        <Flex gap={5} justifyContent={"center"}>
          <Image src="/playstore.png" h={"10"} alt="Playstore logo" />
          <Image src="/microsoft.png" h={"10"} alt="Microsoft logo" />
        </Flex>
      </VStack>
    </Flex>
  );
};

export default AuthForm;
