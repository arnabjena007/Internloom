"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/src/schema";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { login } from "@/src/actions/login";

const LoginCard = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    setError("");
    setSuccess("");
    setIsPending(true);
    login(values).then((data) => {
      setIsPending(false);
      if (data.error) setError(data.error);
      if (data.success) setSuccess(data.success);
    });
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
        <h2 className="text-4xl mt-5 text-white mb-5 text-left">Sign into your account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="text-white">
          {/* Email Input */}
          <div className="mb-5">
            <div className="relative">
              <input
                id="username"
                type="text"
                {...register("email")}
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
            {formState.errors.email && (
              <p className="text-sm text-red-600">{formState.errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <div className="relative">
              <input
                id="password"
                type="password"
                {...register("password")}
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
            {formState.errors.password && (
              <p className="text-sm text-red-600">{formState.errors.password.message}</p>
            )}
          </div>

          {/* Success and Error Messages */}
          <FormSuccess message={success} />
          <FormError message={error} />

          {/* Submit Button */}
          <button
            type="submit"
            className="h-[6vh] w-full mb-5 bg-cyan-400 text-white rounded p-2 hover:bg-cyan-500"
            disabled={isPending}
          >
            Login
          </button>

          {/* Not Registered redirect to signup page */}
          <div className="relative text-center ml-10 text-xs mb-2">
            Not registered yet?{" "}
            <Link href="/auth/register" className="hover:text-secondary text-blue-500">
              Sign Up
            </Link>
          </div>

          {/* Divider for or line */}
          <div className="">
            <div className="flex items-center my-4">
              <hr className="flex-1 border-t border-gray-300" />
              <span className="mx-2 text-white">or</span>
              <hr className="flex-1 border-t border-gray-300" />
            </div>
          </div>

          {/* Google Sign-In Button */}
          <button
            type="button"
            className="h-[6vh] w-full mb-5 bg-transparent border border-white text-white rounded p-2 flex items-center justify-center gap-3"
          >
            <FaGoogle size={20} className="text-white" />
            Sign In with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
