import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51NxlGQGVkWt1AECJwqYMRAs9PR5uXZl8o3JmPUCQmoaLaxuJX0Ff1Hdnw7YXansctp7xrvvRq4TFAqwAlbgnKk4N009ln75gDs');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => { // like if statement in React
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path='/orders'
            element={
              <div>
                <Header />
                <Orders />
              </div>
            } />
        </Routes>

        <Routes>
          <Route
            path='/login'
            element={
              <div>
                <Header />
                <Login />
              </div>
            } />
        </Routes>

        <Routes>
          <Route
            path='/checkout'
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            } />
        </Routes>

        <Routes>
          <Route
            path='/payment'
            element={
              <div>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </div>
            } />
        </Routes>
        
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <Header />
                <Home />
              </div>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
