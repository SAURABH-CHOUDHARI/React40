import  { useState } from 'react'

const Key = ({ elem, isActive }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    
    const handleClick = () => {
        const keyCode = elem.charCodeAt(0)
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
        if (!audio) return
        
        setIsPlaying(true)
        audio.currentTime = 0
        audio.play()
        
        setTimeout(() => setIsPlaying(false), 100)
    }

    return (
        <div 
            onClick={handleClick}
            className={`px-8 py-6 bg-black border-white text-white border-2 rounded-md text-3xl duration-700 cursor-pointer text-center
                ${(isPlaying || isActive) ? 'scale-125 bg-white shadow-3xl' : ''}`}
        >
            {elem}
        </div>
    )
}

export default Key