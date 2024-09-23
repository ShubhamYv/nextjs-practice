import React from "react";
import Appbar from "./Appbar";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Appbar />
      {children}
    </div>
  )
}