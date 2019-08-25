import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import HookPostMessage from "./hook_post_message.js";
import IconSend from "../resources/icon_send.svg";
import styled from "styled-components";

const FlexForm = styled.form`
  display: flex;
  align-items: ceenter;
  justify-content: flex-start;

  > input { 
    width: 360px;
		background: #fff;
		font: inherit;
		box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
		border: 0;
		outline: 0;
		padding: 22px 18px;
  }

  > button {
    display: inline-block;
    background: transparent;
    font: inherit;
    border: 0;
    outline: 0;
    padding: 0;
    transition: all 200ms ease-in;
    cursor: pointer;
    text-transform: uppercase
    background: #7f8ff4;
    color:#fff;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);
    border-radius: 2px;
    padding: 12px 36px;
    margin-left: -96px;
    
    :hover {
      background: darken(#7f8ff4, 4%);
    }
    
    :active {
      background: #7f8ff4;
      box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);
    }
  }
`;

const PostMessageForm = ({ id }) => {
  const fieldname = "txtbxMessage";

  const [shouldRotate, setShouldRotate] = useState(false);
  const toggleTotate = () => setShouldRotate(!shouldRotate);

  const { values, handleChange, handleSubmit } = HookPostMessage();

  return (
    <FlexForm onSubmit={e => handleSubmit(e, id, fieldname, toggleTotate)}>
      <input
        type="text"
        name={fieldname}
        onChange={handleChange}
        value={values.message}
        required
      />
      <button type="submit" className="btn-animated ">
        Send
      </button>
    </FlexForm>
  );
};

PostMessageForm.defaultProps = {
  id: PropTypes.string
};

export default PostMessageForm;
