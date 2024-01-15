"use client";
import React from 'react';
import NextLink from 'next/link';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface NavLinkProps {
  href?: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  if (!href) {
    // If href is not provided, render a plain box as a fallback
    return (
      <Box as="span" px={2} py={1} rounded="md" className="text-blue-500 font-semibold">
        {children}
      </Box>
    );
  }

  return (
    <NextLink href={href} passHref>
      <Box  
        as="a"
        px={2}
        py={1}
        rounded="md"
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
      >
        {children}
      </Box>
    </NextLink>
  );
};

export default NavLink;