"use client";
import React from 'react';
import Link from 'next/link'; // Import Next.js Link
import InternshipCard from './IntershipCard';

const InternshipTab = () => (
  <div className="container mx-auto px-4 my-12">
    <h2 className="text-2xl text-black font-bold mb-6">Internships</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <InternshipCard
        title="Business Development (Sales)"
        company="Tute Coaching"
        location="Work From Home"
        duration="2 Months"
        stipend="₹2,000-5,000 /month"
      />
      <InternshipCard
        title="Web Development"
        company="Oasis Infobyte"
        location="Work From Home"
        duration="1 Month"
        stipend="Unpaid"
      />
      <InternshipCard
        title="Human Resources (HR)"
        company="Escale Solutions"
        location="Delhi"
        duration="3 Months"
        stipend="₹8,000 /month"
      />
    </div>
    <div className="text-center mt-8">
      <Link href="/internships"> {/* Use Next.js Link for navigation */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          View all internships
        </button>
      </Link>
    </div>
  </div>
);

export default InternshipTab;
