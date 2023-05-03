import { useTask } from "@/hooks/useTasks";
import { StatusTask } from "@/module/Task";
import { Button, Card, Heading, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type CardCreateTaskProps = {
  status: StatusTask;
};

type FormProps = {
  title: string;
  description: string;
};

const CardCreateTask = ({ status }: CardCreateTaskProps) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid },
  } = useForm<FormProps>();

  const { createTask } = useTask();

  const selectColor = (scale: "100" | "200") => {
    if (status === "toDo") {
      return `blue.${scale}`;
    }

    if (status === "doing") {
      return `yellow.${scale}`;
    }

    return `green.${scale}`;
  };

  const formHandle = (dataForm: FormProps) => {
    console.log(dataForm);
    createTask({ ...dataForm, status });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(formHandle)} autoComplete="off">
      <Card
        height="110px"
        border="2px"
        borderStyle="dashed"
        borderColor={selectColor("100")}
        padding="10px"
        gap="10px"
      >
        <Input
          placeholder="Title"
          border="0"
          fontSize="md"
          fontWeight="semibold"
          {...register("title", { required: true })}
        />
        <Input
          placeholder="Description"
          border="0"
          fontSize="small"
          {...register("description", { required: true })}
        />

        <Button
          fontSize="small"
          padding={1.5}
          background={selectColor("100")}
          _hover={{ backgroundColor: selectColor("200") }}
          type="submit"
          isDisabled={!isValid}
        >
          Criar
        </Button>
      </Card>
    </form>
  );
};

export default CardCreateTask;
