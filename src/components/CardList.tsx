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
    <Box position="relative" display="flex" justifyContent="center" gap="20px">
      {cards.map((card, index) => {
        const isSelected = selectedCard === card;

        return (
          <Box
            key={card}
            onClick={() => handleClick(card)}
            position={isSelected ? "absolute" : "relative"}
            top={isSelected ? "-120px" : "0"}
            left={isSelected ? "calc(50% - 50px)" : "auto"} // Centrado respecto a la mesa
            zIndex={isSelected ? 999 : 1}
            transform={isSelected ? "scale(1.1)" : "none"}
            transition="all 0.3s ease"
            cursor="pointer"
          >
            <FlipCard number={card} index={index} />
          </Box>
        );
      })}
    </Box>
  );
};

export default CardList;
