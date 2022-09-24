import React from 'react';

import './App.css';
import img1 from "./1.jpeg"
import img2 from "./2.png"



var date = new Date();
var d = date.getMinutes();
var img;
if (d == 36){
  img = img1;
}
else{
  img = img2;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} alt="logo" />
       <h2> who do you know here{d}</h2>

      </header>
    </div>
  );
}

export default App;
