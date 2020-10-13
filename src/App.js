import React from 'react';
import './App.css';
import Slider from './common/Slider/Slider';

function App(props) {
  return (
    <div className="App">
      <Slider {...props}/>
    </div>
  );
}

export default App;
