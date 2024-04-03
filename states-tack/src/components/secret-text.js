import React, { useState } from 'react';

const Secret = () => {
    const [text, setSecretText] = useState(true);
    const click = () => {
        setSecretText(!text);
      };

      return (
        <div>
            <button onClick={click}>Показать/скрыть текст</button>
            {text && <p>Этот текст может быть скрыт или показан</p>}
        </div>
      );
}
export default Secret;