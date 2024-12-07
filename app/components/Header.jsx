"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">InternLoom</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/pages/internship" className="hover:text-secondary">
                Internships
              </Link>
            </li>
            <li>
              <Link href="/pages/course" className="hover:text-secondary">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/pages/login" className="hover:text-secondary">
                Login
              </Link>
            </li>
            <li>
              <Link href="/pages/contact" className="hover:text-secondary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
