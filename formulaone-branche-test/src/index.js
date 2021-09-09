import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Popup from "reactjs-popup";
import Histoire from './App'
 
import './styles/index.scss'; //styles for home page and navigation



ReactDOM.render(
  <React.StrictMode>
    <App /> <Popup />
  </React.StrictMode>,
  document.getElementById('root')
);
