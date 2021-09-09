import React, { useState } from 'react';
import Slider from "react-slick";
import Image from "./images";
import Popup from "reactjs-popup";
import Slideshow from './Components/Histoire.js'
import MainSlider from "./components/MainSlider";



//Import for home page and Navigation Router 
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import './index';



// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Histoire() {
    return(
        <div className="Root">
        <Slideshow/>
        </div>
    )
    }

export default Histoire

function NewsUtils() {
  return (
    <div className="root">
      <MainSlider />
    </div>
  );
}


export default NewsUtils;


function Annuaire() {
    return (
        <div className="root">
            <Membre />
        </div>
       );
}
export default Membre;

