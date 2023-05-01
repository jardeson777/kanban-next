import { useTask } from "@/hooks/useTasks";
import { Task, TaskUtil } from "@/module/Task";
import { Box, Card, Text } from "@chakra-ui/react";
import CardTask from "../CardTask";

type ListTaskProps = {
  title: string;
  tasks: Task[];
};

const ListTask = ({ title, tasks }: ListTaskProps) => {
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
      <Card width="20vw" minWidth="200px" padding="10px" height="70vh">
        {tasks.map((task, index) => {
          if (task) return <CardTask key={task.id} data={task} index={index} />;
        })}
      </Card>
    </Box>
  );
};

export default ListTask;
