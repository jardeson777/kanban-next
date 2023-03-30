import { Avatar, Box, Flex, Input, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Flex justifyContent="space-between">
        <Text fontSize="25px" fontWeight="semibold" color="white">
          My kanban made in Next JS
        </Text>

        <Flex gap="5px">
          <Avatar width="35px" height="35px" />
          <Avatar width="35px" height="35px" />
          <Flex
            borderRadius="full"
            background="blue.700"
            width="35px"
            height="35px"
            justifyContent="center"
            alignItems="center"
            color="white"
          >
            +3
          </Flex>
        </Flex>

        <Flex gap="20px" alignItems="center">
          <Input
            variant="filled"
            background="white"
            placeholder="search"
            width="120px"
          />
          <Avatar width="45px" height="45px" src="/jardeson.jpg" />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
