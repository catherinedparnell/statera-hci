import Container from "./container"

const BotContainer = ({ expanded, setExpanded, className }) => {
  return (
    expanded ? (
      <Container className={className}>
        <button onClick={() => setExpanded(!expanded)}>Close</button>
        <div>
          Expanded Bot Container
        </div>
      </Container>
    ) : (
      <Container className={className}>
        <button onClick={() => setExpanded(!expanded)}>Open</button>
        <div>
            Bot Container
        </div>
      </Container>
    )   
  )
}

export default BotContainer;