import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoggedInContext } from '../context/LoggedInContext';
import { useNavigate } from "react-router-dom"
const Signup = () => {
    const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login, isLoggedIn, username } = useContext(LoggedInContext);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (data) => {
    
      navigate('/');
    if (data.username && data.password) {
      login(data.username); 
    } else {
      setErrorMessage('Please enter a username and password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat bg-opacity-50 bg-black">
      <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-lg p-8 shadow-2xl w-full max-w-md">
        {isLoggedIn ? (
          // Show logout button if logged in
          <>
            <h2 className="text-2xl font-bold mb-6 text-center  text-white ">Welcome, {username}!</h2>
            <button
              onClick={() => {
                localStorage.removeItem('username');
                login(''); // Log out by setting empty username
              }}
              className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          // Show signup form if not logged in
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-white mb-2" htmlFor="username">Username</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded bg-transparent text-white"
                  id="username"
                  type="text"
                  {...register('username', { required: 'Username is required' })}
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
              </div>
              <div>
                <label className="block text-white mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded bg-transparent text-white"
                  id="email"
                  type="email"
                  {...register('email', { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: 'Invalid email address' } })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-white mb-2" htmlFor="password">Password</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded bg-transparent text-white"
                  id="password"
                  type="password"
                  {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>
              {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Sign Up
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
