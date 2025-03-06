import { Box } from "@chakra-ui/react";
import React from "react";

const PokerTable = () => {
  return (
    <Box
      w={{ base: "100%", sm: "80%", md: "70%", lg: "60%" }} // Adjust width based on screen size
      h={{ base: "200px", sm: "250px", md: "300px" }} // Adjust height based on screen size
      bg="#996E66"
      borderRadius="10px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      mx="auto" // Center horizontally
    >
      <Box
        w={{ base: "90%", sm: "80%", md: "70%" }} // Adjust width based on screen size
        h={{ base: "180px", sm: "230px", md: "250px" }} // Adjust height based on screen size
        bg="#F7E5A4"
        borderRadius="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={{ base: "8px", sm: "15px", md: "20px" }} // Padding for the middle box
      >
        <Box
          w="400px" // Adjust width based on screen size
          h="200px"
          bg="#318D5A"
          borderRadius="10px"
          p={{ base: "5px", sm: "10px", md: "15px" }} // Padding for the inner box
        />
      </Box>
    </Box>
  );
};

export default PokerTable;
