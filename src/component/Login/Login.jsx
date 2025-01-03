import React from 'react'
import './Login.css'
import { auth } from '../Utills/FireBase'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import habslogo from '../../../../image/Logo.jpg'
function Login() {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const navigate=useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential)
                    navigate("/");
            })
            .catch((error) => alert(error.message));
    }
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential)
                    navigate("/");
                // Signed in 
                // const user = userCredential.user;

            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }
  return (
    <div className="login">
    <Link to="/">
        <img
            className="login__logo"
            src={habslogo}
        />
    </Link>
    <div className="login__container">
        <h1>Sign-in</h1>

        <form className='signInForm'>
            <h5>E-mail</h5>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                type="submit"
               onClick={signIn}
                className="login__signInButton"
            >
                Sign In
            </button>
        </form>

        <p>
            By signing-in you agree to the Habesha Airlines Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
        </p>

        <button
            onClick={register}
            className="login__registerButton">
            Be a new user of Habesha Airlines
        </button>
    </div>
</div>
  )
}

export default Login