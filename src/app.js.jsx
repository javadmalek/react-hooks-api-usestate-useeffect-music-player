import React from "react";
import Skeleton from "react-loading-skeleton";

import HookFetchTrending from "./componsnts/hook_fetch_trending.js";
import PageContainer from "./componsnts/page_container.js";

import logo from "./resources/logo.svg";
const URL_TRENDING = "https://api-stg.jam-community.com/song/trending";

const app = () => {
  const fetchedData = HookFetchTrending(URL_TRENDING);

  return <PageContainer fetchedData={fetchedData} />;
};

export default app;
