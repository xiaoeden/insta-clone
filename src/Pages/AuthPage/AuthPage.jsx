import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../Components/Authentication/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.lg"} py={5}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
          {/* Left part */}
          <Box display={{ base: "none", lg: "block" }}>
            <Image src="/auth.png" h={605} alt="Phone image" />
          </Box>

          {/* Right part */}
          <AuthForm isLogin={true} />
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
