"use client";
import React, { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  });
  return (
    <div className="text-center mt-10  space-y-8 ">
      <h1 className=" text-red-600 font-bold text-3xl">
        Something wrong happend...
      </h1>
      <button
        className=" text-gray-500 rounded hover:text-amber-600 transition-all duration-0.3 ease-in-out text-2xl text-white"
        onClick={() => reset()}
      >
        Click me
      </button>
    </div>
  );
}

export default Error;
