import React from "react";

import RegisterForm from "../components/RegisterForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";


const RegisterPage = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()


  useEffect(
    () => {
      if (user) {
        navigate('/')
      } 
      if (!user) {
        return
      }
    }
    ,[user, navigate]
  )
  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label
              htmlFor
              className="block mt-3 text-lg text-gray-700 text-center font-semibold"
            >
              Register Form
            </label>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
