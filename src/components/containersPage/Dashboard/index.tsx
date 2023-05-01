import ListTask from "@/components/ListTask";
import { useTask } from "@/hooks/useTasks";
import { TaskUtil } from "@/module/Task";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";

const Dashboard = () => {
  const { tasksToDo, tasksDoing, tasksDone } = useTask();

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
        <ListTask title="To do" tasks={tasksToDo} />
        <ListTask title="Doing" tasks={tasksDoing} />
        <ListTask title="Done" tasks={tasksDone} />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
