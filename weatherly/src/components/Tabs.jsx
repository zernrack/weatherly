import React from "react";
import PropTypes from "prop-types";

const Tabs = (props) => {
  return (
    <>
      <p className="text-2xl font-bold text-white hover:cursor-pointer hover:underline ">{props.name}</p>
    </>
  );
};

Tabs.propTypes = {
    name: PropTypes.string,
};

export default Tabs;
