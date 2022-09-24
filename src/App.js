import React from 'react';

import './App.css';

var date = new Date();
var d = date.getMinutes();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media.giphy.com/media/BEBkhdMsDbE5i/giphy.gif" alt="logo" />
       <h2> who do you know here{d}</h2>

      </header>
    </div>
  );
}

export default App;
