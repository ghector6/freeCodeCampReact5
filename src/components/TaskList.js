import React from 'react'
import TaskForm from './TaskForm'

function TaskList() {
  return (
    <>
      <TaskForm />
      <div className="task-list-container">
        Task list
      </div>
    </>
  )
}

export default TaskList
