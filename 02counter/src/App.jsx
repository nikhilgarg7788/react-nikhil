import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// hooks is used in below command
let [counter, setCounter] = useState(15)

  // let counter = 15 

const addvalue = () => {   
  // counter = counter + 1
  setCounter(counter + 1)
}

const removeValue = () =>{
  // counter = counter - 1
  setCounter(counter - 1)
  if (counter <= 0) {
    setCounter(0)
    alert("Counter cannot be less than zero")
}
}

  return (
    <>
      <h1>nikhil and react</h1>
      <h2>counter value: {counter}</h2>
    <button
    onClick = {addvalue}
    >add value</button>
    <br />
    <button
    onClick = {removeValue}
    >remove value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
