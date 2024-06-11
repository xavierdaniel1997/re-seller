import React from 'react';

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Register</h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
          />
          <button
            type="button"
            className="w-full p-3 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Already have an account? </span>
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
