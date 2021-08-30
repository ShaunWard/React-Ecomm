import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import './pages/homepage/homepage.styles.scss'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({ currentUser: user })

      createUserProfileDocument(user);

      // console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
        <div>
          <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route path='/shop'>
                <ShopPage />
              </Route>
              <Route path='/signin'>
                <SignInAndSignUpPage />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      );
  }
}

export default App;