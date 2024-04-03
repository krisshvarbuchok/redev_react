import './App.css';
import Number from './components/number';
import String from './components/string';
import MyFunction from './components/function';
import MyArray from './components/array';
import MyBoolean from './components/boolean';
import MyObject from './components/object';


function App() {
  const obj = {
    sayHi: function(){
      return 'Hello! This is a sun!'
    },
    array: ['Spring', 'April', '1th'],
    isMan: false,
    person: {
      name: 'kris',
      age: 25,
    },
  }
  return (
    <div >
      <Number message={1} />
      <String message='second props' />
      <MyFunction message= {obj.sayHi} />
      <MyArray message={obj.array} />
      <MyBoolean message={obj.isMan} />
      <MyObject message={obj.person} />
    </div>
  );
}

export default App;
