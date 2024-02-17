import { useState } from "react"
import "./index.css"

const InputBox = ({ tasklist, setTasklist }) => {
    const [input, setInput] = useState("")
    console.log(input);

    const handleAddTask = (e) => {
        e.preventDefault();
        setTasklist([...tasklist, input]);
        setInput("");
    }
    return (

        <>
            <form action="">
                <input className="border rounded px-8" type="text" placeholder="Add a New Task" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="bg-violet-200" onClick={handleAddTask}>ADD</button>
            </form>
        </>
    )
}

export default InputBox