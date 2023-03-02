import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return (
    <VStack
      w="full"
      bg="white"
      boxShadow="md"
      borderRadius="md"
      justifyContent="space-between"
    >
      <Image src={imageSrc} borderRadius="md" />
      <VStack alignItems="flex-start" spacing={2} p={2}>
        <Heading size="md" style={{ color: "black" }}>
          {title}
        </Heading>
        <Text fontSize="md" style={{ color: "black" }}>
          {description}
        </Text>
        <HStack style={{ color: "black" }}>
          <Text fontWeight="bold">
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />{" "}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
