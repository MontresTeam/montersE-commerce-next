import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
  HiChat,
} from "react-icons/hi";
import {
  FiSend,
  FiShoppingCart,
  FiHeadphones,
  FiTruck,
  FiUpload,
} from "react-icons/fi";

const EcommerceContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
    subscribe: true,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.inquiryType)
      newErrors.inquiryType = "Please select an inquiry type";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setIsLoading(false);
      }, 1500);
    } else {
      setErrors(formErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      message: "",
      subscribe: true,
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-[#1e518e] to-[#0061b0ee]">
        <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-12 h-12 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Thank You for Your Message!
          </h2>
          <p className="text-gray-600 mb-4">
            We've received your inquiry and will get back to you within 24 hours.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600">
              Your reference ID:{" "}
              <span className="font-mono text-[#0061b0]">
                INV-{Math.random().toString(36).substr(2, 6).toUpperCase()}
              </span>
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full py-3 bg-[#0061b0] text-white rounded-lg hover:bg-[#1e518e] transition-colors flex items-center justify-center"
          >
            <FiSend className="mr-2" />
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#fefefe] to-[#f1f1f1ee]">
      <div className="bg-white rounded-2xl shadow-xl max-w-6xl w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Contact Info Section */}
          <div className="bg-gradient-to-br from-[#1e518e] to-[#0061b0ee] text-white p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-blue-100">
                We'd love to hear from you! Fill out the form, and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <HiChat className="mr-2" /> Quick Contact
                </h3>
                <div className="space-y-3 text-blue-100">
                  <p className="flex items-center">
                    <FaWhatsapp className="mr-2 text-lg" />
                    +97142671124
                  </p>
                  <p className="flex items-center">
                    <HiPhone className="mr-2 text-lg" />
                   +97142671124
                  </p>
                  <p className="flex items-center">
                    <HiMail className="mr-2 text-lg" />
                    sales@montres.ae
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <HiLocationMarker className="mr-2" /> Our Office
                </h3>
                <p className="text-blue-100">
                 Montres Watch, Leather Sell & Repair Store , Moza Plaza - 1 Al Khor St - Deira - Dubai
                </p>
                <div className="mt-3 bg-white p-1 rounded-lg">
                  <div className="h-40 bg-gray-200 rounded-md flex items-center justify-center">
                    <span className="text-gray-500">Google Maps Embed</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                {[FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaLinkedinIn].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-3 bg-blue-500/20 text-white rounded-full hover:bg-blue-500/30 transition-colors"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Get In Touch
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                Have questions? We're here to help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0061b0] ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0061b0] ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0061b0] ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0061b0]"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject / Inquiry Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0061b0] ${
                    errors.inquiryType ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select an option</option>
                  <option value="product">Product Information</option>
                  <option value="order">Order Support</option>
                  <option value="return">Return Request</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
                {errors.inquiryType && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.inquiryType}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="How can we help you?"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0061b0] ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Attach File (Optional)
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FiUpload className="w-8 h-8 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, JPG, PNG (MAX. 5MB)
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div>

              {/* Subscribe */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#0061b0] border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                  Subscribe to our newsletter for updates and offers
                </label>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#0061b0] text-white py-3 rounded-lg hover:bg-[#1e518e] transition-colors flex items-center justify-center disabled:opacity-75"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Privacy Note */}
            <div className="mt-6 bg-gray-50 p-4 rounded-lg text-center text-sm text-gray-600">
              We respect your privacy. Your information will only be used to respond to your inquiry.
              <a href="#" className="text-[#0061b0] underline ml-1">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceContactForm;