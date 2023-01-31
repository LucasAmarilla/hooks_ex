import './App.css';
import { useState } from 'react';

function App() {
  const [x, setX] = useState(0);

  function inc(){
    setX(x+1)
  }
  
  function dec(){
    setX(x-1)
  }

  return (
    <div className="container">
    <h1>{x}</h1>
    <button onClick={dec}>-</button>
    <button onClick={inc}>+</button>

  </div>
  )
}

export default App;
