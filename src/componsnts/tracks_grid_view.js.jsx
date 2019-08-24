import React, { Component } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { FlexboxDiv, TextTitle, TextSubtitle } from "./layout.js";

const fmtMSS = s => (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;

const renderTrack = (track, onPlayingTrackChangeFn, index) => {
  return (
    <FlexboxDiv w100 key={index} onClick={() => onPlayingTrackChangeFn(track)}>
      <FlexboxDiv>{++index}</FlexboxDiv>
      <FlexboxDiv>action</FlexboxDiv>
      <FlexboxDiv flexGrow="3">{track.name}</FlexboxDiv>
      <FlexboxDiv flexGrow="3">{track.artistName}</FlexboxDiv>
      <FlexboxDiv>{track.plays}</FlexboxDiv>
      <FlexboxDiv>{fmtMSS(track.duration)}</FlexboxDiv>
    </FlexboxDiv>
  );
};

const TracksGridView = ({ trendingTracks, onPlayingTrackChangeFn }) => {
  const gridHeader = (
    <FlexboxDiv w100>
      <FlexboxDiv>#</FlexboxDiv>
      <FlexboxDiv>action</FlexboxDiv>
      <FlexboxDiv flexGrow="3">Title</FlexboxDiv>
      <FlexboxDiv flexGrow="3">Artist</FlexboxDiv>
      <FlexboxDiv># Plays</FlexboxDiv>
      <FlexboxDiv>Duration</FlexboxDiv>
    </FlexboxDiv>
  );

  const items = trendingTracks.map((track, index) =>
    renderTrack(track, onPlayingTrackChangeFn, index)
  );

  return (
    <FlexboxDiv flexDirection="column">
      {gridHeader}
      {items}
    </FlexboxDiv>
  );
};

TracksGridView.propTypes = {
  trendingTracks: PropTypes.array,
  onPlayingTrackChangeFn: PropTypes.func
};

TracksGridView.defaultProps = {
  trendingTracks: []
};

export default TracksGridView;
