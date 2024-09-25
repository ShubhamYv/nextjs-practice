"use client"

import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";

const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:3000/signin", {
        email,
        password,
      });
      console.log("Sign in successful:", response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Sign in failed:", error.response?.data.message || "Unknown error");
      } else {
        console.error("Error during sign-in:", (error as Error).message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-slate-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Sign in
        </h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col w-full">
            <label className="text-gray-300">Email:</label>
            <input
              className="w-full mt-2 p-3 rounded-md bg-gray-700 text-white"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="shubham@gmail.com"
              required
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="text-gray-300">Password:</label>
            <input
              className="w-full mt-2 p-3 rounded-md bg-gray-700 text-white"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex justify-center">
            <Button buttonName="Sign In" onClick={handleSignIn} />
          </div>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign up here
          </a>.
        </p>
      </div>
    </div>
  );
};

export default SignInComponent;
