import { useState } from 'react';

import Header from './components/Header';
import Player from './components/Player';
import QuarterBlock from './components/QuarterBlock';

function App() {
  const [activeTab, setActiveTab] = useState(0);
 
  return (
    <div className="App">
      <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === 0 ? <Player /> : <QuarterBlock />}
    </div>
  );
}

export default App;
