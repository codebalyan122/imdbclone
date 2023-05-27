"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [search, setsearch] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder="Search Movie"
        className="w-full h-14 rounded-sm placeholder:gray-500 
         outline-none bg-transparent flex-1   
        "
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
