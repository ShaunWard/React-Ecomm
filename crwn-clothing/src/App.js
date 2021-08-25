import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import './pages/homepage/homepage.styles.scss'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/shop'>
            <ShopPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;