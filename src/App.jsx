import React, {useState} from 'react'
import CinefilosForm from './scripts/CinefilosForm'
import Cinefilos from './scripts/Cinefilos'
import { Container } from './styles/StyledComponent'

function App() {
  const [view, setView] = useState("cinefilosForm")
  const [values, setValues] = useState(null);

  const handleView = (page) =>{
    setView(page);
  };

  const handleFetchValues = (userInformation) =>{
    setValues(userInformation);
    setView("cinefilos");
  };

  return (
    <Container className='App' content ="evenly">
      {
        view ==="cinefilosForm" && (<CinefilosForm handleFetchValues={handleFetchValues} />)
      }
      {
        view === "cinefilos" && (<Cinefilos {...values}/>)
      }
    </Container>
  )
}

export default App
