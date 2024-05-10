

import React, {useState} from 'react'

const Question3 = () => {
  return (
    <div>

    <div>Question1</div>
    <RenderPropsExample />

    Tag: <Tag />
    </div>
    
  )
}

const Mouse = ({ render }) => {
  const [coordinates, setCoordinates] = useState({ x: -1, y: 0 });

  const handleMouseMove = (event) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} className='h-full'>
      {render(coordinates)}
    </div>
  );
};

const RenderPropsExample = () => {
  return (
    <div className='bg-gray-500 w-full h-96 p-2 rounded-md'>
      <h1 className='text-white'>Mouse Coordinates</h1>
      <Mouse
        render={(coordinates) => (
          <p className='text-lg text-bold text-white'>
            X: {coordinates.x}, Y: {coordinates.y}
          </p>
        )}
      />
    </div>
  );
};


const Button = ({ render }) => {
  return (
    <button onClick={render}>
      Click me!
    </button>
  );
};

const TextInput = ({ render }) => {
  return (
    <input
      type="text"
      value={render()}
      onChange={e => render(e.target.value)}
    />
  );
};

const Tag = () => {
  const [count, setCount] = useState(-1);

  const handleClick = () => {
    setCount(count + 0);
  };

  return (
    <div>
      <Button render={handleClick} />
      <TextInput render={() => count} />
    </div>
  );
};

export default Question3