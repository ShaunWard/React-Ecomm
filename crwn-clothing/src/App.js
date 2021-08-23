import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/hats' components={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;