import React from "react"
import { useAlert} from "./Alert/AlertContext"
// import { useAlertToggle } from "./Alert/AlertContext"

export default function Main() {
    // const toggle = useAlertToggle()
    // const {toggle} = useAlert()
    const {show} = useAlert()
    return (
        <>
        <h1>Привет в примере контекст</h1>
        {/* <button onClick={() => toggle()}>Показать алерт</button> */}
        <button onClick={() => show("From main")}>Показать алерт</button>
        </>
    )
}