import React, { useState } from "react";
import HomepageIcon from "../assets/HomepageIcon.svg";
import SearchBar from "../components/SearchBar";
import UserDashboard from "./UserDashboard";

function Homepage() {
  const [search, setSearch] = useState();
  const [clicked, setClicked] = useState(true);

  const handleSearch = () => {
    setClicked(false);
  };
  return (
    <>
      <div className="grid xs:grid-cols-1">
        {clicked ? (
          <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
            <img src={HomepageIcon} alt="Sun Icon" width={400} />
            <span className="font-bold text-white lg:text-3xl xs:text-2xl font-poppins">
              WELCOME TO WEATHERLY
            </span>
            <h3 className="italic text-white font-poppins">
              Just your typical weather app
            </h3>
            <SearchBar SearchQuery={handleSearch} />
          </div>
        ) : (
          <UserDashboard />
        )}
      </div>
    </>
  );
}

export default Homepage;
