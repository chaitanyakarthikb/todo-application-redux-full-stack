import React from "react";
import { useDispatch } from "react-redux";
import {
  DELETE_TODO_TASK,
  MOVE_TODO_TO_IN_PROGRESS,
} from "../../Actions/actionsConstants";

const ToDoTask = ({ task }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: DELETE_TODO_TASK, payload: task.id });
  };
  const handleMoveItToProgress = () => {
    console.log("payload going to in progress is ", task.id);
    dispatch({ type: MOVE_TODO_TO_IN_PROGRESS, payload: task.id });
  };
  return (
    <div className="task todo">
      <h2>{task.name}</h2>
      <div className="buttons">
        <button onClick={() => handleMoveItToProgress()}>
          Move it to In Progress
        </button>
        <button onClick={() => handleClick()}>Delete</button>
      </div>
    </div>
  );
};

export default ToDoTask;
