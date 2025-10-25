import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex justify-center bg-[rgb(239,242,236)] min-h-screen relative">
      {/* Added top padding here */}
      <div className="pt-20 pb-10">
        {/* Login Card */}
        <div className="bg-white shadow-lg rounded-2xl px-8 py-6 w-80 sm:w-96 text-center mx-auto">
          <h2 className="text-lg font-semibold mb-2">Login</h2>
          <p className="text-gray-500 mb-5 text-sm">
            Hey, Enter your details to get sign in<br />to your account
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Email / Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
            <input
              type="password"
              placeholder="Passcode"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
            <p className="text-sm text-[rgb(76,228,32)] text-left cursor-pointer">
              Having trouble in sign in?
            </p>

            <button
              type="submit"
              className="w-full  bg-[rgb(76,228,32)] text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition-all text-sm"
            >
              Sign In
            </button>
          </form>

          <div className="my-4 text-gray-400 text-sm">— Or Sign in with —</div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4 text-xl">
            <button className="p-2 border rounded-full hover:bg-gray-100">
              <FcGoogle />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-100">
              <FaApple />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-100 text-[#1877F2]">
              <FaFacebook />
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <span className="text-[rgb(76,228,32)] font-semibold cursor-pointer">
              Request Now
            </span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-center text-gray-400 text-xs w-full">
        © wework 2022 | Privacy Policy
      </div>
    </div>
  );
}
