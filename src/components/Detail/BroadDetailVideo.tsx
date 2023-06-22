import React from 'react';
import ReactPlayer from 'react-player';

import { IBroadDetail } from '../../pages/BroadDetail';

const BroadDetailVideo = ({ streamer }: IBroadDetail) => {
  const hlsUrl = `http://3.34.163.123:8080/streams/${streamer}/master.m3u8`;

  return <ReactPlayer url={hlsUrl} controls />;
};

export default BroadDetailVideo;
