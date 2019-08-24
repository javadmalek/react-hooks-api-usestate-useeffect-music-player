import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import dateFormat from "dateformat";
import styled from "styled-components";
import { FlexboxDiv, TextTitle, TextSubtitle } from "./layout.js.jsx";
import PostMessageForm from "./post_message_form.js";

const FormatedSpan = styled.span`
  background-color: #4cb6cb;
  min-width: 0.75em;
  padding: 0.25em 0.5em;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.75em;
  margin: 0.75em 0;
  background-color: #4cb6cb;
  color: #eaf6f9;
`;

const OverlayDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);

  ${({ displayInitial }) => `display: ${displayInitial ? "initial" : "none"};`}
`;

const OverlayTile = ({ track, displayInitial, onPlayingTrackChangeFn }) => (
  <OverlayDiv displayInitial={displayInitial}>
    <FlexboxDiv
      w100
      dimension1
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
    >
      <FormatedSpan>*****</FormatedSpan>
      <FormatedSpan onClick={() => onPlayingTrackChangeFn(track)}>
        Play Icon
      </FormatedSpan>
      <PostMessageForm {...track} />
    </FlexboxDiv>
  </OverlayDiv>
);

const Tile = props => {
  const { track } = props;
  const { coverImagePath, songRelease, duration, likes, plays } = track;
  const [displayInitial, setDisplayInitial] = useState(false);

  return (
    <FlexboxDiv
      dimension1
      borderRadius
      flexDirection="column"
      bgUrl={coverImagePath}
      onMouseOver={() => setDisplayInitial(true)}
      onMouseLeave={() => setDisplayInitial(false)}
    >
      <FlexboxDiv
        w100
        justifyContent="space-between"
        alignItems="flex-end"
        position="relative"
      >
        <OverlayTile {...props} displayInitial={displayInitial} />
        <FormatedSpan>{duration}</FormatedSpan>
        <FormatedSpan>{dateFormat(songRelease, "yyyy-mm-dd")}</FormatedSpan>
      </FlexboxDiv>
    </FlexboxDiv>
  );
};
const TileTrack = props => {
  const { track } = props;
  return (
    <FlexboxDiv flexDirection="column">
      <Tile {...props} />
      <TextTitle paddingTBS>{track.name}</TextTitle>
      <TextSubtitle>{track.artistName}</TextSubtitle>
    </FlexboxDiv>
  );
};

TileTrack.propTypes = {
  onPlayingTrackChangeFn: PropTypes.func
};

export default TileTrack;
