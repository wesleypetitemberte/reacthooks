import React, {useState, useCallback} from "react"

//Memoriza uma função fazendo não ser reconstruida toda vez que o componente é renderizado.

import List from "./List"

export default function HookUseCallback() {
    const [counter, setCounter] = useState(0)

    const getItemsFromDatabase = useCallback(()=> {
        return ["a", "b", "c"]
    }, [])

    return (
        <section>
            <h3>HookUseCallback</h3>

            <List getItems={getItemsFromDatabase}/>

            <button onClick={()=> setCounter(counter + 1)}>Alterar</button>
            <p>{counter}</p>
            <hr />
        </section>
    )
}