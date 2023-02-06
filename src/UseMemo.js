import './App.css';
import { useState, useEffect, useMemo } from 'react';

function complexCompute(num) {
    let i = 0;
    while(i < 1000000000) {
        i++
    }
    return num * 2
}

function App() {

    const [number, setNumber] = useState(42)
    const [color, setColored] = useState(false)

    const styles = useMemo(() => ({
        color : color ? "red" : "black",
    }), [color])   

    const computed = useMemo(() => complexCompute(number), [number])

    useEffect(() => {
        console.log("styles changed")
    }, [styles])

        return (
            <div>
                <h1 style={styles}>{computed}</h1>
                <button onClick={() => setNumber(prev => prev+1)}>+</button>
                <button onClick={() => setNumber(prev => prev-1)}>-</button>
                <button onClick={() => setColored(prev => !prev)}>change colored</button>
            </div>
        );
    }

    export default App;