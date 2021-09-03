import React from 'react';
import ReactDOM from 'react-dom';
import HistoireFerra from './Composant/histoireferra.js';
import HistoireF1 from './Composant/histoiref1.js';
import HistoireClub from './Composant/histoireclub.js';
import './histoire.scss'

ReactDOM.render(<HistoireF1/> , document.getElementById('root')); 
ReactDOM.render(<HistoireFerra/> , document.getElementById('root')); 
ReactDOM.render(<HistoireClub/> , document.getElementById('root'));
