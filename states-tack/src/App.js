import './App.css';
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
          second exersise
      </div>
      <Secret />
      <Textarea />
      <div>*******************</div>
      <ChangeColor />
    </div>
  );
}

export default App;
