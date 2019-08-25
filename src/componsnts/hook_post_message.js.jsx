import { useState } from "react";
import camelcaseKeys from "camelcase-keys";
import { formatMSS, Routes } from "./helper";

const HookPostMessage = () => {
  const [values, setValues] = useState({});

  const handleSubmit = (event, id, fieldname, toggleTotate) => {
    if (event) event.preventDefault();

    fetch(Routes.postMsgUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "*/*"
      },
      body: `id=${id}&type=song&message=${values[fieldname]}`
    })
      .then(response => response.json())
      .then(data => {
        console.log(camelcaseKeys(data));
        toggleTotate();
      });
  };

  const handleChange = event => {
    event.persist();

    const {
      target: { name, value }
    } = event;
    setValues(values => ({ ...values, [name]: value }));
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default HookPostMessage;
