import React from "react";

function DateCards({ time, icon, temp }) {
  // Check if any essential prop is missing
  if (!time || !icon || !temp) {
    // If any prop is missing, return null
    return null;
  }

  return (
    <div className="flex flex-col items-center px-10 py-10 rounded-xl bg-white/30">
      <h1 className="text-3xl font-bold text-[#F0E9E9] font-poppins">
        {time}
      </h1>
      <img src={icon} alt="sunny" className="w-24 h-24" />
      <h1 className="text-3xl font-extrabold text-[#F0E9E9] bottom-5 font-poppins">
        {temp}°
      </h1>
    </div>
  );
}

export default DateCards;
