import './App.css';
import { useState, useCallback } from 'react';
import ItemsList from './ItemsList';


function App() {

    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(2)


    const styles = {
        color: colored ? "red" : "black"
    }

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill("").map((_, i) =>  `Элемент ${i+1}`)
    }, [count])

        return (
            <div>
                <h1 style={styles}>колличество элементов {count}</h1>
                <button onClick={() => setCount(prev => prev+1)}>+</button>
                <button onClick={() => setColored(prev => !prev)}>color</button>

                <ItemsList getItems={generateItemsFromAPI}/>
            </div>
        );
    }

    export default App;