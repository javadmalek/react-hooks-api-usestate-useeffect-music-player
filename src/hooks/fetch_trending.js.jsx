import { useState, useEffect } from "react";

const FetchTrending = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return data;
};

export default FetchTrending;
