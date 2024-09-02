import React, { useState } from 'react';
import Title from "../components/Title";

const Login = () => {
  const [data, setData] = useState('');
  const handleSubmit =(e) =>{
    e.preventDefault();

    fetch("",{
        method: "POST",
        headers: {
            accept: "application/json"
        },
        body: JSON.stringify({data: data}),
  
    })
  }
  const handleChange =(e) =>{
    setData({...data,[e.target.name]:e.target.value});

  }

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <Title text2={"Login"} />
      <div className="flex flex-col gap-5 w-full items-center">
        <input
          type="email"
          name='email'
          placeholder="Email"
          className="border-2 border-slate-900 w-full sm:w-1/3 h-8"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name='password'
          className="border-2 border-slate-900 w-full sm:w-1/3 h-8"
          onChange={handleChange}
        />
        <div>
            <span>Forgot your password</span>
            <span>Create account</span>
        </div>
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded-lg"
        >
          Sign in
        </button>

      </div>
      {/* <input type="submit" name="" id=""/> */}
    </form>
  );
};

export default Login;
