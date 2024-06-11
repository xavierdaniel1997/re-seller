import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <div className="flex justify-center mb-6">
          <img
            src="https://statics.olx.in/external/base/img/loginEntryPointFavorite.webp"
            alt="OLX Login"
            className="w-24 h-24"
          />
        </div>
        <h1 className="text-xl font-semibold mb-6 text-center">
          Close deal from the comfort <br /> of your home
        </h1>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
          />
          <button
            type="button"
            className="w-full p-3 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Don't have an account? </span>
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
