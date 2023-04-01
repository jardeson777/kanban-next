import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";
import Header from "./Header";

const Dashboard = () => {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      height="auto"
      flex={1}
    >
      <Header />

      <Flex justifyContent="space-between">
        <Box>
          <Text
            as="h2"
            color="white"
            fontSize="18px"
            fontWeight="medium"
            marginBottom={3}
          >
            To do
          </Text>
          <Card width="20vw" minWidth="200px" padding="10px" height="70vh">
            <Card
              width="100%"
              height="100px"
              variant="filled"
              background="blue.100"
              padding={3}
              marginBottom="10px"
            >
              <Heading as="h2" fontSize="md" fontWeight="semibold">
                Tarefa 1
              </Heading>

              <Box marginTop="3">
                <Text fontSize="small">Descrição</Text>
              </Box>
            </Card>

            <Card
              width="100%"
              height="100px"
              variant="filled"
              background="blue.100"
              padding={3}
              marginBottom="10px"
            >
              <Heading as="h2" fontSize="md" fontWeight="semibold">
                Tarefa 1
              </Heading>

              <Box marginTop="3">
                <Text fontSize="small">Descrição</Text>
              </Box>
            </Card>
          </Card>
        </Box>

        <Box>
          <Text
            as="h2"
            color="white"
            fontSize="18px"
            fontWeight="medium"
            marginBottom={3}
          >
            Doing
          </Text>
          <Card width="20vw" minWidth="200px" padding="20px" height="70vh">
            <Card
              width="100%"
              height="100px"
              variant="filled"
              background="yellow.100"
              padding={3}
              marginBottom="10px"
            >
              <Heading as="h2" fontSize="md" fontWeight="semibold">
                Tarefa 1
              </Heading>

              <Box marginTop="3">
                <Text fontSize="small">Descrição</Text>
              </Box>
            </Card>
          </Card>
        </Box>

        <Box>
          <Text
            as="h2"
            color="white"
            fontSize="18px"
            fontWeight="medium"
            marginBottom={3}
          >
            Done
          </Text>
          <Card width="20vw" minWidth="200px" padding="20px" height="70vh">
            <Card
              width="100%"
              height="100px"
              variant="filled"
              background="green.100"
              padding={3}
              marginBottom="10px"
            >
              <Heading as="h2" fontSize="md" fontWeight="semibold">
                Tarefa 1
              </Heading>

              <Box marginTop="3">
                <Text fontSize="small">Descrição</Text>
              </Box>
            </Card>

            <Card
              width="100%"
              height="100px"
              variant="filled"
              background="green.100"
              padding={3}
              marginBottom="10px"
            >
              <Heading as="h2" fontSize="md" fontWeight="semibold">
                Tarefa 1
              </Heading>

              <Box marginTop="3">
                <Text fontSize="small">Descrição</Text>
              </Box>
            </Card>
          </Card>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
