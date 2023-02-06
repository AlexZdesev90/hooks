import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
    // const [renderCount, setRenderCount] = useState(0);
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
    const prevValue = useRef("");

    const renderCount = useRef(0)
    useEffect(() => {
        renderCount.current++
    })

    useEffect(() => {
        prevValue.current = value
    }, [value])
    
        return (
            <div>
                <div>{renderCount.current}</div>
                <div>{prevValue.current}</div>
                hello!
                <input value={value} onChange={(e) => setValue(e.target.value)} ref={inputRef}/>
                <button onClick={() => inputRef.current.focus()}>focus</button>
            </div>
        );
    }

    export default App;
