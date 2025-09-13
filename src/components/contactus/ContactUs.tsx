"use client";
import React, { useState } from "react";
import { Loader2 } from "lucide-react"; // spinner

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message is required.";
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
      await new Promise((res) => setTimeout(res, 2000)); // fake API call
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // ✅ 3 sec baad message hide ho jaye
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
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
          <h2 className="text-3xl md:text-5xl ">
            Please fill out the contact form
          </h2>
          <p className="text-offwhite text-lg leading-relaxed max-w-3xl">
          We’re here to help! Share your message, and we’ll get back to you promptly.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md bg-black rounded-2xl border border-white p-10">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-black border border-white rounded-full text-white placeholder-white placeholder:font-light  focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black border border-white rounded-full text-white placeholder-white placeholder:font-light  focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi, I am just wondering where can...."
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-white rounded-3xl text-white placeholder-white placeholder:font-light  focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

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

              {/* ✅ Success Message after submit */}
              {submitted && !loading && (
                <p className="text-green-400 text-center font-medium mt-4">
                  🎉 Your message has been successfully submitted!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
