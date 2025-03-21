"use client";
import React from "react";
import {
  chakra,
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  VisuallyHidden,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

interface NavLinkProps { 
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
}

const Links = [
  { label: "Home", href: "/" },
  { label: 'Projects', href: '#projects' },
  { label: 'Photos', href: '#photos' },
  {
    label: "Resume",
    href: "https://esvin-ruiz-resume.tiiny.site",
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
      bg="blackAlpha.100"
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
        bg: "blackAlpha.200",
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
        bg: "gray.200",
      }}
      href={href}
    >
      {children}
    </Box>
  );

  return linkComponent;
};

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box className="Navbar-container">
        <Flex
          h={{ base: 16, md: 20 }}
          alignItems="center"
          justifyContent="space-between"
          position="fixed"
          width="100%"
          top={0}
          bg="#83b7ec"
          zIndex={999}
          boxShadow="sm"
          px={{ base: 4, md: 6 }}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            _hover={{ bg: "blue.300" }}
          />

          <Box borderStyle="solid" borderColor="gray.200" ml="auto">
            <Box
              as={Stack}
              maxW="6xl"
              py={{ base: 2, md: 4 }}
              direction={{ base: "column", md: "row" }}
              spacing={4}
              justify={{ base: "center", md: "space-between" }}
              align={{ base: "center", md: "center" }}
            >
              <HStack spacing={{ base: 4, md: 15 }} display={{ base: "none", md: "flex" }}>
                {Links.map((link) => (
                  <NavLink key={link.href} href={link.href} isExternal={link.isExternal}>
                    {link.label}
                  </NavLink>
                ))}
              </HStack>

              <HStack spacing={{ base: 4, md: 6 }}>
                <SocialButton label={"LinkedIn"} href={"https://www.linkedin.com/in/esv261/"}>
                  <FaLinkedin />
                </SocialButton>
                <SocialButton
                  label={"YouTube"}
                  href={"https://www.youtube.com/channel/UCYyM0LuNo7ulbP7e6NcOxVw"}
                >
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"GitHub"} href={"https://github.com/esvin2661"}>
                  <FaGithub />
                </SocialButton>
                <SocialButton label="Vercel" href="https://vercel.com/">
                  <svg
                    className="with-icon_icon__MHUeb"
                    data-testid="geist-icon"
                    fill="currentColor"
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
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </SocialButton>
              </HStack>
            </Box>
          </Box>
        </Flex>

        <Box>
          {isOpen ? (
            <Box 
              pb={4} 
              display={{ md: "none" }}
              position="fixed"
              top="16"
              left={0}
              right={0}
              bg="#83b7ec"
              zIndex={998}
              boxShadow="sm"
            >
              <Stack 
                as="nav" 
                spacing={4} 
                px={4}
                align="center"
                pt={2}
              >
                {Links.map((link) => (
                  <NavLink key={link.href} href={link.href} isExternal={link.isExternal}>
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