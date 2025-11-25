import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_DONE_TASK } from "../../Actions/actionsConstants";

const DoneTask = ({ task }) => {
  const dispatch = useDispatch();
  const handleDeleteTask = () => {
    dispatch({ type: DELETE_DONE_TASK, payload: task.id });
  };
  return (
    <div className="task done">
      <h2>{task?.name}</h2>
      <div className="buttons">
        <button onClick={() => handleDeleteTask()}>Delete</button>
      </div>
    </div>
  );
};

export default DoneTask;
