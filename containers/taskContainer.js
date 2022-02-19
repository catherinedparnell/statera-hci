import Container from "./container"

const TaskContainer = ({ className, addingTask }) => {
  return (
    <Container className={className}>
      <div>Task Container</div>
      {
        addingTask ? <div>Adding task</div> : null
      }
    </Container>
  )
}

export default TaskContainer;