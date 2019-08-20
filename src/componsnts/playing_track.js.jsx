import React from "react";
import PropTypes from "prop-types";

const PlayingTrack = ({ track }) => {
  return <div>{`PlayingTrack ${track.name}`}</div>;
};

PlayingTrack.propTypes = {};

export default PlayingTrack;
