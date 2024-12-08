import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl text-black font-bold mb-4">Contact Us</h2>
        <input type="text" placeholder="Your Name" className="border rounded-lg py-2 px-4 w-full mb-4" />
        <input type="email" placeholder="Your Email" className="border rounded-lg py-2 px-4 w-full mb-4" />
        <textarea placeholder="Your Message" className="border rounded-lg py-2 px-4 w-full mb-4" rows="4" />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
