import React, {useState, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import {validateFormRegister} from "../util/validateFormInputs";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../util/firebaseConfig";
import { auth } from "../util/firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [errors, setErrors] = useState({});
  const [signInForm, setSignInForm] = useState({
    fname: "",
    sname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const fullName = useRef();
  const navigate = useNavigate();

  const handleSignInForm = (e) => {
    setSignInForm({
      ...signInForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateError = validateFormRegister(signInForm);
    setErrors(validateError);
    console.log("click register");

    if (Object.keys(validateError).length === 0) {
      const {email, password, fname, sname} = signInForm;
      try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          fname: fname,
          sname: sname,
          email: email,
        });

        toast.success("Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        console.log("user data is added successfully")
      }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        setErrors({firebase: errorCode})
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Register</h1>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
            name="fname"
            value={signInForm.fname}
            onChange={handleSignInForm}
            ref={fullName}
          />
          {errors.fname && (
            <p className="text-red-500 text-sm px-2">{errors.fname}</p>
          )}

          <input
            type="text"
            placeholder="Last Name"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
            name="sname"
            value={signInForm.sname}
            onChange={handleSignInForm}
          />
          {errors.sname && (
            <p className="text-red-500 text-sm px-2">{errors.sname}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
            name="email"
            value={signInForm.email}
            onChange={handleSignInForm}
          />
          {errors.email && (
            <p className="text-red-500 text-sm px-2">{errors.email}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
            name="password"
            value={signInForm.password}
            onChange={handleSignInForm}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 text-lg outline-none border rounded-md focus:border-blue-500"
            name="cpassword"
            value={signInForm.cpassword}
            onChange={handleSignInForm}
          />
          {errors.cpassword && (
            <p className="text-red-500 text-sm">{errors.cpassword}</p>
          )}
            <label htmlFor="">P@ssw0rd!</label>
          <button className="w-full p-3 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-700 transition duration-300">
            Register
          </button>
          {errors.firebase && <p className="text-red-500 text-sm px-2">{errors.firebase}</p>}
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-700">Already have an account? </span>
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
