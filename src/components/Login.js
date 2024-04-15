import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
     <Header/>

     <div className="absolute "> 
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="Backgroup" />
     </div>

    <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-xl py-4">Sign In</h1>
        <input 
        type="text" 
        placeholder="Email Address" 
        className="p-4 my-4 w-full bg-gray-700"
        />
        <input 
        type="password" 
        placeholder="Password" 
        className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">Sign In</button>
    </form>


    </div>
  )
}

export default Login
