import React, { useState } from 'react';

const Counter = ({message}) => {
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count)=> count + 1);
  };
  const decrement = () => {
    setCount((count) => count + 1)
  };
  const reset = () => {
    setCount((count)=>count = 0);
  };
    return (
        <div>
            <p>Счетчик: {count}</p>
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
            <button onClick={reset}>Обнуление</button>
        </div>
    )
}
export default Counter;