// Tabs.jsx
import React from "react";
import PropTypes from "prop-types";

const Tabs = ({ name, isActive, onClick }) => {
  return (
    <>
      <p
        className={`text-xl xl:text-2xl font-bold text-[#F0E9E9] hover:cursor-pointer ${
          isActive ? "border-[#F0E9E9] border-b-8 pb-1" : ""
        }`}
        onClick={onClick}
      >
        {name}
      </p>
    </>
  );
};

Tabs.propTypes = {
  name: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Tabs;
