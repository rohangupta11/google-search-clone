import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "./contexts/ResultContextProvider";
import Links from "./Links";
const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-90 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 pr-9 text-black hover:shadow-lg"
        placeholder="Search Google or type a URL"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button type="button" className="absolute top-2 right-20 text-2xl text-gray-500" onClick={()=>setText("")}>
        <i className="fa-solid fa-xmark"></i>
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
