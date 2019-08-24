import React from "react";
import PropTypes from "prop-types";
import HookPostMessage from "./hook_post_message.js";

const PostMessageForm = ({ id }) => {
  const fieldname = "txtbxMessage";
  const { values, handleChange, handleSubmit } = HookPostMessage();

  return (
    <form onSubmit={e => handleSubmit(e, id, fieldname)}>
      <input
        type="text"
        name={fieldname}
        onChange={handleChange}
        value={values.message}
        required
      />
      <button type="submit">Login</button>
      {/* <FlexboxDiv onClick={() => onLikeClick(track.id)}>like!</FlexboxDiv> */}
    </form>
  );
};

PostMessageForm.defaultProps = {
  id: PropTypes.string
};

export default PostMessageForm;
