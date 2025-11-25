import React from "react";
import "./Task.css";

const Task = ({ taskType }) => {
  const getButtonName = (taskType) => {
    if (taskType === "To-Do") {
      return "In-Progress";
    } else if (taskType === "Doing") {
      return "Done";
    }
    return "XYZ";
  };
  return (
    <div className="task">
      <h2>This is my Task Component</h2>
      <div className="buttons">
        <button>{getButtonName()}</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Task;
