import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import StickyHeader from './layout/StickyHeader/StickyHeader';
import SignIn from './modules/SignIn/SignIn';
import Button from './components/buttons/Button/Button';

import logo from './logo.svg';
import './App.css';
import Index from './modules/Index/Index';
import Places from './modules/Places/Places';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/map' component={Index} />
        <Route exact path='/places' component={Places} />
      </Switch>
    </Router>
  );
}

export default App;

/* <div className="App">

      <StickyHeader>
      </StickyHeader>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. {count}
        </p>
        <Button className="btn btn-danger" onClick={() => setCount(count + 1)}>
          Increment {count}
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setCount(count + 1)}
        >
          Learn
        </a>
      </header>
    </div> */