import BalanceBar from "../components/balanceBar";
import Container from "./container"

const BarContainer = ({ className, setAddingTask }) => {
  return (
    <Container className={className} >
      <div>Bar Container</div>
      <BalanceBar />
      <button onClick={() => setAddingTask(true)}>Add Task View</button>
    </Container>
  )
}

export default BarContainer;