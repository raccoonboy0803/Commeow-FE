import React, { useState } from 'react';
import api from '../../shared/api';

interface IDonation {
  streamer: string;
  onAccess: (newValue: boolean) => void;
}

const Donation = ({ streamer, onAccess }: IDonation) => {
  // const [donaValue, setDonaValue] = useState({
  //   streamer,
  //   points: 0,
  //   message: '',
  // });
  const [pointValue, setPointValue] = useState<number>();
  const [messageValue, setMessageValue] = useState('');
  const [curPoint, setCurPoint] = useState(localStorage.getItem('point'));

  // const { points, message } = donaValue;
  const messageChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMessageValue(e.currentTarget.value);
  };
  const pointChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPointValue(Number(e.currentTarget.value));
  };

  const donationHandle = async () => {
    try {
      const { data } = await api.post('/points/spend', {
        streamer,
        point: pointValue,
        message: messageValue,
      });
      console.log('남은포인트값:::::', data);

      localStorage.setItem('point', data);
      setCurPoint(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-modalOuter relative z-50">
      <div className="w-2/5 h-2/5 bg-mainBlack">
        <p className="text-yellow-500">{streamer}님에게 후원하기</p>
        <p className="text-yellow-500">잔여포인트: {curPoint}</p>
        <input
          name="points"
          value={pointValue}
          onChange={pointChange}
          // type="number"
        />
        <input name="message" value={messageValue} onChange={messageChange} />
        <button
          type="button"
          onClick={donationHandle}
          className="text-yellow-500"
        >
          후원하기
        </button>
        <button
          type="button"
          onClick={() => onAccess(false)}
          className="text-yellow-500"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Donation;
