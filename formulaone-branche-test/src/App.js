import React, { useState } from 'react';
import Slider from "react-slick";
import Image from "./components/Image";
import Popup from "reactjs-popup";
import Slideshow from './Components/Histoire.js'


//Import for home page and Navigation Router 
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import './index';



// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Descriptionja from './components/Descriptionja';


function Histoire() {
    return(
        <div className="Root">
        <Slideshow/>
        </div>
    )
    }

export default Histoire

import MainSlider from "./components/MainSlider";

function NewsUtils() {
  return (
    <div className="root">
      <MainSlider />
    </div>
  );
}

export default NewsUtils;

