const Container = ({ children, className }) => {
  return (
    <div className={`${className} bg-white shadow-md p-6 m-2 rounded-md`}>
      {children}
    </div>
  )
}

export default Container;