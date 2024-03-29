import { useState, useEffect } from "react";
import camelcaseKeys from "camelcase-keys";

const HookFetchTrending = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(camelcaseKeys(data)));
  }, [url]);

  return data;
};

export default HookFetchTrending;
