import React from 'react';
import './App.css';

import {Provider} from 'react-redux';

import CoffeeForm from './components/CoffeeForm';
import Coffee from './components/Coffee';

import store from './store';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <h1>Coffee and Code!</h1>
      <CoffeeForm/>
      <Coffee/>
    </div>
    </Provider>
  );
}

export default App;
