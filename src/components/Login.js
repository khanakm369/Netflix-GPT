import React, { useRef, useState } from 'react';
import Header from './Header';
import {checkValidateData} from "../utilis/Validate";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utilis/firebase';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const handleButtonClick = () => {
  

    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage)
      });
    }
    else{

    }

};


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="fixed inset-0 w-full h-screen">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="Background" />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
    

        {!isSignInForm && (
          <input 
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 opacity-50"
          />
        )}

        <input 
          ref={emailRef}
          type="text" 
          placeholder="Email Address" 
          className="p-4 my-4 w-full bg-gray-700 opacity-50"
        />
        <input 
          ref={passwordRef}
          type="password" 
          placeholder="Password" 
          className="p-4 my-4 w-full bg-gray-700 opacity-50"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button type="button" onClick={handleButtonClick} className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New To Netflix? Sign Up Now" : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
