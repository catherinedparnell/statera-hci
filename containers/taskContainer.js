import Container from "./container"
import { useState } from "react"
import AddTask from '../components/addTask'
import Tasks from '../components/tasks'

const TaskContainer = ({ className, addingTask, setAddingTask }) => {
  const [numTasks, setNumTasks] = useState(0);

  const addTask = () => {
    setNumTasks(numTasks + 1)
    setAddingTask(false)
  }

  return (
    <Container className={className}>
      {
        addingTask 
          ? (
            <AddTask onClickAddTask={addTask} />
          )
          : (
            <Tasks numTasks={numTasks} />
          )
      }
    </Container>
  )
}

export default TaskContainer;