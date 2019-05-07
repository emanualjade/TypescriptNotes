import React from "react"

interface Task {
  title: string
}

interface TasksListProps {
  initialTasks: Task[]
}

interface TasksListState {
  tasks: Task[]
}

class TasksList extends React.Component<TasksListProps, TasksListState> {
  constructor(props: TasksListProps) {
    super(props)
    this.state = {
      tasks: props.initialTasks
    }
  }

  onAddNewTaskClick = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {title: "New Task"}
      ]
    })
  }

  render() {
    const { tasks } = this.state
    return (
      <ul>
        {tasks.map((task, i) => {
          return <li key={i}>{task.title}</li>
        })}
        <button onClick={this.onAddNewTaskClick}>Add new task</button>
      </ul>
    )
  }
}

const tasks = [{ title: "buy milk" }, { title: "do things" }]

export default () => (
  <div>
    <TasksList initialTasks={tasks} />
  </div>
)
