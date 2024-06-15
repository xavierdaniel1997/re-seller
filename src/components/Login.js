import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {validateLoginForm} from "../util/validateFormInputs";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../util/firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [errors, setErrors] = useState({});
  const [loginField, setLoginField] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    setLoginField({
      ...loginField,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validateLoginForm(loginField);
    setErrors(validateError);

    if (Object.keys(validateError).length === 0) {
      const {email, password} = loginField;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Login successful! Redirecting to home...");
          setTimeout(() => {
            navigate("/")
          },1000)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors({firebase: errorCode})
        });
    }
  };
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
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
            name="email"
            value={loginField.email}
            onChange={handleLoginForm}
          />
          {errors.email && (
            <p className="text-red-500 text-sm px-2">{errors.email}</p>
          )}
          <input
            type="password"
            placeholder="Enter Password"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
            name="password"
            value={loginField.password}
            onChange={handleLoginForm}
          />
          {errors.password && (
            <p className="text-red-500 text-sm px-2">{errors.password}</p>
          )}
          <label htmlFor="">P@ssw0rd!</label>
          <button
            type="submit"
            className="w-full p-3 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
          {errors.firebase && <p className="text-red-500 text-sm px-2">{errors.firebase}</p>}
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Don't have an account? </span>
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

/*



   // sign in login
   signInWithEmailAndPassword(
    auth,
    email.current.value,
    password.current.value
  )
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
   
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setalertMessage(errorCode + ", " + errorMessage);
    });
    
    
    */
