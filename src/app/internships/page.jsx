"use client";
import React, { useEffect, useState, Suspense } from "react";
import InternshipCard from "@/src/components/IntershipCard";
import Filters from "@/src/components/Filter";
import { useSearchParams } from "next/navigation"; // For handling URL search parameters

const InternshipsPage = () => {
  const [internships, setInternships] = useState([
    // Internships data
    {
      id: 1,
      title: "Frontend Development",
      company: "Tech Solutions",
      location: "Bangalore",
      duration: "3 Months",
      stipend: "₹10,000/month",
      type: "Work From Home",
      description:
        "Join our team to create stunning user interfaces and improve user experience.",
    },
    {
      id: 2,
      title: "Business Development (Sales)",
      company: "EduTech",
      location: "Delhi",
      duration: "2 Months",
      stipend: "₹8,000/month",
      type: "In-Office",
      description: "Help us expand our market reach by identifying new business opportunities.",
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Analytics Co.",
      location: "Hyderabad",
      duration: "6 Months",
      stipend: "₹15,000/month",
      type: "In-Office",
      description: "Work with our data team to analyze large datasets and provide insights.",
    },
    {
      id: 4,
      title: "Digital Marketing Intern",
      company: "Marketing Gurus",
      location: "Mumbai",
      duration: "4 Months",
      stipend: "₹12,000/month",
      type: "Remote",
      description: "Assist in managing social media accounts and executing marketing campaigns.",
    },
    {
      id: 5,
      title: "Graphic Design Intern",
      company: "Creative Studio",
      location: "Pune",
      duration: "3 Months",
      stipend: "₹10,000/month",
      type: "Hybrid",
      description: "Create engaging visuals and designs for our marketing materials.",
    },
    {
      id: 6,
      title: "Content Writing Intern",
      company: "Content Hub",
      location: "Bangalore",
      duration: "2 Months",
      stipend: "₹5,000/month",
      type: "Remote",
      description: "Write articles and blogs on various topics for our website.",
    },
    {
      id: 7,
      title: "Mobile App Development Intern",
      company: "App Innovators",
      location: "Noida",
      duration: "4 Months",
      stipend: "₹15,000/month",
      type: "In-Office",
      description: "Develop and maintain mobile applications for Android and iOS platforms.",
    },
    {
      id: 8,
      title: "Human Resources Intern",
      company: "HR Solutions",
      location: "Delhi",
      duration: "3 Months",
      stipend: "₹7,000/month",
      type: "In-Office",
      description: "Assist the HR team in recruitment and employee engagement activities.",
    },
    {
      id: 9,
      title: "Cybersecurity Intern",
      company: "SecureTech",
      location: "Bangalore",
      duration: "3 Months",
      stipend: "₹12,000/month",
      type: "Remote",
      description: "Help us identify and mitigate security risks in our infrastructure.",
    },
    {
      id: 10,
      title: "Machine Learning Intern",
      company: "Data Minds",
      location: "Chennai",
      duration: "6 Months",
      stipend: "₹18,000/month",
      type: "In-Office",
      description: "Work on projects involving data modeling and machine learning algorithms.",
    },
    {
      id: 11,
      title: "UI/UX Design Intern",
      company: "Designers Inc.",
      location: "Hyderabad",
      duration: "3 Months",
      stipend: "₹10,000/month",
      type: "Hybrid",
      description: "Collaborate with the team to improve user experience and design workflows.",
    },
    {
      id: 12,
      title: "Research Analyst Intern",
      company: "Market Insights",
      location: "Mumbai",
      duration: "4 Months",
      stipend: "₹8,000/month",
      type: "Remote",
      description: "Conduct market research and analyze trends to support business decisions.",
    },
  ]);

  // Filter state
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    stipendRange: [0, 100000],
    duration: "",
  });

  // Access query parameters using Next.js's useSearchParams
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries([...searchParams.entries()]);
    setFilters((prevFilters) => ({ ...prevFilters, ...params }));
  }, [searchParams]);

  // Filter function
  const filteredInternships = internships.filter((internship) => {
    const dur = parseInt(internship.duration.split(" ")[0]); // Duration from each internship
    const filteredDur = parseInt(filters.duration.split(" ")[0]); // Duration from filter

    return (
      (filters.location === "" || internship.location.includes(filters.location)) &&
      (filters.type === "" || internship.type === filters.type) &&
      (isNaN(filteredDur) ||
        filteredDur === dur ||
        (filteredDur === 3 && filteredDur <= dur))
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Filters Section */}
          <div className="lg:w-1/4 w-full bg-white p-6 rounded-lg shadow-md mb-8 lg:mb-0 lg:mr-8">
            <Filters filters={filters} setFilters={setFilters} />
          </div>

          {/* Internship Cards Section */}
          <div className="lg:w-3/4 w-full">
            <h2 className="text-2xl text-black font-bold mb-6">Available Internships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInternships.length > 0 ? (
                filteredInternships.map((internship) => (
                  <InternshipCard key={internship.id} {...internship} />
                ))
              ) : (
                <p>No internships available for the selected filters.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InternshipsPageSuspense = () => {
  return (
    <Suspense>
      <InternshipsPage />
    </Suspense>
  )
};

export default InternshipsPageSuspense;
