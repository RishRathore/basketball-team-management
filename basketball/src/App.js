import { useState } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import QuarterBlock from './components/QuarterBlock';
import './App.css';



function App() {
  const [isActive, setIsActive] = useState('compose');
  const [selected, setSelected] = useState([]);

  return (
    <div className="App">
      <Header isActive={isActive} setIsActive={setIsActive}/>
      
      {isActive === 'compose' &&  <Player selected={selected}setSelected={setSelected} /> }
      {isActive === 'quarter' &&  <QuarterBlock selected={selected} setSelected={setSelected}/> }
      
    </div>
  );
}

export default App;
