import './App.css';
import Counter from './components/counter';
import Instruction from './components/instruction';


function App() {
  return (
    <div className="App">
       <header className="App-header">
        <Instruction></Instruction>
        <Counter></Counter>
       </header>
    </div>
   
  )
}

export default App;
