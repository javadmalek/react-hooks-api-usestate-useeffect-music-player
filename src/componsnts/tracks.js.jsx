import React, { Component } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const renderTrack = (track, onPlayingTrackChangeFn) => {
  return (
    <TrackDiv key={track.id} onClick={() => onPlayingTrackChangeFn(track)}>
      <h1>{track.name || <Skeleton />}</h1>
      {track.artistName || <Skeleton count={10} />}
    </TrackDiv>
  );
};

const Tracks = ({ trendingTracks, onPlayingTrackChangeFn }) => {
  const items = trendingTracks.map(track =>
    renderTrack(track, onPlayingTrackChangeFn)
  );
  return <div>{items}</div>;
};

Tracks.propTypes = {
  trendingTracks: PropTypes.array,
  onPlayingTrackChangeFn: PropTypes.func
};

Tracks.defaultProps = {
  trendingTracks: []
};

const TrackDiv = styled.div`
  font-size: 20px;
  line-height: 2;
  width: 100;
`;

export default Tracks;
