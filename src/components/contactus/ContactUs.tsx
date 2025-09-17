"use client";
import React, { useState } from "react";
import { Loader2 } from "lucide-react"; // spinner

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    budget: "",
    services: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

const validate = () => {
  let newErrors: { [key: string]: string } = {};
  
  if (!formData.firstName) newErrors.firstName = "First name is required.";
  if (!formData.lastName) newErrors.lastName = "Last name is required.";
  
  if (!formData.email) {
    newErrors.email = "Email is required.";
  } else {
    // Simple email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
  }

  if (!formData.services) newErrors.services = "Please describe the services you are interested in.";

  return newErrors;
};



  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        console.error(result.error || "Something went wrong");
        setErrors({ general: result.error || "Something went wrong" });
        return;
      }

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        companyWebsite: "",
        budget: "",
        services: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error:", error);
      setErrors({ general: "Internal server error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-start px-4 sm:px-6 lg:px-16 py-40">
      <div className="text-center mb-24 w-full">
        <h1 className="text-5xl md:text-6xl font-light tracking-wide mb-6">
          Contact Us
        </h1>
        <p className="text-offwhite text-lg max-w-2xl mx-auto">
          We would love to hear from you! Please fill out the form and our team
          will get back to you shortly.
        </p>
      </div>

      <div className="max-w-8xl grid grid-cols-1 lg:grid-cols-2 items-start gap-8 md:gap-6 lg:gap-0">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-5xl ">Please fill out the contact form</h2>
          <p className="text-offwhite text-lg leading-relaxed max-w-3xl">
            We’re here to help! Share your message, and we’ll get back to you promptly.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-xl bg-black rounded-2xl border border-white p-10">
            <div className="space-y-6">
              
              {/* Name Fields Flex */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2 text-white">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-black border border-white rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2 text-white">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-black border border-white rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black border border-white rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Company Name & Website Flex */}
                <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2 text-white">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 bg-black border border-white rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2 text-white">
                    Company Website (Optional)
                  </label>
                  <input
                    type="url"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="w-full px-4 py-3 bg-black border border-white rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                  />
                </div>
              </div>

              {/* Budget Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Project Budget (Optional)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white rounded-full text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                >
                  <option value="">Select budget</option>
                  <option value="<500">&lt;$500</option>
                  <option value="500-2000">$500 - $2,000</option>
                  <option value="2000-5000">$2,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value=">10000">&gt;$10,000</option>
                </select>
              </div>

              {/* Services Interested In */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Services Interested In *
                </label>
                <textarea
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  placeholder="Briefly describe what services you're interested in..."
                  rows={3}
                  className="w-full px-4 py-3 bg-black border border-white rounded-3xl text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                />
                {errors.services && (
                  <p className="text-red-500 text-sm mt-1">{errors.services}</p>
                )}
              </div>

              {/* Extra Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Anything else you'd like to add..."
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-white rounded-3xl text-white placeholder-white/50 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full flex cursor-pointer items-center justify-center gap-2 py-3 bg-gradient-to-b from-[#5C5FFE] to-[#A3A5FF] rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>Send Message</>
                )}
              </button>

              {/* Success Message */}
              {submitted && !loading && (
                <p className="text-green-400 text-center font-medium mt-4">
                  🎉 Your message has been successfully submitted!
                </p>
              )}

              {/* General Error */}
              {errors.general && (
                <p className="text-red-500 text-center mt-4">{errors.general}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
