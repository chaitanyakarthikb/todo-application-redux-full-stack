import React, { useState } from "react";
import "./InputBlock.css";
import { useDispatch } from "react-redux";
import { ADD_TASK, DELETE_DOING_TASK } from "../../Actions/actionsConstants";

const InputBlock = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleAddTask = () => {
    let task = {
      id: crypto.randomUUID(),
      name: inputValue,
    };
    dispatch({ type: ADD_TASK, payload: task });
    setInputValue("");
  };
  return (
    <div>
      <div className="input">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Enter your task"
        />
        <button onClick={() => handleAddTask()}>Add Task</button>
      </div>
    </div>
  );
};

export default InputBlock;
