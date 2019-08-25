import React from "react";
import PropTypes from "prop-types";
import MusicPlayer from "react-responsive-music-player";

const Player = ({ track }) => {
  const playlist = [
    {
      url: track.musicFilePath,
      cover: track.coverImagePath,
      title: track.name,
      artist: [track.artistName]
    }
  ];

  return (
    <div>
      <MusicPlayer autoplay playlist={playlist} />
    </div>
  );
};

Player.propTypes = {
  track: PropTypes.object
};

export default Player;
