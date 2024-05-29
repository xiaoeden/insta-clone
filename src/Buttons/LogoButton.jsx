import { Button } from "@chakra-ui/react";
import React from "react";
import FacebookSecondaryIcon from "../Icons/FacebookSecondaryIcon";

// TODO: Customize color scheme
const LogoButton = (props) => {
  return (
    <Button
      leftIcon={<FacebookSecondaryIcon />}
      width={"100%"}
      size={props.size}
      textColor={"white"}
      fontSize={props.fontSize}
      colorScheme="blue"
      bgColor={"#3996E5"}
      marginBottom={props.marginBottom}
    >
      {props.buttonText}
    </Button>
  );
};

export default LogoButton;
