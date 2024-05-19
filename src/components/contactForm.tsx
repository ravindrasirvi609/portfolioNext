"use client";
import axios from "axios";
import React, { useState } from "react";

const contactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    message: "",
  });
  const [Loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: { target: { id: any; value: any } }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/userData", formData);
      console.log(response);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting user:", error);
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        mobileNo: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <div className="w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Contact
      </p>

      <form
        className="w-full max-w-md px-4 relative z-10"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobileNo"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Mobile No.
          </label>
          <input
            type="number"
            id="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Mobile No"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            rows={4}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        {Loading && <div>Loading...</div>}
        {isSubmitted && <div>Form submitted successfully!</div>}
        <button
          type="submit"
          disabled={Loading}
          className="w-full mb-16 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default contactForm;
