import React from "react";
import ToDoTask from "../ToDoTask/ToDoTask";
import DoneTask from "../DoneTask/DoneTask";
import { useSelector } from "react-redux";

const TodoTaskColumn = () => {
  const todoTasks = useSelector((state) => state.tasks.todoTasks);
  return (
    <div className="taskColumn">
      <h1>Todo</h1>
      <div className="tasks">
        {todoTasks.map((task) => (
          <ToDoTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoTaskColumn;
