"use client";

import React from "react";

const Button = ({ buttonName }: { buttonName: string }) => {
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(`${buttonName} button clicked`);
  };

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className="w-full py-3 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500"
    >
      {buttonName}
    </button>
  );
};

export default Button;
