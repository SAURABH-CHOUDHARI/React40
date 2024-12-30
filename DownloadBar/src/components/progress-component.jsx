import { useState, useEffect } from 'react';
import { Progress } from './ui/progress';
import { Button } from './ui/button';

const RandomProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {

    const completionTime = Math.random() * (7000 - 3000) + 3000;


    const progressIncrement = 100 / (completionTime / 100);

    const intervalId = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = Math.min(100, prevProgress + progressIncrement);

  
        if (newProgress >= 100) {
          clearInterval(intervalId);
          setIsComplete(true);
          return 100;
        }

        return newProgress;
      });
    }, 100);


    return () => clearInterval(intervalId);
  }, [isComplete]);

  return (
    <div className="w-full max-w-md mx-auto p-4 flex flex-col items-center border-2 border-l-zinc-400 rounded-2xl">
      <div className="w-full bg-gray-200 rounded-full h-4">
        <Progress value={progress} className="bg-zinc-400 h-4 rounded-full transition-all duration-100 ease-out">
        </Progress>
      </div>
      <div className="mt-2 text-center">
          <span className="text-zinc-300">{Math.round(progress)}%</span>
      </div>
      <Button variant="outline" className="w-20 active:scale-95 mt-5 text-xl" 
      onClick={() => {setIsComplete(!isComplete)
        setProgress(0)

      }}
      >Start</Button>
    </div>
  );
};

export default RandomProgress;
