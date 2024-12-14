"use client"; // Client-side component

import React, { useState } from "react";
import { useAuth } from "@/src/lib/AuthContext"; // Adjust the import path if necessary
import Link from "next/link";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

const Login = () => {
  const { login } = useAuth(); // Get login function from context
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password }; // Replace with actual authentication logic
    login(userData); // Call login from context
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('/images/signin_signup/login2.png')] bg-cover bg-center bg-no-repeat filter blur-[3px]"></div>
      <div className="relative h-screen flex items-center justify-center">

        <div className="flex bg-neutral-800 rounded-3xl shadow-lg overflow-hidden w-3/5">

          <div className="relative w-2/5 bg-[url('/images/signin_signup/login.png')] bg-cover bg-center bg-no-repeat">

            <div className="flex flex-col justify-center ml-10 h-full">
              <h1 className="text-white text-6xl font-extrabold mb-5">Your</h1>
              <h1 className="text-white text-6xl font-extrabold mb-5">Future</h1>
              <h1 className="text-white text-6xl font-extrabold mb-5">Starts</h1>
              <h1 className="text-white text-6xl font-extrabold mb-4">Here</h1>
              <div className="text-sm text-white">Redefining Internships,</div>
              <div className="text-sm text-white">One Opportunity at a Time.</div>
            </div>
          </div>

          <div className="w-3/5 p-8">
            <h2 className="text-4xl mt-5 text-white mb-5 text-left">Sign Up As</h2>

            <a href="/signup/student" className="border-2 border-white rounded p-4 pb-16 block relative mt-8 cursor-pointer">
              <div className="flex flex-row items-center mb-4">
                <RiGraduationCapFill size={40} color="white" />
                <h2 className="text-2xl text-white ml-5">Student</h2>
              </div>

              <span className="text-gray-400">Students studying from k1-12 / universities</span>

              <FaArrowRight size={30} color="white" className="absolute right-4 bottom-4" />
            </a>

            <a href="/signup/startup" className="border-2 border-white rounded p-4 pb-16 block relative mt-8 cursor-pointer">
              <div className="flex flex-row items-center mb-4">
                <RiGraduationCapFill size={40} color="white" />
                <h2 className="text-2xl text-white ml-5">Start-Up</h2>
              </div>

              <span className="text-gray-400">People building a start-up</span>

              <FaArrowRight size={30} color="white" className="absolute right-4 bottom-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
