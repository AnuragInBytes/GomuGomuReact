import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [length, setLength] = useState(8);

  const genPassword = useCallback(() => {
    let pass = "";
    let char = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*";
    for(let i = 0; i<length ; i++){

      char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
      
      setPassword(pass);
    }
  }, [length, charAllowed, numAllowed, setPassword]);

  useEffect(() => {
    genPassword()
  }, [length, numAllowed, charAllowed, genPassword])

  const passRef = useRef(null);

  const copyFun = () => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);
    alert('success')
  }

  return (
    <>
      <div className='w-full h-screen bg-slate-700 flex justify-center items-center flex-col text-white' id="container">
        <h1 className='text-6xl w-2/3 text-center font-bold font-mono bg-gray-600 px-6 py-4 rounded-full mb-10'>Random Password Generator</h1>

        <div className='bg-gray-600 w-2/3 h-auto text-white flex flex-col justify-center items-center rounded-full' id="page">
          <div className='mt-5' id='line-1'>
            <input className='outline-none px-5 py-4 text-2xl rounded-l-full text-slate-600' ref={passRef} placeholder='Password' readOnly value={password} type="text" />
            <button className='px-5 py-4 text-2xl rounded-r-full bg-slate-700 hover:bg-slate-900 font-bold ' onClick={copyFun} id="copy">Copy</button>
          </div>

          <div className='w-full flex justify-evenly align-middle py-5 mt-4' id="line-2">
            <div className='align-middle' id="length-field">
              <input min={5} max={25} value={length} onChange={(e)=> setLength(e.target.value)} type="range" name="length" id="length" className=' mr-2' />
              <label className='font-semibold text-2xl' htmlFor="length">Length: {length}</label>
            </div>

            <div id="char-field">
              <input className='mr-3 cursor-pointer' type="checkbox" defaultChecked={charAllowed} onChange={ () => { setCharAllowed( (prev) => !prev)}} name="char" id="char" />
              <label className='font-semibold text-2xl' htmlFor="char">@#$</label>
            </div>

            <div id="num-field">
              <input className='mr-3 cursor-pointer' defaultChecked={numAllowed} onChange={() => { setNumAllowed((prev) => !prev)}} type="checkbox" name="num" id="num" />
              <label className='font-semibold text-2xl' htmlFor="num">123</label>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
