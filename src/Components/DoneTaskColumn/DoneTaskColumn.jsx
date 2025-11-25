import React from "react";
import DoneTask from "../DoneTask/DoneTask";
import { useSelector } from "react-redux";

const DoneTaskColumn = () => {
  const doneTasks = useSelector((state) => state.tasks.doneTasks);
  return (
    <div className="taskColumn">
      <h1>Done</h1>
      <div className="tasks">
        {doneTasks.map((task) => (
          <DoneTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default DoneTaskColumn;
