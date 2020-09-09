import React from 'react';
import Tweets from './containers/Tweets'
import './App.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tweet Disappear</h1>
      </header>
      <Tweets />
    </div>
  );
}

export default App;
