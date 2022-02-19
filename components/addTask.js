const AddTask = ({ onClickAddTask }) => {
  return (
    <div>
      <div>Adding task</div>
      <button onClick={onClickAddTask}>Add task</button>
    </div>
  )
}

export default AddTask;