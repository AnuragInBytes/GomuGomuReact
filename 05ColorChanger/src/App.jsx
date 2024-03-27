import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('gray')

  return (
    <>
      <div style={{backgroundColor: color}} className='w-full h-screen flex justify-center items-center ' id="wall">
        <div className='w-4/5 h-20 bg-black rounded-3xl text-white flex justify-between px-10 py-3 font-bold' id="palet">
          <button onClick={ () => setColor('#ED4545')} className='bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 px-5 rounded-full text-xl'>Luffy</button>
          <button onClick={ () => setColor('#49DD86')} className='bg-green-400 hover:bg-green-500 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 px-5 rounded-full text-xl'>Zoro</button>
          <button onClick={ () => setColor('#F9923E')} className='bg-orange-400 hover:bg-orange-500 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 px-5 rounded-full text-xl'>Nami</button>
          <button onClick={ () => setColor('#40661B')} className='bg-lime-800 hover:bg-lime-900 active:bg-lime-950 focus:outline-none focus:ring-2 focus:ring-lime-600 px-5 rounded-full text-xl'>Ussop</button>
          <button onClick={ () => setColor('#FABE24')} className='bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 px-5 rounded-full text-xl'>Sanji</button>
          <button onClick={ () => setColor('#6B21A8')} className='bg-purple-700 hover:bg-purple-800 active:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 px-5 rounded-full text-xl'>Robin</button>
          <button onClick={ () => setColor('#F8A5A7')} className='bg-red-300 hover:bg-red-400 active:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-100 px-5 rounded-full text-xl'>Chopper</button>
          <button onClick={ () => setColor('#3B82F6')} className='bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 px-5 rounded-full text-xl'>Franky</button>
          <button onClick={ () => setColor('#9AA4B1')} className='bg-gray-400 hover:bg-gray-500 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 px-5 rounded-full text-xl'>Brook</button>
        </div>
      </div>
    </>
  )
}

export default App
