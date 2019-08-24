import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import dateFormat from "dateformat";
import styled from "styled-components";
import { FlexboxDiv, TextTitle, TextSubtitle } from "./layout.js.jsx";
import PostMessageForm from "./post_message_form.js";
import HookPostLike from "./hook_post_like.js";
import { formatMSS } from "./helper";

const HighlightTrack = props => {
  const { onLikePostLike } = HookPostLike();

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
    <FlexboxDiv>
      <FlexboxDiv dimension2 flexDirection="column" bgUrl={coverImagePath} />
      <FlexboxDiv flexDirection="column">
        <FlexboxDiv flexDirection="column">
          <TextTitle>{name}</TextTitle>
          <TextSubtitle>{artistName}</TextSubtitle>
          <TextSubtitle>{`${formatMSS(duration)} / ${dateFormat(
            songRelease,
            "yyyy-mm-dd"
          )}`}</TextSubtitle>
          <TextSubtitle>{description}</TextSubtitle>
        </FlexboxDiv>
        <FlexboxDiv>
          <TextSubtitle onClick={() => onLikePostLike(track.id)}>
            likes:{` ${likes}`}
          </TextSubtitle>
          <TextSubtitle>plays:{` ${plays}`}</TextSubtitle>
          <TextSubtitle>faves:{` ${faves}`}</TextSubtitle>
        </FlexboxDiv>
        <FlexboxDiv>
          <PostMessageForm {...track} />
          <TextSubtitle onClick={() => onLikePostLike(track.id)}>
            like me!
          </TextSubtitle>
        </FlexboxDiv>
      </FlexboxDiv>
    </FlexboxDiv>
  );
};

HighlightTrack.propTypes = {
  onPlayingTrackChangeFn: PropTypes.func
};

export default HighlightTrack;
