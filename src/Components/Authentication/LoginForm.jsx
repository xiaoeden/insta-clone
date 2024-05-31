import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userLoginCredential, setUserLoginCredential] = useState({
    email: "",
    password: "",
  });
  const [isPasswordTooShort, setIsPasswordTooShort] = useState(true);
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userLoginCredential.email && userLoginCredential.password) {
      navigate("/");
    }
  };

  const handleSignup = () => {
    navigate("/emailsignup");
  };

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
            fontSize={12}
            padding={2}
            size={"38px"}
            placeholder="Phone number, username, or email"
            type="email"
            value={userLoginCredential.email}
            onChange={(e) =>
              setUserLoginCredential({
                ...userLoginCredential,
                email: e.target.value,
              })
            }
          />
          <InputGroup>
            <Input
              borderRadius={3}
              bgColor="gray.50"
              fontSize={12}
              padding={2}
              size={"38px"}
              marginBottom={2}
              placeholder="Password"
              type={isPasswordShowing ? "text" : "password"}
              value={userLoginCredential.password}
              onChange={(e) => {
                setUserLoginCredential({
                  ...userLoginCredential,
                  password: e.target.value,
                });
                setIsPasswordTooShort(e.target.value.length < 6);
                setIsPasswordEmpty(e.target.value <= 0);
              }}
            />

            {isPasswordEmpty ? null : (
              <InputRightElement
                fontSize={14}
                fontWeight={500}
                marginRight={2}
                cursor={"pointer"}
                onClick={(e) => {
                  setIsPasswordShowing(!isPasswordShowing);
                }}
                _hover={{ color: "gray.500" }}
              >
                {isPasswordShowing ? "Hide" : "Show"}
              </InputRightElement>
            )}
          </InputGroup>

          {/* Login button */}
          <Button
            size={"sm"}
            minW={"full"}
            textColor={"white"}
            colorScheme="blue"
            bgColor={"#3996E5"}
            mb={2}
            onClick={handleLogin}
            isDisabled={isPasswordTooShort}
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
          onClick={handleSignup}
        >
          Create new account
        </Text>
      </Box>
    </VStack>
  );
};

export default LoginForm;
