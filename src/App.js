import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index';
import Home from './pages/Home';
import About from './pages/About';
import { NotFound } from 'http-errors';
//import { from } from 'core-js/core/array';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/a-propos" component={About} />
        <Route component={NotFound}/>       
      </Switch>
    </BrowserRouter>
  );
};

export default App;



