import BotContainer from '../containers/botContainer'
import TaskContainer from '../containers/taskContainer'
import BarContainer from '../containers/barContainer'
import { useState } from 'react'
import NavBar from './navBar'

const Home = () => {
  const [expanded, setExpanded] = useState(false);
  const [addingTask, setAddingTask] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <NavBar setAddingTask={setAddingTask} />
      {
        expanded 
          ? (
            <div className="flex flex-row h-full">
              <div className="flex flex-col w-full h-full">
                <TaskContainer className="h-full" addingTask={addingTask} setAddingTask={setAddingTask} />
                <BarContainer className="h-1/4" />
              </div>
              <BotContainer expanded className="w-1/4" setExpanded={setExpanded} />
            </div>
          ) 
          : (
            <div className="flex flex-col h-full">
              <TaskContainer className="h-full" addingTask={addingTask} setAddingTask={setAddingTask} />
              <div className="flex flex-row h-1/4">
                <BarContainer className="w-full"/>
                <BotContainer className="w-1/4" setExpanded={setExpanded} />
              </div>
            </div>
          )
      } 
    </div> 
  )
}

export default Home;