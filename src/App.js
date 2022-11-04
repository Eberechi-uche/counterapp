import './App.css';
import CounterReducer from './components/CounterReducer';
import Nav from './components/nav';
import Customcounter from './components/customCounter';
import Notfound from './components/Notfound';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
       <header className="App-header">
       <Nav></Nav>
       </header>
       <main className='main-content'>
        <>
        <Routes>
          <Route path='/' element={<CounterReducer/>}></Route>
          <Route path='/CustomCounter' element={<Customcounter/>}></Route>
          <Route path='/*' element={<Notfound/>}></Route>
        </Routes>
        </>
       </main>
    </div>
    
    
   
  )
}

export default App;
