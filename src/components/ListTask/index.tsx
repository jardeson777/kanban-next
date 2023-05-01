import { useTask } from "@/hooks/useTasks";
import { StatusTask, Task, TaskUtil } from "@/module/Task";
import { Box, Card, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import CardMarking from "../CardMarking";
import CardTask from "../CardTask";

type ListTaskProps = {
  status: StatusTask;
  tasks: Task[];
};

const ListTask = ({ status, tasks }: ListTaskProps) => {
  const listTaskRef = useRef<HTMLDivElement>(null);
  const { changeStatus } = useTask();
  const [canDrop, setCanDrop] = useState(false);

  const [collected, refDrag] = useDrag(() => ({
    type: "ListTask",
    item: "",
  }));

  const [collectedProps, refDrop] = useDrop(() => ({
    accept: ["CardTask"],
    drop(item: { index: number; data: Task }, monitor) {
      if (status !== item.data.status) {
        changeStatus(item.data, status);
        setCanDrop(false);
        return;
      }
    },

    hover(item: { index: number; data: Task }, monitor) {
      if (item.data.status === status) {
        return;
      }
      setCanDrop(true);

      setTimeout(() => setCanDrop(false), 1500);
    },
  }));

  const createTitle = () => {
    if (status === "toDo") return "To do";
    if (status === "doing") return "Doing";
    return "Done";
  };

  refDrag(listTaskRef);
  refDrop(listTaskRef);

  return (
    <Box>
      <Text
        as="h2"
        color="white"
        fontSize="18px"
        fontWeight="medium"
        marginBottom={3}
      >
        {createTitle()}
      </Text>
      <Card maxHeight="70vh" overflowY="auto" overflowX="hidden">
        <Card
          width="20vw"
          minWidth="200px"
          padding="10px"
          height="70vh"
          ref={listTaskRef}
        >
          {tasks.map((task, index) => {
            if (task)
              return <CardTask key={task.id} data={task} index={index} />;
          })}
          {canDrop ? <CardMarking /> : null}
        </Card>
      </Card>
    </Box>
  );
};

export default ListTask;
