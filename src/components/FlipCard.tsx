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
      position="relative"
      cursor="pointer"
    >
      <MotionBox
        position="absolute"
        w="100%"
        h="100%"
        bg="white"
        borderRadius="5px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        transformStyle="preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Front Side */}
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backfaceVisibility="hidden"
          borderRadius="5px"
        >
          <Text fontSize="64px" color="#7D001C">{number}</Text>
        </Box>

        {/* Back Side */}
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bg="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          transform="rotateY(180deg)"
          backfaceVisibility="hidden"
          borderRadius="5px"
        >
          <Box w="85%" h="85%" bg="#7D001C" borderRadius="4px" />
        </Box>
      </MotionBox>
    </MotionBox>
  );
};

export default FlipCard;
