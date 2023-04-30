import ListTask from "@/components/ListTask";
import { useTask } from "@/hooks/useTasks";
import { TaskUtil } from "@/module/Task";
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
          tasks={tasks.map((task, index) => {
            if (task.status === "toDo") {
              return { ...task, index };
            }
          })}
        />
        <ListTask
          title="Doing"
          tasks={tasks.map((task, index) => {
            if (task.status === "doing") {
              return { ...task, index };
            }
          })}
        />
        <ListTask
          title="Done"
          tasks={tasks.map((task, index) => {
            if (task.status === "done") {
              return { ...task, index };
            }
          })}
        />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
