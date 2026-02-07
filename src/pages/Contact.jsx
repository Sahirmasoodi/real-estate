import React, { useState } from "react";

const Contact = ({ dark }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form Data:", formData);
    alert("Your inquiry has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <div id="contact" className="py-24 px-5 md:px-0">

      {/* Header */}
      <div className={`text-center text-4xl ${dark && "text-white"}`}>
        <span className="font-bold me-2">Get In</span>
        <span>Touch</span>

        <p className="text-center text-sm md:text-lg text-gray-500 mt-3">
          Looking to Buy, Sell or Rent?  
          <br /> Our Brokers Are Here to Help
        </p>
      </div>

      {/* Glass Card */}
      <div className="flex justify-center mt-14">
        <form
          onSubmit={handleSubmit}
          className={`w-full md:w-[640px] p-10 rounded-xl shadow-sm border ${
            dark
              ? "bg-black border-gray-700"
              : "bg-blue-50 border-gray-200"
          }`}
        >

          {/* Name */}
          <div className="relative mb-8">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder=" "
              className={`peer w-full h-12 border px-4 rounded-xl outline-none transition-all ${
                dark
                  ? "bg-black border-gray-700 text-white"
                  : "bg-blue-50 border-gray-300"
              }`}
              required
            />
            <label
              className="absolute left-4 -top-2.5 text-sm bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm"
            >
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative mb-8">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder=" "
              className={`peer w-full h-12 border px-4 rounded-xl outline-none transition-all ${
                dark
                  ? "bg-black border-gray-700 text-white"
                  : "bg-blue-50 border-gray-300"
              }`}
              required
            />
            <label
              className="absolute left-4 -top-2.5 text-sm bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm"
            >
              Email
            </label>
          </div>

          {/* Message */}
          <div className="relative mb-10">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full h-36 border p-4 rounded-xl outline-none transition-all ${
                dark
                  ? "bg-black border-gray-700 text-white"
                  : "bg-blue-50 border-gray-300"
              }`}
              required
            />
            <label
              className="absolute left-4 -top-2.5 text-sm bg-white px-1 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm"
            >
              Message / Property Requirement
            </label>
          </div>

          {/* Submit */}
          <button
            className="w-full bg-[#374151] hover:opacity-90 text-white py-4 rounded-xl font-semibold tracking-wide transition-all active:scale-[0.97]"
          >
            Send Inquiry
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
