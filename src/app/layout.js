"use client";

import "./globals.css";
import Header from "@/components/Layout/Header";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "@/context/CartContext";
import theme from "../theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <CartProvider>
          <ChakraProvider theme={theme}>
            <Header />
            {children}
          </ChakraProvider>
        </CartProvider>
      </body>
    </html>
  );
}
