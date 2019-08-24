export const Routes = {
  postLikeUrl:
    "https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8",
  postMsgUrl:
    "https://api-stg.jam-community.com/interact/comment?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8"
};

export const formatMSS = s => (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
