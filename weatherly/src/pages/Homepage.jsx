import React from "react";
import UserDashboard from "./UserDashboard";

function Homepage() {
  return (
    <>
      <div className="grid xs:grid-cols-1">
        <UserDashboard />
      </div>
    </>
  );
}

export default Homepage;
