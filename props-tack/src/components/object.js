import React from 'react';
const MyObject = ({message}) => {
    return (
        <div>
            Person {message.name} {message.age}
        </div>
    )
}
export default MyObject;