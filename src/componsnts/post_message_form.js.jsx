import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HookPostMessage from "./hook_post_message.js";
import IconSend from "../resources/icon_send.svg";

const PostMessageForm = ({ id }) => {
  const fieldname = "txtbxMessage";

  const [shouldRotate, setShouldRotate] = useState(false);
  const toggleTotate = () => setShouldRotate(!shouldRotate);

  const { values, handleChange, handleSubmit } = HookPostMessage();

  return (
    <form onSubmit={e => handleSubmit(e, id, fieldname, toggleTotate)}>
      <input
        type="text"
        name={fieldname}
        onChange={handleChange}
        value={values.message}
        required
      />
      <button type="submit">
        <img className={shouldRotate ? "rotate" : null} src={IconSend} />
      </button>
    </form>
  );
};

PostMessageForm.defaultProps = {
  id: PropTypes.string
};

export default PostMessageForm;
