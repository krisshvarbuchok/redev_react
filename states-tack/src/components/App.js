import './App.css';
import AnotherCounter from './Todo/ParentComponent';
import ChangeColor from './Todo/changeColor';
import Counter from './Todo/counter';
import Secret from './Todo/secret-text';
import Textarea from './Todo/textarea';

function App() {
  return (
    <div>
      first exersise
      <Counter />
      <div> 
      *******************<br/>
          second exersise
      </div>
      <Secret />
      <div>*******************</div>
      <Textarea />
      <div>*******************</div>
      <ChangeColor />
      <div>*******************</div>
      <AnotherCounter />
    </div>
  );
}

export default App;
