"use client";

import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { logout } from "@/lib/auth";
import { redirect } from "next/navigation";

const handleLogout = () => {
  logout();
  redirect("/");
};

export default function page() {
  return (
    <Box>
      <Heading>Profile</Heading>
      <Button onClick={handleLogout}>Logout</Button>
    </Box>
  );
}
