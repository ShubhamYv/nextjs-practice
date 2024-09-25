"use client";

import React from "react";

const Button = ({ buttonName, onClick }: { buttonName: string; onClick: () => void }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full py-3 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500"
    >
      {buttonName}
    </button>
  );
};

export default Button;
