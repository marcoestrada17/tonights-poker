// PlayerAvatar.tsx
import { Box, Image } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const PlayerAvatar = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState("");

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      w="120px"
      h="120px"
      borderRadius="full"
      border="2px solid white"
      overflow="hidden"
      bg="gray.300"
      cursor="pointer"
      onClick={handleClick}
    >
      {imageSrc ? (
        <Image src={imageSrc} alt="Avatar del jugador" w="100%" h="100%" objectFit="cover" />
      ) : null}
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
      />
    </Box>
  );
};

export default PlayerAvatar;
