import React from "react";
import SearchBar from "../components/SearchBar";
import { HiLocationMarker } from "react-icons/hi";
import DateCards from "../components/DateCards";

function UserDashboard() {
  return (
    <>
      <div className="flex flex-col items-center h-screen gap-10 bg-blue-500 justifiy-center">
        <SearchBar />
        <div className="inline-flex items-center xs:scale-75 sm:scale-90">
          <HiLocationMarker fill="white" size={50} />
          {/*Change to dyanmic text*/}
          <h1 className="text-4xl font-bold text-white font-poppins">
            MANILA,PH
          </h1>
        </div>
        <div className="">
          <DateCards />
          <DateCards />
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
