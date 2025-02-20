"use client";
import { useState } from "react";
import { signInWithEmail, registerWithEmail } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { Box, Input, Button, Text, VStack, useToast } from "@chakra-ui/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegistering) {
        await registerWithEmail(email, password);
        toast({ title: "Account created!", status: "success", duration: 3000 });
      } else {
        await signInWithEmail(email, password);
        toast({
          title: "Logged in successfully!",
          status: "success",
          duration: 3000,
        });
      }
      router.push("/");
    } catch (error) {
      toast({ title: error.message, status: "error", duration: 3000 });
    }
  };

  return (
    <Box
      maxW="400px"
      mx="auto"
      mt="8"
      p="6"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
    >
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Text fontSize="xl" fontWeight="bold">
          {isRegistering ? "Register" : "Login"}
        </Text>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" colorScheme="blue">
          {isRegistering ? "Register" : "Login"}
        </Button>
        <Button variant="link" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering
            ? "Already have an account? Login"
            : "Create an account"}
        </Button>
      </VStack>
    </Box>
  );
}
