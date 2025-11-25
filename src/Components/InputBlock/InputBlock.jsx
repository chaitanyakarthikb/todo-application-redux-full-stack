import React from "react";
import "./InputBlock.css";

const InputBlock = () => {
  return (
    <div>
      <div className="input">
        <input type="text" placeholder="Enter your task" />
        <button>Add Task</button>
      </div>
    </div>
  );
};

export default InputBlock;
