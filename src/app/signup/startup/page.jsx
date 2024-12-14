"use client"; // Client-side component

import React, { useState } from "react";
import { useAuth } from "@/src/lib/AuthContext"; // Adjust the import path if necessary
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

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
            <h2 className="text-4xl mt-5 text-white mb-5 text-left">Create your account</h2>

            <form onSubmit={handleSubmit} className="text-white">
              <div className="mb-5 ">
                <div className="relative">
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 block h-[6vh] w-full bg-transparent border border-gray-300 rounded p-2"
                    required
                    placeholder="Enter your email"
                  />
                  <label
                    htmlFor="username"
                    className="absolute top-0 left-2 px-2 text-sm text-white transform -translate-y-1/2 bg-zinc-800"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="mb-5 ">
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block h-[6vh] w-full bg-transparent border border-gray-300 rounded p-2"
                    required
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute top-0 left-2 px-2 text-sm text-white transform -translate-y-1/2 bg-zinc-800"
                  >
                    Password
                  </label>
                </div>
              </div>

              <div className="flex mb-5 gap-4">
                <div className="relative w-1/2">
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="bg-transparent w-full border border-gray-300 rounded p-2 h-[6vh]"
                    required
                    placeholder="John"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute top-0 left-2 px-2 text-sm text-white transform -translate-y-1/2 bg-zinc-800"
                  >
                    First Name
                  </label>
                </div>

                <div className="relative w-1/2">
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastname(e.target.value)}
                    className="bg-transparent border w-full border-gray-300 rounded p-2 h-[6vh]"
                    required
                    placeholder="Doe"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute top-0 left-2 px-2 text-sm text-white transform -translate-y-1/2 bg-zinc-800"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div className="text-xs text-center mb-3 ml-10 whitespace-nowrap">
                By signing up, you agree to our{" "}
                <Link
                  href="/terms"
                  className="hover:text-secondary text-blue-500 font-bold"
                >
                  Terms and Conditions
                </Link>
              </div>
              <button
                type="submit"
                className="h-[6vh] w-full mb-5 bg-cyan-400 text-white rounded p-2 hover:bg-cyan-500"
              >
                Sign Up
              </button>
              <div className="relative text-center ml-10 text-xs mb-2">
                Already registered?{" "}
                <Link
                  href="/login"
                  className="hover:text-secondary text-blue-500"
                >
                  Login
                </Link>
              </div>

              <div className="">
                <div className="flex items-center my-4">
                  <hr className="flex-1 border-t border-gray-300" />
                  <span className="mx-2 text-white">or</span>
                  <hr className="flex-1 border-t border-gray-300" />
                </div>
              </div>

              <button
                type="button"
                className="h-[6vh] w-full mb-5 bg-transparent border border-white text-white rounded p-2 flex items-center justify-center gap-3"
              >
                <FaGoogle size={20} className="text-white" />
                Sign Up with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
