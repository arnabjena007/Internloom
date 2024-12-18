"use client";
import React, { useState, useTransition } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/src/schema";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { registerUser } from "@/src/actions/register";
import { RegisterButton } from "./LoginButton";

const RegisterCard = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    },
  });

  const onSubmit = async (values) => {
    setError("");
    setSuccess("");

    try {
      startTransition(async () => {
        const data = await registerUser(values); // Ensure this returns a promise
        if (data.error) {
          setError(data.error); // Set error if returned
        }
        if (data.success) {
          setSuccess(data.success); // Set success message if returned
        }
      });
    } catch (error) {
      setError("An unexpected error occurred."); // Handle unexpected errors
    }
  };

  return (
    <div className="flex bg-neutral-800 rounded-3xl shadow-lg overflow-hidden w-3/5">
      {/* Left Section */}
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

      {/* Right Section */}
      <div className="w-3/5 p-8">
        <h2 className="text-4xl mt-5 text-white mb-5 text-left">Create your account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="text-white">
          {/* Email */}
          <div className="mb-5">
            <div className="relative">
              <input
                {...register("email")}
                disabled={isPending}
                className="mt-1 block h-[6vh] w-full bg-transparent border border-gray-300 rounded p-2"
                required
                placeholder="Enter your email"
                type="email"
              />
              <label
                htmlFor="email"
                className="absolute top-0 left-2 px-2 text-sm text-white transform -translate-y-1/2 bg-zinc-800"
              >
                Email
              </label>
            </div>
            {formState.errors.email && (
              <p className="text-sm text-red-600">
                {formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-5">
            <div className="relative">
              <input
                {...register("password")}
                disabled={isPending}
                className="mt-1 block h-[6vh] w-full bg-transparent border border-gray-300 rounded p-2"
                required
                placeholder="Password"
                type="password"
              />
              <label
                htmlFor="password"
                className="absolute top-0 left-2 px-2 text-sm text-white transform -translate-y-1/2 bg-zinc-800"
              >
                Password
              </label>
            </div>
            {formState.errors.password && (
              <p className="text-sm text-red-600">
                {formState.errors.password.message}
              </p>
            )}
          </div>

          {/* First and Last Name */}
          <div className="flex mb-5 gap-4">
            <div className="relative w-1/2">
              <input
                {...register("firstname")}
                disabled={isPending}
                className="bg-transparent w-full border border-gray-300 rounded p-2 h-[6vh]"
                required
                placeholder="John"
                type="text"
              />
              <label
                htmlFor="firstname"
                className="absolute top-0 left-2 px-2 text-sm text-white transform -translate-y-1/2 bg-zinc-800"
              >
                First Name
              </label>
              {formState.errors.firstname && (
                <p className="text-sm text-red-600">
                  {formState.errors.firstname.message}
                </p>
              )}
            </div>
            <div className="relative w-1/2">
              <input
                {...register("lastname")}
                disabled={isPending}
                className="bg-transparent border w-full border-gray-300 rounded p-2 h-[6vh]"
                required
                placeholder="Doe"
                type="text"
              />
              <label
                htmlFor="lastname"
                className="absolute top-0 left-2 px-2 text-sm text-white transform -translate-y-1/2 bg-zinc-800"
              >
                Last Name
              </label>
              {formState.errors.lastname && (
                <p className="text-sm text-red-600">
                  {formState.errors.lastname.message}
                </p>
              )}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="text-xs text-center mb-3 ml-10 whitespace-nowrap">
            By signing up, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-secondary text-blue-500 font-bold"
            >
              Terms and Conditions
            </Link>
          </div>

          {/* Submit Button */}
          <RegisterButton>
            <button
              type="submit"
              className="h-[6vh] w-full mb-5 bg-cyan-400 text-white rounded p-2 hover:bg-cyan-500"
              disabled={isPending}
            >
              Sign Up
            </button>
          </RegisterButton>

          {/* Redirect to Login */}
          <div className="relative text-center ml-10 text-xs mb-2">
            Already registered?{" "}
            <Link
              href="/auth/login"
              className="hover:text-secondary text-blue-500"
            >
              Login
            </Link>
          </div>

          {/* Divider */}
          <div className="">
            <div className="flex items-center my-4">
              <hr className="flex-1 border-t border-gray-300" />
              <span className="mx-2 text-white">or</span>
              <hr className="flex-1 border-t border-gray-300" />
            </div>
          </div>

          {/* Google Sign-Up */}
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
  );
};

export default RegisterCard;
