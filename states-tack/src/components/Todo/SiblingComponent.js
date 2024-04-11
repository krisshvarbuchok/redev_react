import React, { useState } from 'react';

const TextState = ({message}) => {
    const [text, setText] = useState(message.name);
    const click = () =>{
        setText('REDEV');
    }
    return (
        <div>
            <p>Текущий текст {text}</p> 
            <button onClick={click}>изменить текст</button>
        </div>
    )
}
export default TextState;