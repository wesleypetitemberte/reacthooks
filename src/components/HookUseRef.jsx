import React, {useState, useRef, useEffect} from "react"

//Ele é muito semelhante ao useState porém não atualiza o componente inteiro e é um objeto e seu valor é acessado através do current.

export default function HookUseRef() {
    const numberRef = useRef(0)
    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    return (
        <section>
            <h3>HookUseRef</h3>

            <p>O componente renderizou: {numberRef.current} vezes.</p>
            
            <p>Contador A: {counterA}</p>
            <button onClick={()=> setCounterA(counterA + 1)}>Enviar</button>

            <p>Contador B: {counterB}</p>
            <button onClick={()=> setCounterB(counterB + 1)}>Enviar</button>
        </section>
    )
}