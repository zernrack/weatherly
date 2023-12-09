import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { HiLocationMarker } from "react-icons/hi";
import DateCards from "../components/DateCards";
import Tabs from "../components/Tabs";
import axios from "axios";
import WeatherStats from "../components/WeatherStats";

function UserDashboard() {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [activeTab, setActiveTab] = useState("Hourly Forecast");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSearch = async (value) => {
    setSearch(value);
    console.log("Search:", value.toLowerCase());

    try {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_APP_KEY
        }&q=${value}&days=3&aqi=no`
      );
      setWeatherData(res.data);
      console.log("Results: ", weatherData);
    } catch (err) {
      console.error("Error fetching weather data:", err);
    }
  };

  useEffect(() => {
    // Fetch initial weather data for the default location (Manila, Philippines)
    const defaultLocation = "Manila";

    // Call the handleSearch function with the default location
    handleSearch(defaultLocation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <h1 className="mt-10 ml-10 text-4xl font-bold text-[#F0E9E9]">
        Weatherly.
      </h1>
      {/* Header */}
      <div className="flex flex-col xl:justify-around xl:flex-row">
        <div className="flex flex-col items-center gap-10 mb-5">
          <SearchBar handleSearch={handleSearch} searchQuery={search} />
          <div className="inline-flex items-center xs:scale-75 -z-20 sm:scale-90">
            <HiLocationMarker fill="#F0E9E9" size={50} />
            {/*Change to dyanmic text*/}
            <h1 className="text-4xl font-light text-[#F0E9E9] font-poppins">
              {weatherData?.location?.name}, {weatherData?.location?.country}
            </h1>
          </div>

          <div>
            <WeatherStats
              placeTemp={weatherData?.current?.temp_c}
              weatherIcon={weatherData?.current?.condition?.icon}
              placeWeather={weatherData?.current?.condition?.text}
              cloudinessPercent={weatherData?.current?.cloud}
              humidityPercent={weatherData?.current?.humidity}
              windSpeed={weatherData?.current?.wind_kph}
            />
          </div>
        </div>
        <div>
          {/* Forecasts */}
          <div className="p-10 xl:w-[60rem] xl:h-[40rem] border border-black rounded-xl">
            <div className="flex justify-around pt-5 mb-10">
              <Tabs
                name="Hourly Forecast"
                isActive={activeTab === "Hourly Forecast"}
                onClick={() => handleTabClick("Hourly Forecast")}
              />
              <Tabs
                name="3 Day Forecast"
                isActive={activeTab === "3 Day Forecast"}
                onClick={() => handleTabClick("3 Day Forecast")}
              />
            </div>
            <div className="flex justify-center gap-5">
              {activeTab === "Hourly Forecast" && (
                // Render Hourly Forecast content for 24 hours
                <></>
              )}
              {activeTab === "3 Day Forecast" && (
                // Render 3 Day Forecast content
                <>
                  {weatherData?.forecast?.forecastday
                    .slice(0, 3)
                    .map((day, index) => (
                      <DateCards
                        key={index} // Ensure each DateCards has a unique key
                        time={day.date}
                        icon={day.day.condition.icon}
                        temp={day.day.avgtemp_c}
                      />
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
