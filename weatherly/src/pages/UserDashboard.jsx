import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { HiLocationMarker } from "react-icons/hi";
import DateCards from "../components/DateCards";
import Tabs from "../components/Tabs";
import axios from "axios";
import WeatherStats from "../components/WeatherStats";
import HourlyTemps from "../components/HourlyTemps";
import { FixedSizeList as List } from "react-window";

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
      <div className="flex flex-col xl:justify-around xl:flex-row">
        <div className="flex flex-col items-center gap-10 mb-5">
          <SearchBar handleSearch={handleSearch} searchQuery={search} />
          <div className="inline-flex items-center xs:scale-75 -z-20 sm:scale-90">
            <HiLocationMarker fill="#F0E9E9" size={50} />
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
          <div className="p-10 xl:w-[60rem] xl:h-[40rem] border border-none rounded-xl bg-[#adaaaa] bg-opacity-25">
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
                <>
                  {weatherData?.forecast?.forecastday[0]?.hour && (
                    <List
                      height={480}
                      itemCount={24}
                      width={1000}
                      itemSize={120}
                    >
                      {({ index, style }) => {
                        const hourData =
                          weatherData.forecast.forecastday[0].hour[index];
                        return (
                          <div style={style}>
                            <HourlyTemps
                              key={index}
                              time={hourData.time.substring(11)}
                              temp={hourData.temp_c}
                              icon={hourData.condition?.icon}
                            />
                          </div>
                        );
                      }}
                    </List>
                  )}
                </>
              )}
              {activeTab === "3 Day Forecast" && (
                // Render 3 Day Forecast content
                <>
                  <div className="flex flex-col gap-10 xl:flex-row">
                    {weatherData?.forecast?.forecastday
                      .slice(0, 3)
                      .map((weather, index) => (
                        <DateCards
                          key={index} // Ensure each DateCards has a unique key
                          time={weather.date}
                          icon={weather.day.condition.icon}
                          temp={weather.day.avgtemp_c}
                        />
                      ))}
                  </div>
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
