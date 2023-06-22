import React from 'react';
import { useQuery } from 'react-query';
import api from '../../shared/api';
import BroadCard from './BroadCard';

export interface IList {
  channelId: number;
  streamer: string;
  title: string;
}
const BroadListComponent = () => {
  const getBroadList = async () => {
    const response = await api.get('/broadcasts');
    return response;
  };
  const { data, isLoading } = useQuery('getBroadList', getBroadList);
  console.log('broadListData::::', data?.data);

  return (
    <div>
      {data?.data.map((item: IList) => (
        <BroadCard
          key={item.channelId}
          channelId={item.channelId}
          streamer={item.streamer}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default BroadListComponent;
