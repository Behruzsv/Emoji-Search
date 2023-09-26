import React from "react";

const Search = (props) => {
  return (
    <form>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
      </label>
      <div className="relative">
        <div className="">
        </div>
        <input
          type="search"
          id="search"
          className="w-full h-10 bg-white border border-gray-400 rounded-md p-4 focus:outline-none focus:border-blue-500"
          onChange={props.onChange}
          required
        />
      </div>
    </form>
  );
};

export default Search;
