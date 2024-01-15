"use client";
import React from "react";
import {
  chakra,
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  VisuallyHidden,
  Container,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
}
import Image from "next/image";

const Links = [
  { label: "Home", href: "/" },
  { label: 'Projects', href: '#projects' },
  { label: 'Photos', href: '#photos' },
  {
    label: "Resume",
    href: "https://blush-romola-69.tiiny.site/",
    isExternal: true,
  },
];


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const NavLink = (props: NavLinkProps) => {
  const { children, href, isExternal } = props;

  const linkComponent = isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
      }}
      href={href}
    >
      {children}
    </Box>
  );

  return linkComponent;
};
//
export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Box className="Navbar-container">
      <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          position="fixed"  // Set the position to fixed
          width="100%"      // Set the width to 100% to cover the entire screen
          top={0}            // Position it at the top
          bg="#83b7ec"         // Adjust background color as needed
          zIndex={999}       // Set a high z-index to ensure it's above other elements
          boxShadow="sm"     // Optional: Add a shadow for better visibility
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* Handles Logo Customazation */}
          <HStack spacing={8} alignItems={"center"}>
            <Image
              alt={"Login Image"}
              src={"/logo_transparent.png"}
              width={70}
              height={50}
              layout="fixed"
            />
          </HStack>
          <Flex alignItems={"center"} justifyContent={"flex-end"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  isExternal={link.isExternal}
                >
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </Flex>

          <Box
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <Container
              as={Stack}
              maxW={"6xl"}
              py={4}
              direction={{ base: "column", md: "row" }}
              spacing={4}
              justify={{ base: "center", md: "space-between" }}
              align={{ base: "center", md: "center" }}
            >
              <Stack direction={"row"} spacing={6}>
                <SocialButton
                  label={"LinkedIn"}
                  href={"https://www.linkedin.com/in/esv261/"}
                >
                  <FaLinkedin />
                </SocialButton>
                <SocialButton
                  label={"YouTube"}
                  href={
                    "https://www.youtube.com/channel/UCYyM0LuNo7ulbP7e6NcOxVw"
                  }
                >
                  <FaYoutube />
                </SocialButton>
                <SocialButton
                  label={"GitHub"}
                  href={"https://github.com/esvin2661"}
                >
                  <FaGithub />
                </SocialButton>
                <SocialButton
    label="Vercel"
    href="https://vercel.com/"
  >
    {/* Your Vercel icon here */}
    <svg
  className="with-icon_icon__MHUeb"
  data-testid="geist-icon"
  fill="currentColor" // Change 'none' to 'currentColor' to fill the icon with the current text color
  height="24"
  shapeRendering="geometricPrecision"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="1.5"
  viewBox="0 0 24 24"
  width="24"
  style={{ color: 'var(--geist-foreground)', width: '24px', height: '24px' }}
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12 2L2 19.7778H22L12 2Z"
    fill="currentColor" // Add 'fill' attribute to set the fill color
    stroke="currentColor"
    strokeWidth="1.5"
  />
</svg>
    </SocialButton>
              </Stack>
            </Container>
          </Box>
        </Flex>

        <Box>
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    isExternal={link.isExternal}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Box>
    </>
  );
}