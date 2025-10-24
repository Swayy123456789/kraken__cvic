import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prvni from './Pages/Prvni'
import Druhy from './Pages/Druhy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Prvni></Prvni>
    <Druhy/>
    </>
  )
}

export default App
