import './App.css';
import {useState} from "react"

function computeSomeNumber(){
  console.log("calculation")
  return Math.trunc(Math.random() * 10)
}

function App() {
  const [count, setCount] = useState(() => computeSomeNumber())
  const [state, setState] = useState({
    title: "hmmm..",
    date: Date.now(),

  })
  return (
    <div>
      <div>{count}</div>
      hello!
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <button onClick={() => setState(prev => ({...prev, title: "new"}))}>Change TITLE</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
