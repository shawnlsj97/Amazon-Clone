import './App.css';
import React, { useEffect } from "react"
import Header from './Header'
import Checkout from './Checkout'
import Home from './Home'
import Login from './Login'
import Payment from './Payment'
import Orders from './Orders'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase"
import { useStateValue } from './StateProvider'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51I32thLGnub5vC3OqGCHVRX72tkFFoXyK8qqRqbPmun5JXGl2LG05YQeYqxOyHhSiNc4eh5U3ub73rCOeSJlh8uz00uyH0jcW5');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when app component loads (unless we put stuff in the array, then it reloads when there are changes to the stuff)
    auth.onAuthStateChanged(authUser => {
      console.log('USER: ', authUser);
      if (authUser) {
        // user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            {/* Login */}
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            {/* Checkout */}
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
