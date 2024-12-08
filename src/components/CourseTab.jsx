"use client";
import React from 'react';
import Link from 'next/link'; // Import Next.js Link
import CourseCard from './CourseCard';

const CoursesTab = () => (
  <div className="container mx-auto px-4 my-12">
    <h2 className="text-2xl text-black font-bold mb-6">Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CourseCard
        title="Python for Beginners"
        description="Learn the basics of Python programming."
        duration="6 Weeks"
        price="₹4,999"
      />
      <CourseCard
        title="Data Science"
        description="Master data science concepts and applications."
        duration="8 Weeks"
        price="₹7,999"
      />
      <CourseCard
        title="Web Development Bootcamp"
        description="Become a full-stack web developer."
        duration="12 Weeks"
        price="₹9,999"
      />
    </div>
    <div className="text-center mt-8">
      <Link href="/courses"> {/* Use Next.js Link for navigation */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          View all courses
        </button>
      </Link>
    </div>
  </div>
);

export default CoursesTab;
