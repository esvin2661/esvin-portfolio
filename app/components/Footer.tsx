"use client";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react';
import { FaGithub, FaYoutube,FaLinkedin } from 'react-icons/fa'
import { ReactNode } from 'react'


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}


export default function Footer() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"}>Home</Link>
          <Link href={"#projects"}>Projects</Link>
          <Link href={"#photos"}>Photos</Link>
          <Link href={"/resume"}>Resume</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
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
          <Text>&copy; 2023 Esvin Ruiz. All rights reserved.</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"LinkedIn"}
              href={"https://www.linkedin.com/in/esv261/"}
            >
              <FaLinkedin />
            </SocialButton>
            <SocialButton
              label={"YouTube"}
              href={"https://www.youtube.com/channel/UCYyM0LuNo7ulbP7e6NcOxVw"}
            >
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={"GitHub"}
              href={"https://github.com/esvin2661"}
            >
              <FaGithub />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}