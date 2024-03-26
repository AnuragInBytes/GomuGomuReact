import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)
  // let counter = 5;
  const addValue = () => {
    if(counter >= 15) alert('Max Gum Gum Power Acquired...');
    else{
      counter = counter + 1;
      setCounter(counter);
      console.log(counter);
    }
  }
  const removeValue = () => {
    if(counter <= 1){
      alert("Luffy's gum gum cannot go beyond 1...");
    }
    else{
      counter = counter - 1;
      console.log(counter)
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Gomu Gomu Pistol Counter : { counter } </h1>
      <button onClick={
        addValue
      }>Add : { counter } </button>
      <button onClick={
        removeValue
      }>Remove : { counter } </button>
    </>
  )
}

export default App
