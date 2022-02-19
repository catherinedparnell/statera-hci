const Tasks = ({ numTasks }) => {
  return (
    <div>
      <div className="uppercase text-6xl font-thin">Good Morning!</div>
      <div className="text-xl py-2">You have {numTasks} tasks today.</div>
    </div>
  )
}

export default Tasks;