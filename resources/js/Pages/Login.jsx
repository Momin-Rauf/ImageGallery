import React from 'react'
import login from './login.jpeg'
import { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(password);
      console.log(email);
  
      if (!password.trim()) {
        alert('Please enter a password');
      } else if (!email.trim()) {
        alert('Please enter an email');
      }
  
    };
  return (
    <div className='flex flex-row p-16 justify-center items-center'>
        <div className='border-[1px] flex flex-row justify-center items-center shadow-sm rounded-lg shadow-black'>
          <div>
            <img className='h-96' src={login} alt="" />
          </div>
          <div className='items-center justify-between p-11 gap-5 flex flex-col h-auto'>
            <h1 className='font-bold text-[25px]' >Login</h1>
            <form className='border-[1px] shadow-sm shadow-gray-800 flex flex-col p-6 gap-3 rounded-md bg-[#ced2d3] '  onSubmit={submitHandler}>
              <label className='font-semibold' htmlFor="email">Email</label>
              <input className='pl-4 rounded-full pt-1 pb-1' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email' type="email" id="email"/>
              <label className='font-semibold' htmlFor="password">Password</label>
              <input className='pl-4 rounded-full pt-1 pb-[.5px]'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='********'
                type="password"
                id="password"
              />
                <button className='bg-[#090b0e] w-36 self-center relative left-7 rounded-full p-1 text-white ' type='submit'>Login</button>
              
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login