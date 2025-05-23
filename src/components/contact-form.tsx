"use client";
import { send_message } from "@/app/actions/actions";
import { Contact } from "@/types/contact";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<Contact>({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("formData", formData);
    const res = await send_message(formData);

    setLoading(false);
    if (res) {
      toast.success("Message sent successfully! Thanks for contacting us!");
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        companyName: "",
        message: "",
      })
    } else toast.error("Failed to send message");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 md:space-y-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-500"
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
            className="w-full bg-transparent border-b-2 border-neutral-700 placeholder:text-neutral-500 py-2 px-1 focus:outline-none focus:border-primary transition-colors"
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
            className="w-full bg-transparent border-b-2 border-neutral-700 placeholder:text-neutral-500 py-2 px-1 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-neutral-700 placeholder:text-neutral-500 py-2 px-1 focus:outline-none focus:border-primary transition-colors"
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
          className="w-full bg-transparent border-b-2 border-neutral-700 placeholder:text-neutral-500 py-2 px-1 focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Additional Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full bg-transparent border-b-2 border-neutral-700 placeholder:text-neutral-500 py-2 px-1 focus:outline-none focus:border-primary transition-colors resize-none"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="border flex border-neutral-600 px-10 py-4 font-semibold  items-center cursor-pointer text-base hover:border-primary hover:text-primary transition duration-500 group mb-20"
        >
          <span className="bg-primary mr-2 rounded-full size-1 group-hover:bg-white transition duration-500" />
          {loading ? "Sending...." : "Submit"}
        </button>
      </div>
    </form>
  );
}
