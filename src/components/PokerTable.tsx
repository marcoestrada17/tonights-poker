import { Box, Text } from "@chakra-ui/react";
import React from "react";

const PokerTable = ({ mainCard, userCards }) => {
  return (
    <Box
      w={{ base: "100%", sm: "80%", md: "70%", lg: "60%" }}
      h={{ base: "200px", sm: "250px", md: "300px" }}
      bg="#996E66"
      borderRadius="20px"
      position="relative"
      mx="auto"
      boxShadow="xl"
      border="4px solid #5A463C"
    >
      {/* Carta principal */}
      {mainCard && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="100px"
          h="140px"
          bg="white"
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="lg"
        >
          <Text fontSize="64px" color="#318D5A">{mainCard}</Text>
        </Box>
      )}

      {/* Cartas de los usuarios - Radio aumentado */}
      {userCards?.map((user, index) => {
        const angle = (360 / userCards.length) * index;
        const radius = 180; // Aumentado de 120 a 160
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <Box
            key={user.id}
            position="absolute"
            top={`calc(50% + ${y}px)`}
            left={`calc(50% + ${x}px)`}
            transform="translate(-50%, -50%)"
            w="80px"
            h="120px"
            bg="white"  
            borderRadius="10px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
            border="2px solid #943126 "  // Borde azul
          >
            <Text fontSize="48px" color="#6495ED">{user.card}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default PokerTable;