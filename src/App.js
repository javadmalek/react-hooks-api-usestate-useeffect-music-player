import React from "react";
import logo from "./resources/logo.svg";
import FetchTrending from "./hooks/fetch_trending.js";

const URL_TRENDING = "https://api-stg.jam-community.com/song/trending";

const app = () => {
  const data = FetchTrending(URL_TRENDING);
  console.log(data);

  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default app;
