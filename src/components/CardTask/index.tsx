import { Task } from "@/module/Task";
import { Box, Card, Heading, Text } from "@chakra-ui/react";

type CardTaskProps = {
  data: Task;
};

const CardTask = ({ data: { id, description, title } }: CardTaskProps) => {
  return (
    <Card
      width="100%"
      height="100px"
      variant="filled"
      background="blue.100"
      padding={3}
      marginBottom="10px"
    >
      <Heading as="h2" fontSize="md" fontWeight="semibold">
        {title}
      </Heading>

      <Box marginTop="3">
        <Text fontSize="small">{description}</Text>
      </Box>
    </Card>
  );
};

export default CardTask;
