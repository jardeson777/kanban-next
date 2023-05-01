import { useTask } from "@/hooks/useTasks";
import { StatusTask, Task } from "@/module/Task";
import { Box, Card, Heading, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useDrag, useDrop, XYCoord } from "react-dnd";

type CardTaskProps = {
  data: Task;
  index: number;
};

const CardTask = ({ data, index }: CardTaskProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { moveTaskPosition, changeStatus } = useTask();

  const { id, description, title, status } = data;

  const [collected, refDrag] = useDrag(() => ({
    type: "CardTask",
    item: { index, data },
  }));

  const [collectedProps, refDrop] = useDrop(() => ({
    accept: ["CardTask"],
    hover(item: { index: number; data: Task }, monitor) {
      if (!cardRef.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = cardRef.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      if (status !== item.data.status) {
        return;
      }

      moveTaskPosition(hoverIndex, dragIndex, status);

      item.index = hoverIndex;
    },
  }));

  const selectBackground = () => {
    if (status === "toDo") {
      return "blue.100";
    }

    if (status === "doing") {
      return "yellow.100";
    }

    return "green.100";
  };

  refDrag(cardRef);
  refDrop(cardRef);

  return (
    <Card
      width="100%"
      minHeight="100px"
      variant="filled"
      background={selectBackground()}
      padding={3}
      marginBottom="10px"
      ref={cardRef}
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
