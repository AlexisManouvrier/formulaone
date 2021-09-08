import React from 'react';
import FormImage from './FormImage.jpg';
import './App.css';
import Form from './Components/Form';



function App() {
  return (
    <div className="App" width="50%">
      <header id="Appheader" className="App-header">
        <img src={FormImage} className="FormImage" width="100%" height="100%" alt="FormImage" />
      </header>
      <div id="backForm" className="blackdiv" width="50%">
        <Form />
      </div>

    </div>
  );
}

export default App;
