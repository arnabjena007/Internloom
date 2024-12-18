"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-10 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/images/logo_full.png" alt="InternLoom" width={200} height={0} style={{ width: 200, height: "auto" }} />

      </div>
      <nav className="flex gap-6">
        <a href="/internships" className="text-gray-800 hover:text-gray-600">
          Internships
        </a>
        <a href="/courses" className="text-gray-800 hover:text-gray-600">
          Courses
        </a>
        <a href="#features" className="text-gray-800 hover:text-gray-600">
          Features
        </a>
        <a href="#pricing" className="text-gray-800 hover:text-gray-600">
          Pricing
        </a>
        <a href="#contact" className="text-gray-800 hover:text-gray-600">
          Contact Us
        </a>
      </nav>
      
      <div className="flex gap-4">
        <a href="/signup" className="bg-yellow-400 border-2 border-yellow-400 text-black rounded-full font-bold px-8 py-2">Sign Up</a>
        <a href="/auth/login" className="bg-white border-2 border-black text-black rounded-full font-bold px-8 py-2">Sign In</a>
      </div>
    </header>
  );
}

export default Header;
