import { Box, Input, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const UserStoryCard = ({ index = 0 }) => {
  const [storyNumber, setStoryNumber] = useState("");
  const [userStory, setUserStory] = useState("");

  const handleFetchUserStory = () => {
    setUserStory(
      `Historia número: ${storyNumber}`
    );
  };

  return (
    <MotionBox
      w="100px"
      h="140px"
      bg="white"
      borderRadius="10px"
      p="10px"
      boxShadow="lg"
      position="relative"
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Input
        color="black"
        type="text"
        placeholder="Introduce el número de historia"
        value={storyNumber}
        onChange={(e) => setStoryNumber(e.target.value)}
        size="xs"
        mb="2"
        onPaste={(e) => e.preventDefault()}
      />
      <Button size="xs" onClick={handleFetchUserStory} mb="2" color="black">
        Cargar
      </Button>
      <Text fontSize="xs" color="black">
        {userStory}
      </Text>
    </MotionBox>
  );
};

export default UserStoryCard;
