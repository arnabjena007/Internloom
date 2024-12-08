import React from 'react';

const SearchBar = () => (
  <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 -mb-24 relative">
    <div className="flex flex-wrap -mx-2">
      <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Location"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <div className="w-full md:w-1/6 px-2">
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Search
        </button>
      </div>
    </div>
  </div>
);

export default SearchBar;
