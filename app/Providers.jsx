"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div
        className="dark:bg-gray-700 dark:text-gray-200 min-h-screen transition-colors duration-300 text-gray700 select-none

      
      "
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
