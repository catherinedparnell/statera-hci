const BalanceBar = () => {
  return (
    <div className="w-1/2">
      <div className="uppercase font-extralight pb-2 text-xl">Balance Bar</div>
      <div className="flex flex-row h-32">
        <div className="bg-navy h-full w-full" />
        <div className="bg-orange h-full w-full" />
      </div>
    </div>
  )
}

export default BalanceBar;