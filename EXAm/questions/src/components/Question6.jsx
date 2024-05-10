import React, { useState , useReducer} from 'react';

const Question6 = () => {
  return (
    <div>Question6

        <div>
        <h2>Counter with useState</h2>
        <CounterWithUseState />
        </div>

        <div>
        <h2>Counter with useReducer</h2>
        <CounterWithUseReducer />
        </div>
    </div>
  )
}

const CounterWithUseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter with useState</h2>
      <p>Count: {count}</p>
      <button
        onClick={decrement}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Decrement
      </button>
      <button
        onClick={increment}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
    </div>
  );
};




const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const CounterWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter with useReducer</h2>
      <p>Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: 'decrement' })}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: 'increment' })}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
    </div>
  );
};

export default Question6