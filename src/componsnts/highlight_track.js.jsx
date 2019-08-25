import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import dateFormat from "dateformat";
import styled from "styled-components";
import { FlexboxDiv, TextTitle } from "./layout.js.jsx";
import PostMessageForm from "./post_message_form.js";
import ActionLikeIcon from "./action_icon_like.js";
import { formatMSS } from "./helper";
import IconLike from "../resources/icon_like.svg";

const HighlightTrack = props => {
  const { track } = props;
  const {
    coverImagePath,
    name,
    artistName,
    description,
    songRelease,
    duration,
    faves,
    likes,
    plays
  } = track;

  return (
    <FlexboxDiv w100 alignItems="center">
      <FlexboxDiv
        dimension2
        marginRight
        flexDirection="column"
        bgUrl={coverImagePath}
      />
      <FlexboxDiv w100 flexDirection="column">
        <FlexboxDiv w100 flexDirection="column">
          <TextTitle fontBold fontSizeXl lineHeightL>
            {name}
          </TextTitle>
          <TextTitle fontSizeL>{artistName}</TextTitle>
          <TextTitle fontSizeS lineHeightL>{`${formatMSS(
            duration
          )} / ${dateFormat(songRelease, "yyyy-mm-dd")}`}</TextTitle>
          <TextTitle fontSizeS lineHeightL>
            {description}
          </TextTitle>
        </FlexboxDiv>
        <FlexboxDiv w100 alignItems="center">
          <img src={IconLike} alt={`likes: ${likes}`} />
          <TextTitle marginRightL lineHeightL>{` ${likes}`}</TextTitle>
          <TextTitle marginRightL lineHeightL>
            plays:{` ${plays}`}
          </TextTitle>
          <TextTitle marginRightL lineHeightL>
            faves:{` ${faves}`}
          </TextTitle>
        </FlexboxDiv>
        <FlexboxDiv w100 alignItems="center">
          <PostMessageForm {...track} />
          <ActionLikeIcon id={track.id} />
        </FlexboxDiv>
      </FlexboxDiv>
    </FlexboxDiv>
  );
};

HighlightTrack.propTypes = {
  onPlayingTrackChangeFn: PropTypes.func
};

export default HighlightTrack;
