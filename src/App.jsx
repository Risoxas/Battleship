import { useState, useEffect } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
  const [board, setBoard] = useState(Array(10 * 10).fill(0))

  const handleClick = (position) => {
    let newArray = [...board]
    newArray[position] = 1
    setBoard(newArray)
  }
  return (
    <div className='bg-secondary'>
      <Board board={board} handleClick={handleClick} />
    </div>
  )
}

export default App
