import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4 bg-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Get In Touch</h2>
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white transition duration-300 ease-in-out bg-gray-900 rounded-md cursor-pointer hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;