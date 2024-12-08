"use client";
import React from 'react';
import { BookOpen, MapPin, Briefcase, Star, Calendar } from 'lucide-react';
import Link from 'next/link';

const CategorySection = () => {
  const categories = [
    { icon: <BookOpen size={24} />, name: "Online", href: "/internships?type=Online" },
    { icon: <MapPin size={24} />, name: "Work From Home", href: "/internships?type=Work%20From%20Home" },
    { icon: <Briefcase size={24} />, name: "In Office", href: "/internships?type=In-Office" },
    { icon: <Star size={24} />, name: "MBA", href: "/internships?type=MBA" },
    { icon: <Calendar size={24} />, name: "Engineering", href: "/internships?type=Engineering" },
  ];

  return (
    <div className="container mx-auto px-4 mt-32 mb-12">
      <h2 className="text-2xl text-black font-bold mb-6">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <Link href={category.href || "#"} key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-blue-600 mb-2">{category.icon}</div>
            <span className="text-gray-700">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
