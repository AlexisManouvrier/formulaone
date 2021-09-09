import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Popup from "reactjs-popup";
import Histoire from './App'
import './histoireF1.scss';
import 'react-slideshow-image/dist/styles.css';
import NewsUtils from "./App";
 
import './styles/index.scss'; //styles for home page and navigation



ReactDOM.render(
  <React.StrictMode>
    <App /> <Popup /> <Histoire /> <NewsUtils />
  </React.StrictMode>,
  document.getElementById('root')
);
