import Container from "./container"

const TaskContainer = ({ className, addingTask, setAddingTask }) => {
  return (
    <Container className={className}>
      <div>Task Container</div>
      {
        addingTask ? <div>Adding task</div> : <button onClick={() => setAddingTask(true)}>Add Task View</button>
      }
    </Container>
  )
}

export default TaskContainer;