import { Box, VStack, HStack } from "@chakra-ui/react";
import { useState } from "react";
import CardList from './components/CardList';
import PokerTable from './components/PokerTable';
import { ColorModeToggle } from './components/color-mode-toggle';


export default function Page() {
  const [mainCard, setMainCard] = useState(1); // Ejemplo: carta principal
  const [userCards, setUserCards] = useState([]);

  const handleSelectCard = (cardNumber) => {
    const newUser = {
      id: `user-${Date.now()}`,
      card: cardNumber
    };
    setUserCards([...userCards, newUser]);
  };

  return (
    <Box 
    textAlign="center" 
    fontSize="xl" 
    pt="10vh"
    bg="white"
    minH="100vh"
    display="flex"
    flexDirection="column"
    alignItems="center"
  >
      {/* Mesa */}
      <Box 
      >
        <PokerTable mainCard={mainCard} userCards={userCards} />
      </Box>
  
  
      {/* Botón de tema */}
      <Box pos="absolute" top="4" right="4">
        <ColorModeToggle />
      </Box>
    </Box>
  );
}