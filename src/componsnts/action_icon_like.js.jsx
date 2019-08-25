import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FlexboxDiv, TextTitle } from "./layout.js.jsx";
import HookPostLike from "./hook_post_like.js.jsx";

const ActionLikeIcon = ({ id, mobileDimension3 }) => {
  const [classname, setClassname] = useState("heart");
  const { onLikePostLike } = HookPostLike();

  return (
    <FlexboxDiv
      dimension3
      mobileDimension3={mobileDimension3}
      className={classname}
      onMouseLeave={() => setClassname("heart")}
      onClick={() => {
        onLikePostLike(id);
        setClassname("heart is_animating");
      }}
    />
  );
};

ActionLikeIcon.defaultProps = {
  mobileDimension3: false
};

ActionLikeIcon.propTypes = {
  mobileDimension3: PropTypes.bool
};

export default ActionLikeIcon;
