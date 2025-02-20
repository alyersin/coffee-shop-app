"use client";

import "./globals.css";
import Header from "@/components/Layout/Header";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import theme from "../theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <AuthProvider>
          <CartProvider>
            <ChakraProvider theme={theme}>
              <Header />
              {children}
            </ChakraProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
