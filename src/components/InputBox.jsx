import { useState } from "react"
import "../index.css"

const InputBox = ({ tasklist, setTasklist }) => {
    const [input1, setInput1] = useState("");
    const [input, setInput] = useState("");
    console.log(input);

    const handleAddTask = (e) => {
        e.preventDefault();
        setTasklist([...tasklist, input]);
        setInput("");
    }
    return (

        <>
            <form action="">
                <input className="border rounded px-2" type="text" placeholder="Enter task name" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="bg-red-500" onClick={handleAddTask}>ADD NEW TASK</button>
            </form>
        </>
    )
}

export default InputBox