import { Box, Button, color } from "@chakra-ui/react";
import { FaGoogle, FaFacebook, FaEnvelope } from "react-icons/fa";

import React from "react";

export default function ReusableButton({
  provider,
  onClick,
  isLoading,
  styleProps = {},
}) {
  const buttonProps = {
    google: {
      colorScheme: "blue",
      icon: <FaGoogle />,
      text: "Sign in with Google",
    },
    facebook: {
      colorScheme: "facebook",
      icon: <FaFacebook />,
      text: "Sign in with Facebook",
    },
  };

  return (
    <Button
      leftIcon={buttonProps[provider]?.icon}
      colorScheme={buttonProps[provider]?.colorScheme}
      onClick={onClick}
      isLoading={isLoading}
      {...styleProps}
      //   width="full"
    >
      {buttonProps[provider]?.text}
    </Button>
  );
}
