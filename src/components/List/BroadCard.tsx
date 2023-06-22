import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IList } from './BroadListComponent';

const BroadCard = ({ channelId, streamer, title }: IList) => {
  const navigate = useNavigate();
  const intoBroadDetail = () => {
    navigate(`/broadcasts/${channelId}`);
  };

  return (
    <div onClick={intoBroadDetail} className="w-34 h-34">
      <div className="bg-defaultList bg-cover bg-center bg-no-repeat w-44 h-44" />
      <div>
        <p>{title}</p>
        <p>{streamer}</p>
      </div>
    </div>
  );
};

export default BroadCard;
