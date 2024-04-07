import React from 'react';
const Greeting = ({message , count}) => {
    return (
        <div>
            Hello, {message.name}!!! Текущее значение счетчика {count}
        </div>
    )
}

export default Greeting;