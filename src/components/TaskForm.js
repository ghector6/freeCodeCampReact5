import React from 'react';

function TaskForm(props) {
  return (
      <form className="task-form">
        <input
          className="input-task"
          type="text"
          placeholder="Add a task"
          name="text"
        />
        <button className='task-button'>
          Add a Task
        </button>

    </form>

  )
}

export TaskForm;
