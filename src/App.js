import React, { useState } from 'react';
import './App.css';
import Characters from './components/Characters/Characters.js';
import Controls from './components/Controls';
import Count from './components/Count';
import Pick from './components/Pick.js';
import Statistics from './components/Statistics';
import background from '../Media';

function App() {
  const [head, setHead] = useState('stoic');
  const [middle, setmiddle] = useState('torso');
  const [bottom, setBottom] = useState('cargo');

  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
    }
    if (type === 'middle') {
      setMiddle(value);
    }
    if (type === 'bottom') {
      setBottom(value);
    }
  };
  return (
    <div className name="App" style={{ 
      backgroundImage: `url(${background})` }}>
      <main>
        <h1>Nic Cage Designer</h1>
        <section className="container">
          <div className="left">
            <Controls {... { head, middle, bottom, handleChange }} />
            <Count />
          </div>
          <div className="right">
            <Characters {... { head, middle, bottom }} />
          </div>
        </section>
      </main>

    </div>
  );
}