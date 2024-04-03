import React, { useState } from 'react';

const Textarea = () => {
    const [text, setChangeText] = useState('')

    const handleChange = (event) => {
        setChangeText(event.target.value);
      }
    
      return (
        <div>
            <label>
                Введите своё имя:
                <input type="text" name={text} onChange={handleChange} />
            </label>
            <div>
                {text}, расскажи о себе..
            </div>
        </div>
      ) 
}

export default Textarea;