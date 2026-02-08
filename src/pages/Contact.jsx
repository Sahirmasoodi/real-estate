import React, { useState } from "react";

const Contact = ({ dark }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      // Your Web3Forms access key
      data.append("access_key", "e531d982-107d-41a8-bead-6eabefeb4f5b");

      const object = Object.fromEntries(data);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          message: ""
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div id="contact" className="mb-10 md:mb-20 px-5 md:px-0">

      {/* Header */}
      <div className={`text-center text-4xl ${dark && "text-white"}`}>
        <span className="font-bold me-2">Get In</span>
        <span>Touch</span>

        <p className="text-center text-sm md:text-lg text-gray-500 mt-3">
          Looking to Buy, Sell or Rent?  
          <br /> Our Brokers Are Here to Help
        </p>
      </div>

      {/* Form Card */}
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
              className={`peer w-full h-12 border px-4 rounded-xl outline-none ${
                dark
                  ? "bg-black border-gray-700 text-white"
                  : "bg-blue-50 border-gray-300"
              }`}
              required
            />
            <label className="absolute left-4 -top-2.5 text-sm bg-blue-50 px-1 text-gray-500">
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
              className={`peer w-full h-12 border px-4 rounded-xl outline-none ${
                dark
                  ? "bg-black border-gray-700 text-white"
                  : "bg-blue-50 border-gray-300"
              }`}
              required
            />
            <label className="absolute left-4 -top-2.5 text-sm bg-blue-50 px-1 text-gray-500">
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
              className={`peer w-full h-36 border p-4 rounded-xl outline-none ${
                dark
                  ? "bg-black border-gray-700 text-white"
                  : "bg-blue-50 border-gray-300"
              }`}
              required
            />
            <label className="absolute left-4 -top-2.5 text-sm bg-blue-50 px-1 text-gray-500">
              Message / Property Requirement
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#374151] hover:opacity-90 text-white py-4 rounded-xl font-semibold tracking-wide transition-all active:scale-[0.97]"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

          {success && (
            <p className="text-green-500 text-center mt-4">
              Message sent successfully!
            </p>
          )}

        </form>
      </div>
    </div>
  );
};

export default Contact;
