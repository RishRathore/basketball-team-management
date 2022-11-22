import { useState } from 'react';
import Header from './components/Header';
import Player from './components/Player';
import QuarterBlock from './components/QuarterBlock';
import './App.css';



function App() {
  const [isActive, setIsActive] = useState('compose');

  return (
    <div className="App">
      <Header isActive={isActive} setIsActive={setIsActive}/>
      
      {isActive === 'compose' &&  <Player /> }
      {isActive === 'quarter' &&  <QuarterBlock /> }
      
    </div>
  );
}

export default App;
