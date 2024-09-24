import React from "react";
import DiscountBar from "./DiscountBar";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DiscountBar />
      {children}
    </div>
  )
} 