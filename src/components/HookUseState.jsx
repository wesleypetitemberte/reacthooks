import React, { useState } from "react"

//Altera o valor de uma variavel através do seters e disponibiliza o valor no geters e com isso faz renderizar o componente.

export default function HookUseState() {
    const [name, setName] = useState("Wesley")
    const [age, setAge] = useState(0)

    return (
        <section>
            <h3>Hook useState</h3>

            <button onClick={() => setName("Outro nome")}>Trocar Nome</button>
            <p>{name}</p>

            <form>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            </form>
            <p>Você tem {age} anos</p>

            <hr />
        </section>
    )
}