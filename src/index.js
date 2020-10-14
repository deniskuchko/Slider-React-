import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const img=[
  `https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`,
  `https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1460&q=80`,
  `https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`,
  `https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80`
]
ReactDOM.render(
  <React.StrictMode>
    <App img = {img} play={null} itemInSlide ={1} between={5}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
