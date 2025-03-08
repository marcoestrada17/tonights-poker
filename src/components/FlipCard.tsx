import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const MotionBox = motion(Box);

const FlipCard = ({ number = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <MotionBox
      w="100px"
      h="140px"
      perspective="1000px"
      onHoverStart={() => setIsFlipped(!isFlipped)}
      cursor="pointer"
    >
      <MotionBox
        position="absolute"
        w="100%"
        h="100%"
        transformStyle="preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Frente */}
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="white"
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backfaceVisibility="hidden"
          boxShadow="lg"
        >
          <Text fontSize="64px" color="#7D001C">
            {number}
          </Text>
        </Box>

        {/* Reverso */}
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="white"
          borderRadius="10px"
          transform="rotateY(180deg)"
          backfaceVisibility="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box w="90%" h="90%" bg="#7D001C" borderRadius="8px" />
        </Box>
      </MotionBox>
    </MotionBox>
  );
};

export default FlipCard;