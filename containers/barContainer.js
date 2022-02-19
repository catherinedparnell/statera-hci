import BalanceBar from "../components/balanceBar";
import Container from "./container"

const BarContainer = ({ className }) => {
  return (
    <Container className={className} >
      <div>Bar Container</div>
      <BalanceBar />
    </Container>
  )
}

export default BarContainer;