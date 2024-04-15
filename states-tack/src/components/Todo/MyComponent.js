import React, {useState, useEffect} from 'react';

// class MyComponent extends React.Component{
//     componentDidUpdate () {
//         console.log('--componentDidUpdate--')
//       }
//       componentWillUnmount () {
//         console.log('--componentWillUnmount--')
//       }
//    render(){
//     return (
//         <div>
//             Компонент добавлен 
//             <button > сказать ура</button>
//         </div>
//     )
//    }
// }

const MyComponent = () => {
    useEffect(() => {
        console.log('Компонент был монтирован');
        return () => {
          console.log('Компонент будет размонтирован');
        };
      }, []);
      return (
        <div>
            Компонент добавлен 
            <button onClick={() => console.log('ура!!!')}> сказать ура</button>
        </div>
      )
}

export default MyComponent;