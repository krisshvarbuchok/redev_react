import React, { useState } from 'react';

const ChangeColor = () => {
    let index = 0;
    const arrColor = ['black', 'red' , 'blue', 'orange', 'green'];
    let [color, setChangeColor] = useState(arrColor[index]);
    
    
    const handleClick = () => {
        ++index;
        let newColor = arrColor[index];
        setChangeColor(newColor);
       console.log(newColor);
    }
       
    //     setChangeColor(arrColor.find((item, index, arr) => {
    //         console.log(color);
    //         if(index === arr.length - 1) {
    //            return color = arr[0];
    //         }else if(item === color) return color = arr[index + 1];
    //     }))
    // }

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