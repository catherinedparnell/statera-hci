const Button = ({ onClick, children }) => {
  return (
    <button className="hover:text-white uppercase font-thin hover:bg-orange outline outline-orange text-orange h-28 w-28 mx-4" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;