import ListTask from "@/components/ListTask";
import { useTask } from "@/hooks/useTasks";
import { TaskUtil } from "@/module/Task";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";

const Dashboard = () => {
  const { tasksToDo, tasksDoing, tasksDone } = useTask();

  return (
    <Flex direction="column" height="auto" flex={1} as="section">
      <Header />

      <Flex justifyContent="space-between" paddingTop="50px">
        <ListTask status="toDo" tasks={tasksToDo} />
        <ListTask status="doing" tasks={tasksDoing} />
        <ListTask status="done" tasks={tasksDone} />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
