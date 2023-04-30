import ListTask from "@/components/ListTask";
import { useTask } from "@/hooks/useTasks";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";

const Dashboard = () => {
  const { tasks } = useTask();
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
        <ListTask
          title="To do"
          tasks={tasks.filter((task) => task.status === "toDo")}
        />
        <ListTask
          title="Doing"
          tasks={tasks.filter((task) => task.status === "doing")}
        />
        <ListTask
          title="Done"
          tasks={tasks.filter((task) => task.status === "done")}
        />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
