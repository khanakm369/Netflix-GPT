import React, { useRef, useState } from 'react';
import Header from './Header';
import {checkValidateData} from "../utilis/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const handleButtonClick = () => {
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    const validationMessage = checkValidateData(emailValue, passwordValue);
    if (validationMessage) {
        console.error(validationMessage);
       // Displaying error message to the user (use more user-friendly methods in production)
        setErrorMessage(validationMessage);
    } else {
        console.log("Both email and password are valid!");
        setErrorMessage(null); 
        console.log(emailValue)
        console.log(passwordValue)
    }
};


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute"> 
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
