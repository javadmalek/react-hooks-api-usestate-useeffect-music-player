import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TracksTileView from "./tracks_tile_view.js";
import TracksGridView from "./tracks_grid_view.js";
import TileTrack from "./tile_track.js";
import HighlightTrack from "./highlight_track.js";
import Player from "./player.js";
import { FlexboxDiv } from "./layout.js.jsx";

const PageContainer = ({ fetchedData }) => {
  const [trendingTracks, setTrendingTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState({});
  const [showPlayer, setShowPlayer] = useState(false);

  const togglePlayingTrack = (track, isPlaying) => {
    setPlayingTrack(track);
    setShowPlayer(isPlaying);
  };

  useEffect(() => {
    setTrendingTracks(fetchedData);
    !!fetchedData && fetchedData.length > 0 && setPlayingTrack(fetchedData[0]);
  }, [fetchedData]);

  return (
    <FlexboxDiv w100 paddingDefault flexDirection="column">
      <HighlightTrack track={playingTrack} />
      <TracksTileView
        paddingTBDefault
        playingTrack={playingTrack}
        trendingTracks={trendingTracks}
        onPlayingTrackChangeFn={togglePlayingTrack}
      />
      <TracksGridView
        playingTrack={playingTrack}
        trendingTracks={trendingTracks}
        onPlayingTrackChangeFn={togglePlayingTrack}
      />
      {showPlayer && <Player track={playingTrack} />}
    </FlexboxDiv>
  );
};

PageContainer.propTypes = {
  fetchedData: PropTypes.array
};

export default PageContainer;
