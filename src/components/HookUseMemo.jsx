import React, {useState, useMemo} from "react"

//Guarda a referência de um objeto, melhora a performance.

export default function HookUseMemo() {
    const [number, setNumber] = useState(0)

    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200"]
    }, [])

    return (
        <section>
            <h3>HookUseMemo</h3>

            <input type="text" onChange={(e)=> setNumber(e.target.value)} value={number}/>
            
            {
                premiumNumbers.includes(number) ? <p>Acertou o número</p> : ""
            }
            <hr />
        </section>
    )
}