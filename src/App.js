import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import PopupCart from './components/Home/PopupCart';

const promise = loadStripe('pk_test_51NxlGQGVkWt1AECJwqYMRAs9PR5uXZl8o3JmPUCQmoaLaxuJX0Ff1Hdnw7YXansctp7xrvvRq4TFAqwAlbgnKk4N009ln75gDs');

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      dispatch({
        type: 'SET_USER',
        user: authUser ? authUser : null,
      });
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/login' element={<Login />} />
          <Route path='/payment' element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          } />
          <Route element={<PopupCart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
