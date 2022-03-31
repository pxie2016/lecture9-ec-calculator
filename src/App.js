import React from 'react';
import { Calculator } from './features/calculator/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>{"Let's Have Fun With Redux"}</h1>
        <h2>{"Use the form below to add to the total"}</h2>
        <Calculator />
    </div>
  );
}

export default App;
