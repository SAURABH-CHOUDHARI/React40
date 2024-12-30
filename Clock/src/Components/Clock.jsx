import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const AnalogClock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const seconds = date.getSeconds() * 6;
    const minutes = date.getMinutes() * 6 + seconds / 60;
    const hours = date.getHours() % 12 * 30 + minutes / 12;

    return (
        <div className="relative w-64 h-64 rounded-full border-4 border-current">
            <div
                className="absolute w-1 h-16 bg-current rounded-full origin-bottom"
                style={{ left: '50%', bottom: '50%', transform: `rotate(${hours}deg)` }}
            />
            <div
                className="absolute w-1 h-24 bg-current rounded-full origin-bottom"
                style={{ left: '50%', bottom: '50%', transform: `rotate(${minutes}deg)` }}
            />
            <div
                className="absolute w-0.5 h-28 bg-red-500 rounded-full origin-bottom"
                style={{ left: '50%', bottom: '50%', transform: `rotate(${seconds}deg)` }}
            />
            <div className="absolute w-3 h-3 bg-current rounded-full" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
        </div>
    );
};

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-6xl font-mono">
            {time.toLocaleTimeString()}
        </div>
    );
};

const Clock = () => {
    const [isAnalog, setIsAnalog] = useState(true);
    const [isDark, setIsDark] = useState(false);

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center gap-8 transition-colors duration-300 ${isDark ? 'dark bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div className="flex gap-4">
                <button
                    onClick={() => setIsAnalog(!isAnalog)}
                    className={`px-4 py-2 rounded-lg text-lg duration-300 transition-colors ${isDark ? 'bg-gray-100 text-gray-900 hover:bg-gray-300' : 'dark bg-slate-900 text-white'}`}
                >
                    Switch to {isAnalog ? 'Digital' : 'Analog'}
                </button>
                <button
                    onClick={() => setIsDark(!isDark)}
                    className={`p-2 rounded-lg  duration-300 text-lg transition-colors ${isDark ? 'bg-gray-100 text-gray-900 hover:bg-gray-300' : 'dark bg-slate-900 text-white'}`}
                >
                    {isDark ? <Sun size={24} /> : <Moon size={24} />}
                </button>
            </div>
            {isAnalog ? <AnalogClock /> : <DigitalClock />}
        </div>
    );
};

export default Clock;