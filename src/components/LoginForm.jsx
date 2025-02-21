"use client";
import { useState, useEffect } from "react";
import { signInWithEmail, registerWithEmail } from "@/lib/auth";
import { useRouter } from "next/navigation";
import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegistering) {
      if (!nume || !prenume) {
        toast({
          title: "Completați toate câmpurile obligatorii!",
          status: "error",
          duration: 3000,
        });
        return;
      }
      if (password !== confirmPassword) {
        toast({
          title: "Parolele nu se potrivesc!",
          status: "error",
          duration: 3000,
        });
        return;
      }
      if (!agreeToTerms) {
        toast({
          title: "Trebuie să acceptați politica de confidențialitate!",
          status: "error",
          duration: 3000,
        });
        return;
      }

      try {
        const newUser = await registerWithEmail(email, password);
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            displayName: `${prenume} ${nume}`,
          });
        }

        toast({
          title: "Cont creat cu succes!",
          status: "success",
          duration: 3000,
        });
        router.push("/");
      } catch (error) {
        toast({ title: error.message, status: "error", duration: 3000 });
      }
    } else {
      try {
        await signInWithEmail(email, password);
        toast({
          title: "Autentificat cu succes!",
          status: "success",
          duration: 3000,
        });
        router.push("/");
      } catch (error) {
        toast({ title: error.message, status: "error", duration: 3000 });
      }
    }
  };

  return (
    <Box
      width="100%"
      mx="auto"
      mt="8"
      p="6"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
    >
      {user ? (
        <VStack spacing={4}>
          <Text fontSize="xl" fontWeight="bold">
            Bun venit, {user.displayName || "Utilizator"}!
          </Text>
          <Text>Email: {user.email}</Text>
        </VStack>
      ) : (
        <VStack spacing={4} as="form" onSubmit={handleSubmit}>
          <Text fontSize="xl" fontWeight="bold">
            {isRegistering ? "Înregistrare cont nou" : "Autentificare"}
          </Text>

          {/* Email Field */}
          <Input
            type="email"
            placeholder="Introduceți adresa de email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />

          {isRegistering && (
            <>
              <Input
                type="text"
                name="user_nume_123"
                placeholder="Introduceți numele"
                value={nume}
                onChange={(e) => setNume(e.target.value)}
                autoComplete="off"
                required
              />
              <Input
                type="text"
                name="user_prenume_456"
                placeholder="Introduceți prenumele"
                value={prenume}
                onChange={(e) => setPrenume(e.target.value)}
                autoComplete="off"
                required
              />
            </>
          )}

          <Input
            type="password"
            placeholder="Introduceți parola"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
          {isRegistering && (
            <Input
              type="password"
              placeholder="Confirmați parola"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          )}

          {isRegistering && (
            <Checkbox
              isChecked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
            >
              Sunt de acord cu prelucrarea datelor personale conform{" "}
              <b>Politicii de Confidențialitate</b>.
            </Checkbox>
          )}

          <Button type="submit" colorScheme="blue">
            {isRegistering ? "Înregistrează-te" : "Intră în cont"}
          </Button>

          <Button
            variant="link"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering
              ? "Ai deja un cont? Intră în cont"
              : "Creați un cont nou"}
          </Button>
        </VStack>
      )}
    </Box>
  );
}
