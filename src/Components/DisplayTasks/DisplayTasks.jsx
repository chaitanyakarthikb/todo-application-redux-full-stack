import React from "react";
import "./DisplayTasks.css";
import TodoTaskColumn from "../TodoTaskColumn/TodoTaskColumn";
import DoingTaskColumn from "../DoingTaskColumn/DoingTaskColumn";
import DoneTaskColumn from "../DoneTaskColumn/DoneTaskColumn";

const DisplayTasks = () => {
  return (
    <div className="grid-column-three">
      <TodoTaskColumn />
      <DoingTaskColumn />
      <DoneTaskColumn />
    </div>
  );
};

export default DisplayTasks;
