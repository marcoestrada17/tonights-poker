import { Box } from "@chakra-ui/react";
import React from "react";
import FlipCard from "./FlipCard";

const CardList = ({ onSelectCard }) => {
  const [selectedCard, setSelectedCard] = React.useState<number | null>(null);
  const cards = [1, 2, 3, 4, 5];

  const handleClick = (cardNumber: number) => {
    setSelectedCard(cardNumber);
    onSelectCard(cardNumber);
  };

  return (
    <Box display="flex" justifyContent="center" gap="20px" flexWrap="wrap">
      {cards.map((card) => (
        <Box
          key={card}
          onClick={() => handleClick(card)}
          transform={`translateY(${selectedCard === card ? "-20px" : "0"})`}
          transition="transform 0.2s"
          _hover={{ transform: "translateY(-20px)" }}
          cursor="pointer"
        >
          <FlipCard number={card} />
        </Box>
      ))}
    </Box>
  );
};

export default CardList;