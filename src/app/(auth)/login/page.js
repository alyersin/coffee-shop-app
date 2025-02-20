"use client";
import { useState } from "react";
import { signInWithGoogle } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { Box, Button, VStack, Text } from "@chakra-ui/react";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const loggedInUser = await signInWithGoogle();
      setUser(loggedInUser);
      router.push("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      bg="gray.100"
      p={4}
    >
      <VStack
        spacing={4}
        p={6}
        bg="white"
        shadow="md"
        borderRadius="lg"
        maxW="400px"
        w="full"
        textAlign="center"
      >
        <Text fontSize="2xl" fontWeight="bold">
          Sign in to Your Account
        </Text>
        <Button colorScheme="blue" onClick={handleGoogleLogin}>
          Sign in with Google
        </Button>

        {/* LOGIN FORM */}
        <LoginForm />
      </VStack>
    </Box>
  );
}
