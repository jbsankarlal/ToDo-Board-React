import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {

  const [tasklist, setTasklist] = useState([])
  return (
    <>
      <h1>TO DO BOARD</h1>
      <InputBox tasklist={tasklist} setTasklist={setTasklist} />
    </>
  )
}

export default App
