import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './components/footer/Footer'
import { Navbarr } from './components/navbar/Navbarr'
import Home from './components/home/Home'
import { Contact } from './components/contact/Contact';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="page-container">
          <Navbarr />
          <div>
            <Route path='/' exact={true} component={Home} />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>

          <Footer />

        </div>

      </div>
    </Router>

  );
}

export default App;
