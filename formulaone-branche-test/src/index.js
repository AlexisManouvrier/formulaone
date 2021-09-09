import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Popup from "reactjs-popup";
import Histoire from './App'
import './histoireF1.scss';
import 'react-slideshow-image/dist/styles.css';
import NewsUtils from "./App";
import Annuaire from "./App";
import './Member.scss';
import './_Sliderespon.scss';
 
import './styles/index.scss'; //styles for home page and navigation



ReactDOM.render(
  <React.StrictMode>
    <App /> <Popup /> <Histoire /> <NewsUtils /> <Membre />
  </React.StrictMode>,
  document.getElementById('root')
);
