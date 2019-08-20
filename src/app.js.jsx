import React from "react";
import Skeleton from "react-loading-skeleton";

import FetchTrending from "./componsnts/fetch_trending.js.jsx";
import PageContainer from "./componsnts/page_container.js";

import logo from "./resources/logo.svg";
const URL_TRENDING = "https://api-stg.jam-community.com/song/trending";

const app = () => {
  const fetchedData = FetchTrending(URL_TRENDING);
  console.log(fetchedData);

  return <PageContainer fetchedData={fetchedData} />;
};

export default app;
