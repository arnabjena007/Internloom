"use client"; // Ensures client-side rendering in Next.js
import React from "react";

const Filters = ({ filters, setFilters }) => {
  const handleLocationChange = (event) => {
    setFilters({ ...filters, location: event.target.value });
  };

  const handleTypeChange = (event) => {
    setFilters({ ...filters, type: event.target.value });
  };

  const handleStipendRangeChange = (event) => {
    const [min, max] = event.target.value.split("-");
    setFilters({ ...filters, stipendRange: [Number(min), Number(max)] });
  };

  const handleDurationChange = (event) => {
    setFilters({ ...filters, duration: event.target.value });
  };

  return (
    <div>
      <h3 className="text-xl text-black font-bold mb-4">Filters</h3>

      {/* Location Filter */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Location</label>
        <select
          className="w-full border text-black border-gray-300 rounded-md p-2"
          value={filters.location}
          onChange={handleLocationChange}
        >
          <option value="">All Locations</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Delhi">Delhi</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>

      {/* Type Filter */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Type</label>
        <select
          className="w-full border border-gray-300 text-black rounded-md p-2"
          value={filters.type}
          onChange={handleTypeChange}
        >
          <option value="">All Types</option>
          <option value="Work From Home">Work From Home</option>
          <option value="In-Office">In-Office</option>
        </select>
      </div>

      {/* Stipend Range Filter */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Stipend Range</label>
        <select
          className="w-full border border-gray-300 text-black rounded-md p-2"
          onChange={handleStipendRangeChange}
        >
          <option value="0-100000">All</option>
          <option value="0-5000">₹0 - ₹5,000</option>
          <option value="5000-10000">₹5,000 - ₹10,000</option>
          <option value="10000-20000">₹10,000 - ₹20,000</option>
        </select>
      </div>

      {/* Duration Filter */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Duration</label>
        <select
          className="w-full border border-gray-300 text-black rounded-md p-2"
          value={filters.duration}
          onChange={handleDurationChange}
        >
          <option value="">All Durations</option>
          <option value="1 Month">1 Month</option>
          <option value="2 Months">2 Months</option>
          <option value="3+ Months">3+ Months</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
