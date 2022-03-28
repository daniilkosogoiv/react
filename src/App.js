
import './App.css';
import { Message } from './components/Message/Message';

const lastName ="Shipunova"

function App() {
  return (
    <div className="App">
   <Message name="Vera" lastName={lastName} />
   <Message name="Olga" age={23} />
    </div>
  );
}

export default App;
