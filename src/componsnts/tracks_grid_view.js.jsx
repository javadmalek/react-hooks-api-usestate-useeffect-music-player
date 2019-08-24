import React, { Component } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { FlexboxDiv, TextTitle, TextSubtitle } from "./layout.js";
import camelcaseKeys from "camelcase-keys";
import { formatMSS, Routes } from './helper';

const onLikeClick = id => {
  fetch(Routes.postLikeUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*"
    },
    body: `id=${id}`
  })
    .then(response => response.json())
    .then(data => console.log(camelcaseKeys(data)));
};

const renderTrack = (track, onPlayingTrackChangeFn, index) => {
  return (
    <FlexboxDiv w100 key={index}>
      <FlexboxDiv onClick={() => onPlayingTrackChangeFn(track)}>
        {++index}
      </FlexboxDiv>
      <FlexboxDiv onClick={() => onLikeClick(track.id)}>like!</FlexboxDiv>
      <FlexboxDiv onClick={() => onPlayingTrackChangeFn(track)} flexGrow="3">
        {track.name}
      </FlexboxDiv>
      <FlexboxDiv onClick={() => onPlayingTrackChangeFn(track)} flexGrow="3">
        {track.artistName}
      </FlexboxDiv>
      <FlexboxDiv onClick={() => onPlayingTrackChangeFn(track)}>
        {track.plays}
      </FlexboxDiv>
      <FlexboxDiv onClick={() => onPlayingTrackChangeFn(track)}>
        {formatMSS(track.duration)}
      </FlexboxDiv>
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
