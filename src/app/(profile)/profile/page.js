"use client";

import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { logout } from "@/lib/auth";

export default function page() {
  return (
    <Box>
      <Heading>Profile</Heading>
      <Button onClick={logout}>Logout</Button>
    </Box>
  );
}
