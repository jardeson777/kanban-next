import { Box, Card, Text } from "@chakra-ui/react";

type ListTaskProps = {
  title: string;
};

const ListTask = ({ title }: ListTaskProps) => {
  return (
    <Box>
      <Text
        as="h2"
        color="white"
        fontSize="18px"
        fontWeight="medium"
        marginBottom={3}
      >
        {title}
      </Text>
      <Card width="20vw" minWidth="200px" padding="10px" height="70vh"></Card>
    </Box>
  );
};

export default ListTask;
