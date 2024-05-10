import React, { useState, useEffect } from "react";

const Question9 = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    useEffect(() => {
      if (count > 5) {
        setMessage('Count is greater than 5!');
      } else {
        setMessage('');
      }
    }, [count]);
  
    return (
      <div>
        <h2>useEffect Example</h2>
        <p>Count: {count}</p>
        <p>{message}</p>
      </div>
    );};

export default Question9;
