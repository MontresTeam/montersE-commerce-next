import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const ForgotPasswordForm = ({ setActiveTab }) => {
  const [emailSent, setEmailSent] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleResetSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to send the reset email
    console.log("Reset email would be sent to:", resetEmail);
    setEmailSent(true);
    setResetEmail("");
  };

  return (
    <div className="space-y-5">
      <button
        type="button"
        className="flex items-center text-blue-600 hover:text-blue-500 mb-4"
        onClick={() => setActiveTab("login")}
      >
        <FaArrowLeft className="mr-2" />
        Back to Login
      </button>

      <div>
        <h3 className="text-xl font-semibold mb-2">
          {emailSent ? "Check your email" : "Reset your password"}
        </h3>
        {!emailSent && (
          <p className="text-sm text-gray-600">
            We'll send you a link to reset your password
          </p>
        )}
      </div>

      {!emailSent ? (
        <>
          <form className="space-y-4" onSubmit={handleResetSubmit}>
            <div>
              <label
                htmlFor="reset-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="reset-email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r bg-[#2d5582]  hover:bg-[#2d5587] text-white py-2.5 px-4 rounded-md transition duration-200 shadow-md hover:shadow-lg"
            >
              SEND RESET LINK
            </button>
          </form>
        </>
      ) : (
        <div className="text-center py-4">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-gray-700 mb-2 font-medium">
            Password reset link sent!
          </p>
          <p className="text-sm text-gray-600 mb-4">
            We've sent a password reset link to your email address.
            Please check your inbox.
          </p>
          <p className="text-sm text-gray-500">
            Didn't receive the email?{" "}
            <button
              type="button"
              className="text-blue-600 hover:text-blue-500 font-medium"
              onClick={() => setEmailSent(false)}
            >
              Resend
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordForm;