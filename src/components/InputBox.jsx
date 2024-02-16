import { useState } from "react"

const InputBox = ({ tasklist, setTasklist }) => {
    const [input, setInput] = useState("")
    console.log(input);

    const handleAddTask = (e) => {
        e.preventDefault();

    }
    return (

        <>
            <form action="">
                <input className="border rounded px-8" type="text" placeholder="Add a New Task" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleAddTask}>ADD</button>
            </form>
        </>
    )
}

export default InputBox