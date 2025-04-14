import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import CardList from "./CardList";

interface PokerTableProps {
  mainCard?: string;
}

const PokerTable: React.FC<PokerTableProps> = ({ mainCard }) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bg="green.900"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Box position="relative" w="90vmin" h="90vmin">
        {/* Imagen de la mesa */}
        <Image
          src="/table-nobg-svg-01.svg"
          alt="Mesa de poker"
          objectFit="contain"
          w="100%"
          h="100%"
          position="absolute"
          top="0"
          left="0"
          zIndex={0}
        />

      
        {/* (Opcional) Carta principal en el centro */}
        {mainCard && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="14%"
            h="20%"
            bg="green.700"
            borderRadius="15px"
            border="3px solid black"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={1}
          >
            <Box
              w="90%"
              h="90%"
              bg="white"
              borderRadius="10px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="lg"
            >
              {mainCard}
            </Box>
          </Box>
        )}

        {/* Lista de cartas en la parte inferior */}
        <Box
          position="absolute"
          bottom="5%"
          left="50%"
          transform="translateX(-50%)"
          zIndex={1}
        >
          <CardList onSelectCard={undefined} />
        </Box>
      </Box>
    </Box>
  );
};

export default PokerTable;