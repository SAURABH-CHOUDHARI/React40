import { useRef, useEffect, useState } from 'react'
import Key from './Components/Key'

const App = () => {
  const arr = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const [activeKey, setActiveKey] = useState(null)

  const audioRefs = {
    65: useRef(), 
    83: useRef(), 
    68: useRef(), 
    70: useRef(), 
    71: useRef(), 
    72: useRef(), 
    74: useRef(), 
    75: useRef(), 
    76: useRef() 
  }


  useEffect(() => {
    const handleKeyDown = (e) => {
      const audio = audioRefs[e.keyCode]?.current
      if (!audio) return
      
      setActiveKey(String.fromCharCode(e.keyCode))
      audio.currentTime = 0
      audio.play()
      
      setTimeout(() => setActiveKey(null), 100)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div 
    className='h-screen w-screen lg:flex md:grid-cols-4 sm:grid-cols-4 grid grid-cols-3 gap-6 bg-black justify-center items-center p-10'
    >
      {arr.map((elem, idx) => (
        <Key key={idx} elem={elem} isActive={elem === activeKey} />
      ))}
      

      <audio ref={audioRefs[65]} src="src/assets/sounds/boom.wav" />
      <audio ref={audioRefs[83]} src="src/assets/sounds/clap.wav" />
      <audio ref={audioRefs[68]} src="src/assets/sounds/hihat.wav"/>
      <audio ref={audioRefs[70]} src="src/assets/sounds/kick.wav" />
      <audio ref={audioRefs[71]} src="src/assets/sounds/openhat.wav" />
      <audio ref={audioRefs[72]} src="src/assets/sounds/ride.wav" />
      <audio ref={audioRefs[74]} src="src/assets/sounds/snare.wav" />
      <audio ref={audioRefs[75]} src="src/assets/sounds/tink.wav" />
      <audio ref={audioRefs[76]} src="src/assets/sounds/tom.wav" />

    </div>
  )
}


export default App