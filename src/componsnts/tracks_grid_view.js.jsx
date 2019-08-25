import React, { Component } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { FlexboxDiv } from "./layout.js";
import { formatMSS, Routes } from "./helper";
import ActionLikeIcon from "./action_icon_like.js";

const renderTrack = (track, onPlayingTrackChangeFn, index) => {
  return (
    <FlexboxDiv w100 borderColor alignItems="center" key={index}>
      <FlexboxDiv
        paddingDefault
        mobileDisplayNone
        onClick={() => onPlayingTrackChangeFn(track, true)}
      >
        {++index}
      </FlexboxDiv>
      <FlexboxDiv paddingDefault>
        <ActionLikeIcon mobileDimension3 id={track.id} />
      </FlexboxDiv>
      <FlexboxDiv
        paddingDefault
        onClick={() => onPlayingTrackChangeFn(track, true)}
        flexGrow="3"
      >
        {track.name}
      </FlexboxDiv>
      <FlexboxDiv
        paddingDefault
        onClick={() => onPlayingTrackChangeFn(track, true)}
        flexGrow="3"
      >
        {track.artistName}
      </FlexboxDiv>
      <FlexboxDiv
        paddingDefault
        mobileDisplayNone
        onClick={() => onPlayingTrackChangeFn(track, true)}
      >
        {track.plays}
      </FlexboxDiv>
      <FlexboxDiv
        paddingDefault
        onClick={() => onPlayingTrackChangeFn(track, true)}
      >
        {formatMSS(track.duration)}
      </FlexboxDiv>
    </FlexboxDiv>
  );
};

const TracksGridView = ({ trendingTracks, onPlayingTrackChangeFn }) => {
  const gridHeader = (
    <FlexboxDiv w100 borderColor colorGold>
      <FlexboxDiv paddingDefault mobileDisplayNone>
        #
      </FlexboxDiv>
      <FlexboxDiv paddingDefault>action</FlexboxDiv>
      <FlexboxDiv paddingDefault flexGrow="3">
        Title
      </FlexboxDiv>
      <FlexboxDiv paddingDefault flexGrow="3">
        Artist
      </FlexboxDiv>
      <FlexboxDiv paddingDefault mobileDisplayNone>
        # Plays
      </FlexboxDiv>
      <FlexboxDiv paddingDefault>Duration</FlexboxDiv>
    </FlexboxDiv>
  );

  const items = trendingTracks.map((track, index) =>
    renderTrack(track, onPlayingTrackChangeFn, index)
  );

  return (
    <FlexboxDiv
      w100
      mobileWAuto
      borderRadius
      backgroundDark
      flexDirection="column"
    >
      {gridHeader}
      {items}
    </FlexboxDiv>
  );
};

TracksGridView.propTypes = {
  trendingTracks: PropTypes.array,
  onPlayingTrackChangeFn: PropTypes.func,
  playingTrack: PropTypes.object
};

TracksGridView.defaultProps = {
  trendingTracks: []
};

export default TracksGridView;
