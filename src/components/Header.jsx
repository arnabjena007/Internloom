"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image src="/images/logo_full.png" alt="InternLoom" width={200} height={0} style={{ width: 200, height: "auto" }} />
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

export default Header;
