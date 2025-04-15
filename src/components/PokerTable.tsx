// PokerTable.tsx
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import CardList from "./CardList";
import UserStoryCard from "./UserStoryCard";
import PlayerAvatar from "./PlayerAvatar";

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

        {/* Avatares de jugadores alrededor de la mesa */}
        {/* Parte superior central */}
        <Box position="absolute" top="5%" left="50%" transform="translateX(-50%)" zIndex={3}>
          <PlayerAvatar />
        </Box>
        {/* Lateral izquierdo */}
        <Box position="absolute" top="50%" left="-24" transform="translateY(-50%)" zIndex={3}>
          <PlayerAvatar />
        </Box>
        {/* Lateral derecho */}
        <Box position="absolute" top="50%" right="-24" transform="translateY(-50%)" zIndex={3}>
          <PlayerAvatar />
        </Box>
        
        {/* Esquina superior izquierda */}
        <Box position="absolute" top="10%" left="10%" zIndex={3}>
          <PlayerAvatar />
        </Box>
        {/* Esquina superior derecha */}
        <Box position="absolute" top="10%" right="10%" zIndex={3}>
          <PlayerAvatar />
        </Box>
 
        {/* Carta central interactiva (cuadro para la historia de usuario) */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="14%"
          h="20%"
          zIndex={2}
        >
          <UserStoryCard />
        </Box>

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