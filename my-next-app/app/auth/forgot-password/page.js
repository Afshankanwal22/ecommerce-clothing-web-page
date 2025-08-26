"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    setSubmitted(true);
  };

  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 pt-16 pb-12">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md border border-gray-100">
        <h2 className="text-3xl font-extrabold text-center text-teal-600 mb-2">
          Forgot Password
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Enter your email and we will send you reset instructions
        </p>

        {submitted ? (
          <p className="text-center text-green-600 font-medium">
            Check your email! Reset link sent to {email}.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 shadow-md"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <p className="text-sm text-center mt-6 text-gray-600">
          Remembered your password?{" "}
          <Link href="/auth/login" className="text-teal-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
