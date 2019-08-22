import React from "react";
import PropTypes from "prop-types";
import dateFormat from "dateformat";
import styled from "styled-components";
import { FlexboxDiv, TextTitle, TextSubtitle } from "./layout.js";

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
`;

const PrimaryLayout = ({
  coverImagePath,
  songRelease,
  duration,
  likes,
  plays
}) => {
  return (
    <FlexboxDiv
      dimension1
      borderRadius
      flexDirection="column"
      bgUrl={coverImagePath}
    >
      <FlexboxDiv
        w100
        justifyContent="space-between"
        alignItems="flex-end"
        position="relative"
      >
        <OverlayDiv>
          <FlexboxDiv
            w100
            dimension1
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
          >
            <FormatedSpan>*****</FormatedSpan>
            <FormatedSpan>Play Icon</FormatedSpan>
            <FormatedSpan>PostMessage</FormatedSpan>
          </FlexboxDiv>
        </OverlayDiv>
        <FormatedSpan>{duration}</FormatedSpan>
        <FormatedSpan>{dateFormat(songRelease, "yy-mm-dd")}</FormatedSpan>
      </FlexboxDiv>
    </FlexboxDiv>
  );
};
const PlayingTrack = ({ track }) => {
  return (
    <FlexboxDiv flexDirection="column">
      <PrimaryLayout {...track} />
      <TextTitle paddingTBS>{track.name}</TextTitle>
      <TextSubtitle>{track.artistName}</TextSubtitle>
    </FlexboxDiv>
  );
};

PlayingTrack.propTypes = {};

export default PlayingTrack;
