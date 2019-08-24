import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TracksTileView from "./tracks_tile_view.js";
import TracksGridView from "./tracks_grid_view.js";
import TileTrack from "./tile_track.js";
import Player from "./player.js";

const PageContainer = ({ fetchedData }) => {
  const [trendingTracks, setTrendingTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState({});

  useEffect(() => {
    setTrendingTracks(fetchedData);
    !!fetchedData && fetchedData.length > 0 && setPlayingTrack(fetchedData[0]);
  }, [fetchedData]);

  return (
    <div>
      <TileTrack track={playingTrack} />
      <TracksGridView
        trendingTracks={trendingTracks}
        onPlayingTrackChangeFn={setPlayingTrack}
      />
      <TracksTileView
        trendingTracks={trendingTracks}
        onPlayingTrackChangeFn={setPlayingTrack}
      />
      <Player track={playingTrack} />
    </div>
  );
};

PageContainer.propTypes = {
  fetchedData: PropTypes.array
};

export default PageContainer;
