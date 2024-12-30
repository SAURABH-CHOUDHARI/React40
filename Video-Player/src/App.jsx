import React, { useState, useRef, useEffect } from 'react';
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";


const App = () => {
  const videoRef = useRef(null);
  const videoRef1 = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const timeUpdateHandler = () => {
      setCurrentTime(video.currentTime);
    };

    const loadedMetadataHandler = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', timeUpdateHandler);
    video.addEventListener('loadedmetadata', loadedMetadataHandler);

    return () => {
      video.removeEventListener('timeupdate', timeUpdateHandler);
      video.removeEventListener('loadedmetadata', loadedMetadataHandler);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      videoRef1.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      videoRef1.current.pause();
      setIsPlaying(false);
    }
  };
  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value)
    setCurrentTime(newProgress)
    videoRef.current.currentTime = newProgress ;
    videoRef1.current.currentTime = newProgress ;
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };

  const handlePlaybackRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    setPlaybackRate(newRate);
    videoRef.current.playbackRate = newRate;
    videoRef1.current.playbackRate = newRate;
  };

  const skipTime = (seconds) => {
    videoRef.current.currentTime += seconds;
    videoRef1.current.currentTime += seconds;
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden bg-black">
      <video
            ref={videoRef1}
            src="src/assets/savarkar.mp4"
            className="w-screen h-screen rounded-lg shadow-lg absolute opacity-20"
          />
      <div className="max-w-4xl w-full p-4 group hover:scale-110 duration-200 ">
        <div className="relative">
          <video
            ref={videoRef}
            src="src/assets/savarkar.mp4"
            className="w-full rounded-lg shadow-lg"
          />

          <div className=" absolute bottom-0 w-full flex flex-col bg-black/50 justify-between  group-hover:opacity-100 opacity-0 duration-500">
            <input type="range"min='0' max={duration} step='0.1'value={currentTime} onChange={handleProgressChange} className='accent-white'/>
            <div className="flex items-center w-full  justify-between ">
              <button
                onClick={togglePlay}
                className="px-4 mx-2  text-white rounded  transition-colors"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>


              <div className="flex items-center gap-4">
                <button
                  onClick={() => skipTime(-10)}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  « 10s
                </button>


                <button
                  onClick={() => skipTime(10)}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  10s »
                </button>
              </div>


              <div className="flex items-center gap-1">
                <span className="text-white w-20">Volume:</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="accent-white"
                />
              </div>
                <div className="flex items-center gap-1">
                  <span className="text-white w-20 ">Speed:</span>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={playbackRate}
                    onChange={handlePlaybackRateChange}
                    className="accent-white"
                  />
                </div>
              <span className="text-white">{playbackRate}x</span>
              <span className="text-white mr-2">{formatTime(currentTime)} / {formatTime(duration)}</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;