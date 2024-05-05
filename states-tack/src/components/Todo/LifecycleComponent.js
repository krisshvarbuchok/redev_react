import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MyComponent from './MyComponent';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNodmFyYnVrb3Zha3Jpc3RpbmFAZ21haWwuY29tIiwiaWQiOjM4OSwiaWF0IjoxNzEyODYyMTU2fQ.K9157adJ-Kb3AzMwelVZxu0WFwAVvZJ4kekacCsFJg4';


// class LifecycleComponent extends React.Component{
//     constructor (props) {
//         super(props)
//         this.state = { count: 0}
//         this.increment = this.increment.bind(this)
//         this.decrement = this.decrement.bind(this)
//       }
      
//     async componentDidMount(){
//         console.log('didmount');
//         try{
//             const response = await axios.get(`https://todo-redev.herokuapp.com/api/todos`,{
//                 headers:{
//                     'accept': 'application/json',
//                     'Authorization': `Bearer ${token}`,
//                 }, 
//             });
//             console.log('Список задач', response.data);
//         }
//         catch(error){
//             console.error('Ошибка при получении данных:', error);
//         }
//       }
    
//     increment () {
//         this.setState(state => ({
//           count: state.count + 2
//         }))
//     }

//     decrement(){
//         this.setState(state => ({count: state.count - 1}))
//     }

//     // shouldComponentUpdate(nextProps, nextState){
//     //     console.log('should');
//     //     return  nextState.count % 2 === 0;   
//     // }

//     componentDidUpdate (prevProps, prevState) {
//         console.log('didupdate');
//         if (prevState.count !== this.state.count){
//           console.log(`Количество обновлено на ${this.state.count}`)
//         }
//       }

//       componentWillUnmount () {
//         console.log('Компонент удален из DOM');
//       }

//     render(){
//         console.log('render');
//         return (
//             <div>
//                 <p>количество кликов: {this.state.count} </p>
//                 <button onClick={this.increment}>+2 клик</button>
//                 <button onClick={this.decrement}>-1 клик</button>
//                 {this.state.count % 2 === 0 ? <MyComponent /> : <p>неудача</p>}
//             </div>
//         )
//       }
// }

const LifecycleComponent = () =>{
    const [count, setCount] = useState(0);
    
  
     useEffect(() => {
        console.log("componentDidMount");
         async function axiosData(){
             try{
                const response = await axios.get(`https://todo-redev.herokuapp.com/api/todos`,{
                    headers:{
                        'accept': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }, 
                    });
                console.log('Список задач', response.data);
                }
            catch(error){
                console.error('Ошибка при получении данных:', error);
            }
        }  
         axiosData();  
         return () => {
            console.log('Компонент будет размонтирован');  
         } 
    }, [])

    useEffect(() => {
        console.log('didupdate');
        // if(count % 2 !== 0){
        //     setCount(count + 1)
        // }
        if (count % 2 === 0){
          console.log(`Количество обновлено на ${count}`)
        }
    }, [count])
      
    return (
        <div>
            <p>количество кликов: {count} </p>
            <button onClick={() => setCount( count + 1)}>+1 клик</button>
            <button onClick={() => setCount( count - 1)}>-1 клик</button>
            {count % 2 === 0 ? <MyComponent /> : <p>неудача</p>}
        </div>
    )
}

export default LifecycleComponent;