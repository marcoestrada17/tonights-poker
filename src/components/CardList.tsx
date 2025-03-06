import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import FlipCard from "./FlipCard";

const CardList = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null); 
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null); 
  const cards = [1, 2, 3, 4, 5]; 

  const handleCardClick = (cardNumber: number) => {
    setSelectedCard(cardNumber); 
    setSelectedNumber(cardNumber); 
    console.log("Selected Card Number:", cardNumber); 
  };

  return (
    <Box display="flex" justifyContent="center" gap="20px" flexWrap="wrap">
      {/* Display the selected card number */}
      {selectedNumber && (
        <Text fontSize="xl" mb={4}>Selected Card Number: {selectedNumber}</Text>
      )}

      {cards.map((cardNumber) => (
        <Box
          key={cardNumber}
          onClick={() => handleCardClick(cardNumber)}
          position="relative"
          cursor="pointer"
          transform={`translateY(${selectedCard === cardNumber ? "-20px" : "0px"})`} 
          transition="transform 0.3s ease-in-out"
          _hover={{
            transform: "translateY(-20px)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <FlipCard number={cardNumber} />
        </Box>
      ))}
    </Box>
  );
};

export default CardList;
