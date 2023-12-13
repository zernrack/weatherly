import React from "react";

const WeatherStats = ({
  placeTemp,
  placeWeather,
  weatherIcon,
  cloudinessPercent,
  humidityPercent,
  windSpeed,
}) => {
  return (
    <>
      <h1 className="font-bold text-[#F0E9E9] text-center text-9xl">
        {placeTemp}°c
      </h1>
      <h2 className="text-[#F0E9E9] inline-flex items-center text-2xl translate-x-10 xl:translate-x-24">
        <img
          className="w-24 h-24 "
          src={`http:${weatherIcon}`}
          alt="Weather Icon"
        />{" "}
        {placeWeather}
      </h2>

      <div>
        <ul className="flex gap-3 xl:gap-16 mt-10 text-[#F0E9E9] justify-between text-2xl">
          <li className="inline-flex flex-col items-center">
            <p>{cloudinessPercent}%</p>
            <p>Cloudiness</p>
          </li>
          <li className="inline-flex flex-col items-center">
            <p>{humidityPercent}%</p>
            <p>Humidity</p>
          </li>
          <li className="inline-flex flex-col items-center">
            <p>{windSpeed}km/h</p>
            <p>Wind Speed</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WeatherStats;
