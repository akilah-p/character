import React, { useState} from 'react';
import './App.css';
import Character from './components/Characters/Characters.js';
import Controls from './components/Controls';
import Count from './components/Count';
import Pick from './components/Pick.js';
import Statistics from './components/Statistics';
import background from '../Media';

function App() {
  const [head, setHead] = useState('nic');

  const handleChange = (type,value) => {
    if (type === 'head') {
      setHead(value);
    }
  };
  return (
  <div class name="App" style={{ 
    backgroundImage =`url(${background})`}}>
      <main>
        <h1>Nic Cage Designer</h1>
        <section className="container">
          <div className="left">
            <Count />
            <Controls {... { head, handleChange}} />
          </div>
          <div className="right">
            <Characters {... { head }} />
          </div>
        </section>
      </main>

  </div>
  );
}