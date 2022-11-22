import { useState } from 'react';

import Header from './components/Header';
import Player from './components/Player';
import QuarterBlock from './components/QuarterBlock';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [selected, setSelected] = useState([]);

  return (
    <div className="App">
      <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === 0 ?
        <Player selected={selected} setSelected={setSelected} />
        :
        <QuarterBlock selected={selected} setSelected={setSelected}/>
      }
    </div>
  );
}

export default App;
