// "use client";

import { Box, HStack, Icon, Image, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Drawer from "./Drawer";
import { FaUser, FaShoppingCart } from "react-icons/fa";
// import { useState } from "react";

export default function Header() {
  const [cartQuantity, setCartQuantity] = useState("(0)");

  return (
    <Box
      display="flex"
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <HStack>
        <Drawer />
        <Link className="borderRed" href="/" width={16}>
          <Image src="/assets/brand-logo.png" />
        </Link>
      </HStack>

      <HStack>
        <Icon as={FaUser} />
        <HStack>
          <Icon as={FaShoppingCart} />
          <Text>{cartQuantity}</Text>
        </HStack>
      </HStack>
    </Box>
  );
}
