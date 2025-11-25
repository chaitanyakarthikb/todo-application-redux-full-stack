import React from "react";
import InProgressTask from "../InProgressTask/InProgressTask";
import { useSelector } from "react-redux";

const DoingTaskColumn = () => {
  const doingTasks = useSelector((state) => state.tasks.doingTasks);
  return (
    <>
      <div className="taskColumn">
        <h1>In Progress</h1>
        <div className="tasks">
          {doingTasks.map((task) => (
            <InProgressTask key={task.id} task={task} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DoingTaskColumn;
