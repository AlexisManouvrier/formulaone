import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index';
import Home from './pages/Home';
import { NotFound } from 'http-errors';
//import { from } from 'core-js/core/array';
//import MainSlider from "./components/MainSlider";
//import News from './pages/News';
import MainSlider from './pages/MainSlider';
import Contact from './pages/Contact';

//Fanny import

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={MainSlider} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFound}/>       
      </Switch>
    </BrowserRouter>
  );
};

export default App;




