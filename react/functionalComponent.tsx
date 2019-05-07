import React from 'react'

interface Task {
  title: string
}

interface TasksListProps {
  tasks: Task[]
}

const TasksList: React.FunctionComponent<TasksListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, i) => {
        return <li key={i}>{task.title}</li>
      })}
    </ul>
  )
}

const tasks = [{ title: "buy milk" }, { title: "do things" }]

export default () => (
  <div>
    <TasksList tasks={tasks} />
  </div>
)