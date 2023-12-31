import { Box } from "@chakra-ui/react";
import TasksList from "./TaskList";

const TaskGrid = () => {
  return (
    <Box marginX={4} marginTop={10}>
      <TasksList />
    </Box>
  );
};

export default TaskGrid;
