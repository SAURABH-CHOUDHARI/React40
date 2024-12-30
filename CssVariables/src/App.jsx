import React from 'react'
import { useState } from 'react'

const App = () => {
  const [colorMeter, setColorMeter] = useState(0)
  const [padding, setPadding] = useState(10)
  const [color, setColor] = useState([100, 100, 100])
  const [blur, setBlur] = useState(0)

  const changePadding = (e) => {
    setPadding(e.target.value);
  }
  const changeColor = (e) => {
    setColorMeter(e.target.value)
    const maxValue = Math.min(255, e.target.value * 2.55);

    const color1 = Math.floor(Math.random() * maxValue);
    const color2 = Math.floor(Math.random() * maxValue);
    const color3 = Math.floor(Math.random() * maxValue);

    setColor([color1, color2, color3]);
  };
  const changeBlur = (e) => {
    setBlur(e.target.value);
  }


  return (
    <div className='h-screen w-full text-center bg-black flex text-white flex-col p-10 items-center'>

      <h1 className='text-zinc-100 text-4xl  w-[30rem]'>
        Update CSS variables with <span className='text-5xl text-teal-500'>React</span></h1>

      <div >
        <label className='flex items-center mt-5 text-xl font-medium' >
          <div className='flex ml-5'>
            <label htmlFor="padding">Padding : {padding}</label>
            <input type="range" value={padding} min='10' id='padding' className='ml-5 accent-slate-50'
              onChange={(e) => {
                changePadding(e)
              }}
            />
          </div>
          <div className='flex ml-5'>
            <label htmlFor="color">Color : </label>
            <input type="range" value={colorMeter} id='color' className='ml-5 accent-slate-50'
              onChange={(e) => {
                changeColor(e)
              }}
            />
          </div>
          <div className='flex ml-5'>
            <label htmlFor="Blur">Blur : {blur}</label>
            <input type="range" value={blur} max="10" id='Blur' className='ml-5  accent-slate-50'
              onChange={(e) => {
                changeBlur(e)
              }}
            />
          </div>
        </label>

      </div>

      <div
        className="h-3/4 w-full border-white border-2 mt-10 p-20 "
        style={{
          padding: `${padding}px`,
          backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        }}
      >

        <div className='h-full w-full bg-white'
          style={{ filter: `blur(${blur}px)` }}
        >
          <img src="https://images.unsplash.com/photo-1734192209674-e38b0eb4ff1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-top-left object-cover' />
        </div>
      </div>
    </div>
  )
}
export default App