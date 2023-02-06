import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [type, setType] = useState("users");
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({
        x: 0,
        y: 0,
        // xx: 0,
        // yy: 0,

    });

    const mouseMoveHandlier = (e) => {
            setPos({
                x: e.clientX,
                y: e.clientY,
                // xx: e.offsetX,
                // yx: e.offsetY,
            })
        }
    

        useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/${type}`)
                .then(response => response.json())
                .then(json => setData(json))
        }, [type])
        useEffect(() => {
            window.addEventListener("mousemove", mouseMoveHandlier)
            return () => {
                window.removeEventListener("mousemove", mouseMoveHandlier)
            }
        }, [type])

        return (
            <div>
                <button onClick={() => setType("users")}>Users</button>
                <button onClick={() => setType("todos")}>Todos</button>
                <button onClick={() => setType("posts")}>Posts</button>
                <div>{type}</div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
                <pre>{JSON.stringify(pos, null, 2)}</pre>
                hello!
            </div>
        );
    }

    export default App;
