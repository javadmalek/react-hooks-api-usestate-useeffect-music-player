import React, { Component } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import TileTrack from "./tile_track.js";
import { FlexboxDiv, TextTitle, TextSubtitle } from "./layout.js.jsx";

const TracksTileView = ({ trendingTracks, onPlayingTrackChangeFn }) => {
  const items = trendingTracks.map((track, index) => (
    <TileTrack
      key={index}
      track={track}
      onPlayingTrackChangeFn={onPlayingTrackChangeFn}
    />
  ));

  return <FlexboxDiv flexWrap="wrap">{items}</FlexboxDiv>;
};

TracksTileView.propTypes = {
  trendingTracks: PropTypes.array,
  onPlayingTrackChangeFn: PropTypes.func
};

TracksTileView.defaultProps = {
  trendingTracks: []
};

export default TracksTileView;
