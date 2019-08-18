import React, { Component } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const ItemDiv = styled.div`
  font-size: 20px;
  line-height: 2;
`;

const item = track => {
  return (
    <ItemDiv key={track.id}>
      <h1>{track.name || <Skeleton />}</h1>
      {track.artistName || <Skeleton count={10} />}
    </ItemDiv>
  );
};

const Tracks = ({ list }) => {
  const items = list.map(item);
  return <div>{items}</div>;
};

Tracks.propTypes = {
  list: PropTypes.array
};

Tracks.defaultProps = {};
export default Tracks;
