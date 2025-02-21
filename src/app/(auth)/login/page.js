"use client";
import { useState } from "react";
import { signInWithGoogle, signInWithFacebook } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { Box, Button, VStack, Text } from "@chakra-ui/react";
import LoginForm from "@/components/LoginForm.jsx";
import ReusableButton from "@/components/Elements/ReusableButton";

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

  const handleFacebookLogin = async () => {
    try {
      const loggedInUser = await signInWithFacebook();
      setUser(loggedInUser);
      router.push("/");
    } catch (error) {
      console.error("Facebook sign-in error:", error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
      bg="gray.100"
      // p={4}
    >
      <VStack
        spacing={4}
        p={6}
        bg="white"
        shadow="md"
        borderRadius="lg"
        maxW="470px"
        w="full"
        textAlign="center"
      >
        {/* <Text fontSize="2xl" fontWeight="bold">
          Autentificare
        </Text> */}
        {/* LOGIN FORM */}
        <LoginForm />
        {/* CONECTARE CU GOOGLE SI FACEBOOK */}
        <Text>Contectați-vă cu profilul social</Text>

        {/* REUSABLE BUTTON */}
        <ReusableButton
          provider="google"
          onClick={handleGoogleLogin}
          styleProps={{ width: "full" }}
        />
        <ReusableButton
          provider="facebook"
          onClick={handleFacebookLogin}
          styleProps={{ bg: "#1877F2", color: "white", width: "full" }}
        />
      </VStack>
    </Box>
  );
}
