import { useState } from "react";
import camelcaseKeys from "camelcase-keys";

const postMsgUrl =
  "https://api-stg.jam-community.com/interact/comment?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8";

const HookPostMessage = () => {
  const [values, setValues] = useState({});

  const handleSubmit = (event, id, fieldname) => {
    if (event) event.preventDefault();

    fetch(postMsgUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "*/*"
      },
      body: `id=${id}&type=song&message=${values[fieldname]}`
    })
      .then(response => response.json())
      .then(data => console.log(camelcaseKeys(data)));
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
