import { useState } from "react";
import camelcaseKeys from "camelcase-keys";
import { Routes } from "./helper";

const HookPostLike = () => {
  const [values, setValues] = useState({});

  const onLikePostLike = id => {
    fetch(Routes.postLikeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "*/*"
      },
      body: `id=${id}`
    })
      .then(response => response.json())
      .then(data => console.log(camelcaseKeys(data)));
  };

  return {
    onLikePostLike,
    values
  };
};

export default HookPostLike;
