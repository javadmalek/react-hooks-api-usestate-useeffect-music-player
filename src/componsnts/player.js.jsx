import React from "react";
import PropTypes from "prop-types";

const Player = ({ track }) => {
  return <div>{`Player For:  ${track.name}`}</div>;
};

Player.propTypes = {};

export default Player;
