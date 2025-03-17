import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface UserCard {
  id: number;
  card: string;
}

interface PokerTableProps {
  mainCard?: string;
  userCards?: UserCard[];
}

const PokerTable: React.FC<PokerTableProps> = ({ mainCard, userCards }) => {
  return (
    <Box
      w={{ base: "400px", sm: "500px", md: "600px" }} // Tamaño de la mesa
      h={{ base: "400px", sm: "500px", md: "600px" }} // Tamaño de la mesa
      bg="green.800" // Fondo verde más intenso
      borderRadius="50%" // Mesa redonda
      position="relative"
      mx="auto"
      boxShadow="xl"
      border="8px solid gold" // Borde dorado exterior
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* Borde interior dorado */}
      <Box
        w="95%" // Ancho del borde interior aumentado
        h="95%" // Alto del borde interior aumentado
        borderRadius="50%" // Borde interior redondo
        border="4px solid gold" // Borde dorado interior
        position="absolute"
      />

      {/* Carta principal */}
      {mainCard && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="120px"
          h="160px"
          bg="green.700" // Fondo verde para el contenedor de la carta principal
          borderRadius="15px"
          border="3px solid black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
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
        </Box>
      )}

      {/* Cartas de los usuarios */}
      {userCards?.map((user, index) => {
        const angle = (360 / userCards.length) * index;
        const radius = 120; // Radio de distribución reducido (cartas más cerca del centro)
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
            border="2px solid #943126"
          >
            <Text fontSize="48px" color="#6495ED">{user.card}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default PokerTable;