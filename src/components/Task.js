import React from 'react';
import '../styles/Task.css'
import { AiFillLike } from "react-icons/ai";


function Task({ text, done }) {
  return (

    <div className={ done ? 'task-container done' : 'task-container'}>
      <div className="task-text">
        {text}
      </div>
      <div className="task-container-icon">
        <AiFillLike className="task-icon"/>
      </div>
    </div>
  )
}

export default Task;
