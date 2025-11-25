import React from "react";
import { useDispatch } from "react-redux";
import {
  DELETE_DOING_TASK,
  MOVE_INPROGRESS_TO_DONE,
} from "../../Actions/actionsConstants";

const InProgressTask = ({ task }) => {
  const dispatch = useDispatch();
  const handleInProgressDeleteTask = () => {
    dispatch({ type: DELETE_DOING_TASK, payload: task.id });
  };
  const moveToDone = () => {
    dispatch({ type: MOVE_INPROGRESS_TO_DONE, payload: task });
  };
  return (
    <div className="task doing">
      <h2>{task?.name}</h2>
      <div className="buttons">
        <button onClick={() => moveToDone()}>Mark it Done</button>
        <button onClick={() => handleInProgressDeleteTask()}>Delete</button>
      </div>
    </div>
  );
};

export default InProgressTask;
