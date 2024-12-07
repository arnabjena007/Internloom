import React from 'react';
import { MapPin, Calendar, DollarSign } from 'lucide-react';

const InternshipCard = ({ title, company, location, duration, stipend }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-lg text-black font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{company}</p>
    <div className="flex items-center text-gray-500 mb-2">
      <MapPin size={16} className="mr-2" />
      <span>{location}</span>
    </div>
    <div className="flex items-center text-gray-500 mb-2">
      <Calendar size={16} className="mr-2" />
      <span>{duration}</span>
    </div>
    <div className="flex items-center text-gray-500">
      <DollarSign size={16} className="mr-2" />
      <span>{stipend}</span>
    </div>
    <div className="text-center mt-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
        Apply Now
      </button>
    </div>
  </div>
);

export default InternshipCard;
