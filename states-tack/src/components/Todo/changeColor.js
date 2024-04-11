import React, { useState } from 'react';

const ChangeColor = () => {
    const [color, setChangeColor] = useState('black');
    
    
    const handleClick = () => {
        setChangeColor(color === 'black' ? 'red' : 'black');
    }

    const style = {
        color: color
      };

    return (
        <div>
            <button onClick={handleClick}>Другой цвет</button>
            <p style={style}> Some text which change color</p>
        </div>
    )
}
export default ChangeColor;