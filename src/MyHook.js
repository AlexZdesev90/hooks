import React, {useEffect, useState} from "react"

function useLogger(value) {
    useEffect(() => {
        console.log("value changed " + value)
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => setValue("")

    return {
        bind: { value, onChange },
        value,
        clear
}
}

function App() {

    const input = useInput("")
    // const [name, setName] = useState("");
    // // const [lastName, setLastName] = useState("");

    // const changeName = (e) => {
    //     setName(e.target.value);
    // }

    useLogger(input.value)
    // const changeLastName = (e) => {
    //     setLastName(e.target.value);
    // }
        return (
                <div>
                    {/* <input type="text" value={input.value} onChange={input.onChange}/> */}
                    <input type="text" {...input.bind}/>
                    {/* <input type="text" value={lastName} onChange={changeLastName}/> */}
                    <h1>{input.value}</h1>
                    <button onClick={input.clear}>clean</button>
                </div>
        );
    }

    export default App;