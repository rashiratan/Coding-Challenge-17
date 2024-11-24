import { useState } from 'react'
import Gallery from './components/Gallery.jsx'
import './App.css'

function App() {
  const [tours, setTours] = useState([]); //global state required in multiple components
  const [visibleTours, setVisibleTours] = useState({}); //global state required in multiple components

  return (
      <div>
        <Gallery 
        tours = {tours}
        setTours = {setTours}
        visibleTours = {visibleTours}
        setVisibleTours = {setVisibleTours} //passing required states as props
        />
      </div>
  )
}

export default App;
