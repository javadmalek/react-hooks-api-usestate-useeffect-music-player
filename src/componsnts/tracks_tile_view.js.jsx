import React, { Component } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import TileTrack from "./tile_track.js";
import { FlexboxDiv } from "./layout.js.jsx";

const TracksTileView = ({
  paddingTBDefault,
  trendingTracks,
  onPlayingTrackChangeFn
}) => {
  const items = trendingTracks.map((track, index) => (
    <TileTrack
      flexBasis="20%"
      key={index}
      track={track}
      onPlayingTrackChangeFn={onPlayingTrackChangeFn}
    />
  ));

  return (
    <FlexboxDiv paddingTBDefault={paddingTBDefault} flexWrap="wrap">
      {items}
    </FlexboxDiv>
  );
};

TracksTileView.propTypes = {
  trendingTracks: PropTypes.array,
  onPlayingTrackChangeFn: PropTypes.func
};

TracksTileView.defaultProps = {
  trendingTracks: []
};

export default TracksTileView;
