import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import BroadDetailVideo from '../components/Detail/BroadDetailVideo';
import api from '../shared/api';

export interface IBroadDetail {
  // channelId: number;
  // chattingAddress: string;
  streamer: string;
  // title: string;
}

const BroadDetail = () => {
  const params = useParams();
  console.log('params::::', params);

  const getBroadDetail = async () => {
    const response = await api.get(`/broadcasts/${params.id}`);
    return response;
  };
  const { data } = useQuery('getBroadDetail', getBroadDetail);
  console.log('detailData::::', data);

  return <BroadDetailVideo streamer={data?.data?.streamer} />;
};

export default BroadDetail;
