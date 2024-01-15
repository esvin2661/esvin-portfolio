"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar  from "./components/Navbar"
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ChakraProvider>
        <Navbar />
        {children}
        <Footer />
      </ChakraProvider>
    </div>
  );
}