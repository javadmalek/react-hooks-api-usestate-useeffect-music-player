import React from "react";
import Skeleton from "react-loading-skeleton";

import FetchTrending from "./componsnts/fetch_trending.js.jsx";
import Tracks from "./componsnts/tracks.js.jsx";

import logo from "./resources/logo.svg";
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

      <Tracks list={data} />
    </div>
  );
};

export default app;
