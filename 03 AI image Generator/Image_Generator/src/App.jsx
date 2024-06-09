import { useState } from 'react'
import './App.css'
import ImageGenerator from './Components/ImageGenerator/ImageGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ImageGenerator></ImageGenerator>
    </>
  )
}

export default App
