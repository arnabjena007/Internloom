"use client";

import React, { useState } from "react";
import CourseCard from "@/src/components/CourseCard";
import Filters from "@/src/components/Filter";

const CoursesPage = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Web Development Bootcamp",
      provider: "Code Academy",
      duration: "6 Weeks",
      level: "Beginner",
      description: "Learn to build websites from scratch using HTML, CSS, and JavaScript.",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      provider: "Data School",
      duration: "8 Weeks",
      level: "Intermediate",
      description: "Explore data analysis, visualization, and machine learning techniques.",
    },
    {
      id: 3,
      title: "Machine Learning with Python",
      provider: "AI Institute",
      duration: "10 Weeks",
      level: "Advanced",
      description: "Dive deep into machine learning algorithms and their applications using Python.",
    },
    {
      id: 4,
      title: "Introduction to Cybersecurity",
      provider: "Cyber Academy",
      duration: "4 Weeks",
      level: "Beginner",
      description: "Understand the basics of cybersecurity and protect your online presence.",
    },
    {
      id: 5,
      title: "Digital Marketing Strategy",
      provider: "Marketing Pro",
      duration: "5 Weeks",
      level: "Intermediate",
      description: "Learn effective digital marketing strategies to grow your business online.",
    },
    {
      id: 6,
      title: "UI/UX Design Principles",
      provider: "Design School",
      duration: "7 Weeks",
      level: "Beginner",
      description: "Master the principles of user interface and user experience design.",
    },
    {
      id: 7,
      title: "Mobile App Development",
      provider: "App Academy",
      duration: "8 Weeks",
      level: "Advanced",
      description: "Build mobile applications for iOS and Android using React Native.",
    },
    {
      id: 8,
      title: "Blockchain Basics",
      provider: "Tech University",
      duration: "6 Weeks",
      level: "Intermediate",
      description: "Learn about blockchain technology and its implications in various sectors.",
    },
    {
      id: 9,
      title: "Public Speaking Skills",
      provider: "Communication Hub",
      duration: "4 Weeks",
      level: "All Levels",
      description: "Enhance your public speaking skills and boost your confidence.",
    },
    {
      id: 10,
      title: "Photography Essentials",
      provider: "Creative Arts",
      duration: "5 Weeks",
      level: "Beginner",
      description: "Learn the basics of photography and how to take stunning photos.",
    },
    {
      id: 11,
      title: "Financial Analysis and Reporting",
      provider: "Finance Institute",
      duration: "6 Weeks",
      level: "Intermediate",
      description: "Understand financial statements and how to analyze company performance.",
    },
    {
      id: 12,
      title: "Ethical Hacking",
      provider: "Hacking School",
      duration: "10 Weeks",
      level: "Advanced",
      description: "Explore ethical hacking techniques and how to secure systems.",
    },
  ]);

  const [filters, setFilters] = useState({
    level: "",
    duration: "",
  });

  const filteredCourses = courses.filter((course) => {
    return (
      (filters.level === "" || course.level.includes(filters.level)) &&
      (filters.duration === "" || course.duration === filters.duration)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4 w-full bg-white p-6 rounded-lg shadow-md mb-8 lg:mb-0 lg:mr-8">
            <Filters filters={filters} setFilters={setFilters} />
          </div>
          <div className="lg:w-3/4 w-full">
            <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <CourseCard key={course.id} {...course} />
                ))
              ) : (
                <p>No courses available for the selected filters.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
