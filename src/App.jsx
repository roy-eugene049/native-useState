import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(10);

  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <div className='App'>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
