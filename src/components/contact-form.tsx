"use client";

import type React from "react";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Your Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Additional Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full bg-transparent border-b border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors resize-none"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="flex items-center bg-transparent border border-neutral-700 hover:border-primary px-6 py-2 transition-colors"
        >
          <span className="h-2 w-2 bg-priborder-primary rounded-full mr-2"></span>
          Submit
        </button>
      </div>
    </form>
  );
}
