import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserDashboard from "./UserDashboard";

function Homepage() {
  const [search, setSearch] = useState();

  return (
    <>
      <div className="grid xs:grid-cols-1">
        <UserDashboard />
        {/* <SearchBar SearchQuery={handleSearch} /> */}
      </div>
    </>
  );
}

export default Homepage;
