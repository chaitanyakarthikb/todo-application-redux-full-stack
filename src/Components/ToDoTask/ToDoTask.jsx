import React from "react";

const ToDoTask = () => {
  const getButtonName = (taskType) => {
    if (taskType === "To-Do") {
      return "In-Progress";
    } else if (taskType === "Doing") {
      return "Done";
    }
    return "XYZ";
  };
  return (
    <div className="task todo">
      <h2>This is my Task Component</h2>
      <div className="buttons">
        <button>{getButtonName("To-Do")}</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ToDoTask;
