"use client";
import { Box, HStack, Icon, Image, Link, Text, Button } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import Drawer from "./Drawer";
import { FaUser, FaShoppingCart, FaPhoneAlt, FaHeart } from "react-icons/fa";
import Search from "./Search.jsx";
import Banner from "./Banner.jsx";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export default function Header() {
  const [cartQuantity, setCartQuantity] = useState("(0)");
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const handleProfileClick = () => {
    if (user) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      gap={0}
      py={0}
    >
      {/* BANNER */}
      <Box width="100%">
        <Banner />
      </Box>

      <HStack justifyContent="space-between" width="100%" pt="2" pb="4" pr={4}>
        {/* HEADER CONTENT */}
        <HStack>
          <Drawer />
          <Link href="/" width={16}>
            <Image src="/assets/company-logo.png" />
          </Link>
        </HStack>

        <HStack alignContent="center" spacing={6}>
          <Link onClick={handleProfileClick} cursor="pointer">
            {user ? (
              <Icon as={FaUser} color="green.300" />
            ) : (
              <Icon as={FaUser} />
            )}
          </Link>

          <Link href="/">
            <Icon as={FaHeart} />
          </Link>

          <Link href="/">
            <Icon as={FaShoppingCart} boxSize={5} color="black" />
          </Link>

          <Link href="tel:+407-123-456">
            <Icon as={FaPhoneAlt} />
          </Link>
        </HStack>
      </HStack>

      {/* SEARCH BAR */}
      <Box width="100%">
        <Search />
      </Box>
    </Box>
  );
}
