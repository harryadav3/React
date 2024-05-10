import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/audio.mp3';

const Question13 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="p-4 flex justify-center items-center h-screen">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Question13