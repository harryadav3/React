import React from 'react'

import lpuLogo from '../assets/abdd.jpeg'; // Import the LPU logo image
const Question7 = () => {
  return (
    <div>Question7

        <LPULogo />
    </div>
  )
}

const LPULogo = () => {
  return (
    <div>
      <img src={lpuLogo} alt="LPU Logo" className="w-32 h-32" />
    </div>
  );
};

export default Question7