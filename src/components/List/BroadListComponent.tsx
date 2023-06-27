import React from 'react';
import { useQuery } from 'react-query';
import api from '../../shared/api';
import { Modal } from '../../shared/Modal';
import ModalPortal from '../../shared/ModalPortal';
import SnackBar from '../../shared/SnackBar';
import BroadCard from './BroadCard';

interface IThumb {
  fileName: string;
  fileImg: string;
}

export interface IList {
  channelId: number;
  streamer: string;
  title: string;
  thumbnailFiles: Array<IThumb>;
}
const BroadListComponent = () => {
  const getBroadList = async () => {
    const response = await api.get('/broadcasts');
    return response;
  };
  const { data, isLoading } = useQuery('getBroadList', getBroadList);
  console.log('broadListData::::', data?.data);

  return (
    <div className="flex gap-8 p-8">
      {data?.data.map((item: IList) => (
        <BroadCard
          key={item.channelId}
          channelId={item.channelId}
          streamer={item.streamer}
          title={item.title}
          thumbnailFiles={item.thumbnailFiles}
        />
      ))}
    </div>
  );
};

export default BroadListComponent;
