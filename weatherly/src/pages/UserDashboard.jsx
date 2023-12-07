import React from "react";
import SearchBar from "../components/SearchBar";
import { HiLocationMarker } from "react-icons/hi";
import DateCards from "../components/DateCards";
import Tabs from "../components/Tabs";

function UserDashboard() {
  return (
    <>
    
      <h1 className="mt-10 ml-10 text-4xl font-bold text-[#F0E9E9]">Weatherly.</h1>{/* Header */}
      <div className="flex flex-col xl:justify-around xl:flex-row">
        <div className="flex flex-col items-center gap-10 mb-5">
          <SearchBar />
          <div className="inline-flex items-center xs:scale-75 -z-20 sm:scale-90">
            <HiLocationMarker fill="#F0E9E9" size={50} />
            {/*Change to dyanmic text*/}
            <h1 className="text-4xl font-light text-[#F0E9E9] font-poppins">
              Manila, Philippines
            </h1>
          </div>
        </div>
        <div>
          {/* Forecasts */}
          <div className="p-10 xl:w-[60rem] xl:h-[40rem] border border-black rounded-xl">
            <div className="flex justify-around pt-5 mb-10">
              <Tabs name="Hourly Forecast" />
              <Tabs name="3 Day Forecast" />
            </div>
            <div className="flex justify-center gap-5">
              <DateCards />
              <DateCards />
              <DateCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
