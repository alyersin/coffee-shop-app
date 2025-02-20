import { Box, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import React from "react";

const bannerAnimation = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(-100%); }
`;

export default function Banner() {
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height={8}
      overflow="hidden"
      whiteSpace="nowrap"
      bg="red.300"
      color="white"
      fontWeight="600"
      position="relative"
    >
      <Box
        display="flex"
        width="200%"
        animation={`${bannerAnimation} 50s linear infinite`}
      >
        <Text mx={4}>
          🚀 Oferta Specială! Transport gratuit pentru toate comenzile de peste
          50$! 🎉 | Oferte limitate disponibile acum! 🔥
        </Text>
        <Text mx={4}>
          🚀 Oferta Specială! Transport gratuit pentru toate comenzile de peste
          50$! 🎉 | Oferte limitate disponibile acum! 🔥
        </Text>
      </Box>
    </Box>
  );
}
