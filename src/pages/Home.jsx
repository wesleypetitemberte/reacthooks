import React, {useContext} from "react"

import HookUseState from "../components/HookUseState"
import HookUseReducer from "../components/HookUseReducer"
import HookUseEffect from "../components/HookUseEffect"
import HookUseContext from "../components/HookUseContext"
import HookUseRef from "../components/HookUseRef"

import { SomeContext } from "../components/HookUseContext"
import HookUseCallback from "../components/HookUseCallback"
import HookUseMemo from "../components/HookUseMemo"
import HookUseLayoutEffect from "../components/HookUseLayoutEffect"

export default function Home() {
    const {contextValue} = useContext(SomeContext)


    return (
        <>
            <hr />
            <h2>Home</h2>

            <HookUseState/>
            <HookUseReducer/>
            <HookUseEffect/>
            <HookUseContext/>
            <HookUseRef/>

            <p>Valor do contexto: {contextValue}</p>
            <hr />

            <HookUseCallback/>
            <HookUseMemo/>
            <HookUseLayoutEffect/>
        </>
    )
}