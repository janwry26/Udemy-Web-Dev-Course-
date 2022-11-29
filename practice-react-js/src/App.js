import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './myItem';
import Starwars from './starwars';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Item name="Janwry"/>
        <Item name="Dela Cruz"/> */}
      <Starwars />
      </header>
    </div>
  );
}

export default App;
