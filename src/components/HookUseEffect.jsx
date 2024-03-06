import React, {useState, useEffect} from "react"

//Utilizado para executar algum efeito ou função recebendo como gatilho algum valor no array de dependencias, para caso essa variavel seja alterada o useEffect é executado, caso não tenha nada no array [] é executado apenas na primeira vez ao carregar o componente.

export default function HookUseEffect() {
    const [number, setNumber] = useState(0)
    const [anotherNumber, setAnotherNumber] = useState(0)
    
    useEffect(() => {
        setAnotherNumber(anotherNumber + 1)
    }, [number])

    return (
        <section>
            <h3>HookUseEffect</h3>

            <button onClick={() => setNumber(number + 1)}>Trocar Número</button>
            <p>Número: {number}</p>
            <p>Outro Número: {anotherNumber}</p>

            <hr />
        </section>
    )
}