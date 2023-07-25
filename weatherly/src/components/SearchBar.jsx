import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchBar({SearchQuery}) {
  return (
    <>
      <div className="relative mt-2 xs:scale-90">
        <input
          className="px-2 py-2 text-xl rounded-lg w-80"
          type="input"
          placeholder="Search a place..."
          name="PlaceSearch"
        />
        <div className="absolute top-2 right-2">
          <button onClick={SearchQuery} type="button">
            <BsSearch size={30} />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
