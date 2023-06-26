import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import BroadDetailVideo from '../components/Detail/BroadDetailVideo';
import Donation from '../components/Detail/Donation';
import api from '../shared/api';
import ModalPortal from '../shared/ModalPortal';

export interface IBroadDetail {
  // channelId: number;
  // chattingAddress: string;
  streamer: string;

  // title: string;
}

const BroadDetail = () => {
  const [donation, setDonation] = useState(false);
  const params = useParams();

  const getBroadDetail = async () => {
    const response = await api.get(`/broadcasts/${params.id}`);
    return response;
  };
  const { data } = useQuery('getBroadDetail', getBroadDetail);
  console.log('detailData::::', data);

  // const handleModal = (newValue: boolean) => {
  //   setDonation(newValue);
  // };

  return (
    <div>
      <BroadDetailVideo streamer={data?.data?.streamer} />

      {/* <button
        type="button"
        className="bg-yellow-500 w-16 h-7"
        onClick={() => setDonation(true)}
      >
        후원하기
      </button>
      {donation && (
        <ModalPortal>
          <Donation streamer={data?.data?.streamer} onAccess={handleModal} />
        </ModalPortal>
      )} */}
    </div>
  );
};

export default BroadDetail;
