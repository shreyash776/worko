
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-lg p-8 shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Log In</h2>
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
            <label className="block text-white mb-2" htmlFor="password">Password</label>
            <input
              className="w-full p-2 border border-gray-300 rounded bg-transparent text-white"
              id="password"
              type="password"
              {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
