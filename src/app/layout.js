"use client";

import "./globals.css";
import Header from "@/components/Layout/Header";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import theme from "../theme";
import Footer from "@/components/Layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        suppressHydrationWarning
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Ensure full viewport height
          margin: 0,
        }}
      >
        <AuthProvider>
          <CartProvider>
            <ChakraProvider theme={theme}>
              <Header />
              <main style={{ flex: 1 }}>{children}</main>{" "}
              {/* Makes content fill space */}
              <Footer />
            </ChakraProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
