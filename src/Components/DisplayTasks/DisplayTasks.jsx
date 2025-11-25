import React from "react";
import "./DisplayTasks.css";
import TaskColumn from "../TaskColumn/TaskColumn";

const DisplayTasks = () => {
  return (
    <div className="grid-column-three">
      <TaskColumn taskType={"To-do"} />
      <TaskColumn taskType={"Doing"} />
      <TaskColumn taskType={"Done"} />
    </div>
  );
};

export default DisplayTasks;
