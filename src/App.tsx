import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponents from './components/NewComponents';

function App() {


  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ]
  return (
    <div className="App">
      <NewComponents cars={topCars}></NewComponents>
    </div>
  );
}

export default App;
