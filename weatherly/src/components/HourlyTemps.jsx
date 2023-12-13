import React from "react";

const HourlyTemps = ({ time, temp, icon }) => {
  return (
    <div className="flex items-center justify-between px-10 py-4 bg-gray-200 bg-opacity-30 rounded-xl">
      <div>
        <p className="text-2xl text-[#F0E9E9] font-semibold">{time}</p>
        <p className="text-3xl text-[#F0E9E9] ">{temp}°C</p>
      </div>

      <img src={icon} alt="Weather Icon" className="w-20 h-20" />
    </div>
  );
};

export default HourlyTemps;
