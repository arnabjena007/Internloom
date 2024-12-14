"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderOld = () => {
  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <div className="flex flex-row items-center">
          <Image src="/images/logo.png" alt="InternLoom" width={70} height={0} style={{ width: 70, height: "auto" }} />
          <h2 className="font-bold text-2xl">InternLoom</h2>
        </div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/internships" className="hover:text-secondary">
                Internships
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-secondary">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-secondary">
                Student Login
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-secondary">
                Startup Login
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

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
        <a href="/signup" className="bg-yellow-400 text-black px-8 py-2 rounded-full font-bold">
          Sign Up
        </a>

        <a href="/login" className="bg-white border-2 border-black text-black px-8 py-2 rounded-full font-bold">
          Sign In
        </a>
      </div>
    </header>
  );
}

export default Header;
