import React, { useState, useEffect } from "react";

const Question14 = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Stopwatch</h2>
      <div className="text-4xl mb-4">{formatTime(time)}</div>
      <div>
        <button
          onClick={handleStart}
          disabled={isRunning}
          className="bg-green-500 text-white py-2 px-4 rounded mr-2 disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={handlePause}
          disabled={!isRunning}
          className="bg-yellow-500 text-white py-2 px-4 rounded mr-2 disabled:opacity-50"
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          disabled={!isRunning && time === 0}
          className="bg-red-500 text-white py-2 px-4 rounded disabled:opacity-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Question14;
