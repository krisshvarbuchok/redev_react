import './App.css';
import AnotherCounter from './components/ParentComponent';
import ChangeColor from './components/changeColor';
import Counter from './components/counter';
import Secret from './components/secret-text';
import Textarea from './components/textarea';

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
