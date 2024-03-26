import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  let myObj = {
    username: "sanji",
    age: "23"
  }
  let myArr = [5, 4, 9, 9]

  return (
    <>
      <h1 className='bg-green-700 font-bold px-6 py-3 rounded-full mb-5'>God D Ussop</h1>

      <h4 className='bg-blue-400 rounded-full px-4 py-3 font-bold text-xl mb-5'>Understanding props through cards</h4>

      <div className='flex gap-10' id="cards">
        <Card username = "Nami" btn = "$$ Money $$" img = "https://qph.cf2.quoracdn.net/main-qimg-cfb83d19fb9211e2129bc5000ccb3fd7-lq" prop1 = {myObj} prop2 = {myArr} />
        <Card username = "Nico Robin" btn = "archaeology" img = "https://redeardente.com/wp-content/uploads/2023/04/Nico-Robin.webp"/>
      </div>
    </>
  )
}

export default App
