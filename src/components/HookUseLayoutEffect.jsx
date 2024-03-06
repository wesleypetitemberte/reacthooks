import React, {useState, useEffect, useLayoutEffect} from "react"

//Igual o useEffect porem executa após o componente ser renderizado, ou seja, é sincrono.

export default function HookUseLayoutEffect() {
    const [name, setName] = useState("Algum nome")

    useEffect(() => {
        console.log("2")
        setName("Mudou de novo")
    }, [])

    useLayoutEffect(() => {
        console.log("1")
        setName("Outro nome")
    }, [])

    return (
        <section>
            <h3>HookUseLayoutEffect</h3>

            <p>{name}</p>
            <hr />
        </section>
    )
}
