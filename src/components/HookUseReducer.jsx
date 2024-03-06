import React, {useReducer, useState} from "react"

//Mesma função do useState porém executa uma função na hora da alteração do valor.

export default function HookUseReducer() {
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    const initialTasks = [
        {id: 1, text: "teste1"},
        {id: 2, text: "teste2"},
    ]

    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                }

                setTaskText("")

                return [...state, newTask]
        
            case "DELETE":
                return state.filter((task) => task.id != action.id)

            default:
                return state
        }
    }

    const [taskText, setTaskText] = useState("")
    const [tasks, dispathTasks] = useReducer(taskReducer, initialTasks)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispathTasks({type: "ADD"})
    }

    const removeTask = (id) => {
        dispathTasks({type: "DELETE", id: id})
    }

    return (
        <section>
            {/* Básico em Reducer */}
            <h3>HookUseReducer</h3>

            <p>Número: {number}</p>
            <button onClick={dispatch}>Trocar Número</button>

            {/* Avançado em Reducer */}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=> setTaskText(e.target.value)} value={taskText}/>
                <button type="submit">Enviar</button>
            </form>

            <h4>Tarefas:</h4>
            <ul>
                {tasks &&
                    tasks.map((task) => (
                        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
                    ))
                }
            </ul>
            <hr />
        </section>
    )
}