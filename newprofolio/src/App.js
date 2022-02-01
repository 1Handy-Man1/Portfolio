import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import About from './Page/About';
import History from './Page/History';
import Skills from './Page/Skills';
import Home from './Page/Home';
import Gallery from "./Page/Gallery";
import Secret from "./Page/Secret";
import './style/main.css';

function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path='/Secret'>
            <Secret/>
          </Route>
          <Route path='/Gallery'>
            <Gallery/>
          </Route>
          <Route path='/About'>
            <About/>
          </Route>
          <Route path='/Skills'>
            <Skills/>
          </Route>
          <Route path='/History'>
            <History/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
