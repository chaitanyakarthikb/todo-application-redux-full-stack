import React from "react";
import "./TaskColumn.css";
import Task from "../Task/Task";
import ToDoTask from "../ToDoTask/ToDoTask";
import InProgressTask from "../InProgressTask/InProgressTask";
import DoneTask from "../DoneTask/DoneTask";
import { useSelector } from "react-redux";

const TaskColumn = ({ taskType }) => {
  const getHeading = (taskType) => {
    if (taskType === "To-do") {
      return "To-Do";
    } else if (taskType === "Doing") {
      return "Doing";
    }
    return "Done";
  };
  let heading = getHeading(taskType);
  const dataFromTheStore = useSelector((state) => {
    console.log("==============state==============", state);
  });
  return (
    <div className="taskColumn">
      <h1>{heading}</h1>
      {heading === "To-Do" ? (
        <ToDoTask />
      ) : heading === "Doing" ? (
        <InProgressTask />
      ) : (
        <DoneTask />
      )}
    </div>
  );
};

export default TaskColumn;
