import React from "react";
import HomepageIcon from "../assets/HomepageIcon.svg";

function Homepage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
        <img src={HomepageIcon} alt="Sun Icon" width={400} />
        <span className="font-bold text-white lg:text-3xl xs:text-2xl font-poppins">
          WELCOME TO WEATHERLY
        </span>
        <h3 className="italic text-white font-poppins">
          Just your typical weather app
        </h3>
        <input type="search" placeholder="Search a place..." name="PlaceSearch" />
      </div>
    </>
  );
}

export default Homepage;
