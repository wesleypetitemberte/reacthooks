import React, { createContext } from "react"

//Utilizado para consumir um contexto e com a possibilidade de compatilhar os dados com os demais componentes.

export const SomeContext = createContext()

export default function HookUseContext({children}) {
    const contextValue = "Texto de teste"

    return (
        <main>
            <SomeContext.Provider value={{contextValue}}>
                {children}
            </SomeContext.Provider>
        </main>
    )
}
