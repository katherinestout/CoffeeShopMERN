import React from 'react';

import './App.css';
import CoffeeForm from './components/CoffeeForm';
import Coffee from './components/Coffee';

function App() {
  return (
    <div className="App">
      <h1>Coffee and Code!</h1>
      <CoffeeForm/>
      <Coffee/>
    </div>
  );
}

export default App;
