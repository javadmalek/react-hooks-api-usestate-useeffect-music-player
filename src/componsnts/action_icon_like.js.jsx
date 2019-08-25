import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexboxDiv, TextTitle } from "./layout.js.jsx";
import HookPostLike from "./hook_post_like.js.jsx";

const ActionLikeIcon = ({ id }) => {
  const [classname, setClassname] = useState("heart");
  const { onLikePostLike } = HookPostLike();

  return (
    <div
      className={classname}
      onMouseLeave={() => setClassname("heart")}
      onClick={() => {
        onLikePostLike(id);
        setClassname("heart is_animating");
      }}
    />
  );
};

export default ActionLikeIcon;
