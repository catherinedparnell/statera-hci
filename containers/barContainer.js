import BalanceBar from "../components/balanceBar";
import Button from "../components/button";
import Container from "./container"

const BarContainer = ({ className, setAddingTask }) => {
  return (
    <Container className={`${className} flex flex-row justify-between items-center`} >
      <BalanceBar />
      <div id="buttons" className="flex flex-row justify-around h-1/2 items-center">
        <Button onClick={() => setAddingTask(true)}>
          Add Task
        </Button>
        <Button> 
          Add Friends
        </Button>
      </div>
      
    </Container>
  )
}

export default BarContainer;