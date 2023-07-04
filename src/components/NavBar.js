import React from "react";
import { ChakraProvider, Box, Flex, Button } from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py={14}
      px={18}
      color="white"
      position="absolute"
      top={0}
      left={0}
      backdropFilter="blur(10px)"
      zIndex={1}
      bg="rgba(0, 0, 0, 0.5)" 
    >
      <Box>
        <Box as="span" fontSize="xl" fontWeight="bold">
          Cross
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Link to="/">
        <Button
          as="a"
          href="/wallet"
          colorScheme="blue"
          size="lg"
          fontWeight="bold"
          px={8}
          py={4}
          ml={4}
        >
          Home
        </Button>
        </Link>

        <Link to="/explore">
        <Button
          as="a"
          href="/"
          colorScheme="purple"
          size="lg"
          fontWeight="bold"
          px={8}
          py={4}
          ml={4}
        >
          Explore
        </Button>
        </Link>

        <Link to="/history">
        <Button
          as="a"
          href="/"
          colorScheme="teal"
          size="lg"
          fontWeight="bold"
          px={8}
          py={4}
          ml={4}
          alignSelf="flex-end"
        >
          History
        </Button>
        </Link>

        <Link to="/create">
        <Button
          as="a"
          href="/"
          colorScheme="red"
          size="lg"
          fontWeight="bold"
          px={8}
          py={4}
          ml={4}
        >
          Create
        </Button>
        </Link>
        
        <Box ml={4} cursor="pointer">
          <FaWallet size={24} />
        </Box>

      </Box>
    </Flex>
  );
}

export default Navbar;
