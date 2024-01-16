import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from 'next/font/google';  // Add this import

const inter = Inter({ subsets: ['latin'] });


const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">  {/* Add HTML tag with lang attribute */}
      <body className={inter.className}>
        <ChakraProvider>
          <CSSReset />
          <Navbar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;