import React from 'react'
import { Button } from './components/ui/button'
import { Progress } from './components/ui/progress'
import RandomProgress from './components/progress-component'

const App = () => {



  return (
    <div className='h-screen w-screen flex items-center justify-center bg-slate-950'>
      <div className='w-1/2 flex gap-5 flex-col items-center'>
      <RandomProgress/>
      </div>
    </div>
  )
}

export default App