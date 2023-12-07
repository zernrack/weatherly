import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function SearchBar({ searchQuery, handleSearch }) {
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (e.key === "Enter") {
      handleSearch(inputValue);
    }
    e.preventDefault();
  };

  const handleClick = () => {
    handleSearch(inputValue);
  };

  return (
    <>
      <div className="relative mt-5 xs:scale-90">
        <input
          className="px-2 py-2 text-xl rounded-lg w-80"
          type="text"
          value={inputValue}
          placeholder="Search a place..."
          name="PlaceSearch"
          onChange={handleChange}
        />
        <div className="absolute top-2 right-2">
          <button onClick={handleClick} type="button">
            <BsSearch size={30} />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
