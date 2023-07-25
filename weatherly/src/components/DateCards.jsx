import React from "react";
import Sunny from "../assets/Sunny.png";

function DateCards() {
  return (
    <>
      <div className="relative inline-flex flex-col items-center px-5 pt-10 rounded-xl bg-white/30">
        <h1 className="absolute text-3xl font-bold text-white font-poppins">
          12:00 PM
        </h1>
        <img src={Sunny} alt="sunny" className="relative scale-100 left-5"/>
        <h1 className="absolute text-3xl font-extrabold text-white bottom-5 font-poppins">36°</h1>
      </div>
    </>
  );
}

export default DateCards;
