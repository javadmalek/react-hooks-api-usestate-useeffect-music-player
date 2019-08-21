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
  margin-bottom: 0.75em;
  background-color: #4cb6cb;
  color: #eaf6f9;
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
      <FlexboxDiv w100 justifyContent="space-between" alignItems="flex-end">
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
