"use client";
import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start px-4 sm:px-6 lg:px-16 py-48">
      {/* Main Heading */}
      <div className="text-center mb-24 w-full">
        <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6">Contact Us</h1>
        <p className="text-offwhite text-lg max-w-2xl mx-auto">
          We would love to hear from you! Please fill out the form and our team will get back to you shortly.
        </p>
      </div>

      {/* Content Container */}
      <div className="max-w-8xl grid grid-cols-1 lg:grid-cols-2 gap-0 items-start gap-8 md:gap-6 lg:gap-0">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-5xl ">Please fill out the contact form</h2>
          <p className="text-offwhite text-lg leading-relaxed max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus sagittis sagittis et volutpat 
            scelerisque rutrum. Mi augue non neque sed.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex justify-center ">
          <div className="w-full max-w-md bg-black rounded-2xl border border-white p-10">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-black border border-white rounded-lg text-white placeholder-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black border border-white rounded-lg text-white placeholder-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi, I am just wondering where can...."
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-white rounded-lg text-white placeholder-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-gradient-to-b from-[#5C5FFE] to-[#A3A5FF] rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
