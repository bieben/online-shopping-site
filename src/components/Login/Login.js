import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(auth => {
        if (auth) {
          navigate('/')
        }
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          navigate('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png" alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text"
            value={email}
            onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />

          <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
        </form>
        <p>By signing-in, you agree to AMAZON FAKE CLONE's Conditions of Use and Privacy Notice.</p>
        <button className='login__registerButton' type='submit' onClick={register}>Creat your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login