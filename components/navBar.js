const NavBar = ({ setAddingTask }) => {
  return (
    <div className="bg-white shadow-md h-14 p-4">
      <button onClick={() => setAddingTask(false)}>STATERA</button>
    </div>
  )
}

export default NavBar;