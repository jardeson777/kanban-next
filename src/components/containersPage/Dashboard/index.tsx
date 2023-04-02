import ListTask from "@/components/ListTask";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";

const Dashboard = () => {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      height="auto"
      flex={1}
      as="section"
    >
      <Header />

      <Flex justifyContent="space-between">
        <ListTask title="To do" />
        <ListTask title="Doing" />
        <ListTask title="Done" />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
