import React, { useState } from 'react';
import getRandom from '../../utils/getRandom';
import Greeting from './ChildComponent';
import TextState from './SiblingComponent';

const AnotherCounter = () => {
    const [count, setCounter] = useState(0);

    const increment = () =>{
        setCounter(count + 1)
    }
    const decrement = () =>{
        setCounter(count - 1)
    }
    const resert = () =>{
        setCounter(0)
    }
    const random = () =>{
        setCounter(getRandom(1, 10))
    }
    const obj = {
        name: 'Dinosaur',
    }

    return (
        <div>
            <p> Anouther counter: {count} </p>
            <button onClick={increment}>Увеличить</button> 
            <button onClick={decrement}>Уменьшить</button>
            <button onClick={resert}>Сбросить</button> 
            <button onClick={random}>Случайное значение</button>
            <Greeting message={obj} count={count}/> 
            <TextState message={obj}/>
        </div>
        
    )
}
export default AnotherCounter;