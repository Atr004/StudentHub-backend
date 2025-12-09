// src/components/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold text-[#A2C13E]">StudentHub</h1>
        <div className="space-x-4">
          <Link
            to="/signin"
            className="px-4 py-2 font-semibold text-white bg-[#60C13E] rounded hover:bg-[#A2C13E] transition"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 font-semibold text-white bg-[#C19F3E] rounded hover:bg-[#A2C13E] transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold mb-6 text-[#A2C13E]">
            Welcome to StudentHub
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            A platform to share and explore textbooks, notes, and study materials
            from students around you. Sign up and join our growing community today!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/register"
              className="px-6 py-3 font-semibold text-white bg-[#60C13E] rounded hover:bg-[#A2C13E] transition"
            >
              Get Started
            </Link>
            <Link
              to="/signin"
              className="px-6 py-3 font-semibold text-[#A2C13E] border-2 border-[#A2C13E] rounded hover:bg-[#A2C13E] hover:text-white transition"
            >
              Already a member?
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
