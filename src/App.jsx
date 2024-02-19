import { useState } from 'react'
import './index.css'
import InputBox from './components/InputBox'

function App() {

  const [tasklist, setTasklist] = useState([])
  console.log(tasklist, "tasklist");
  return (
    <>
      <h1 className='font-semibold'>TO DO BOARD</h1>
      <InputBox tasklist={tasklist} setTasklist={setTasklist} />
      <div>
        {
          tasklist.map((task, index) =>
            <li key={index}>{task}</li>
          )
        }
      </div>
    </>
  )
}

export default App
