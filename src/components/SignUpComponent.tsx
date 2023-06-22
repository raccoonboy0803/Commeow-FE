import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../shared/api';

const SignUpComponent = () => {
  const [inputValue, setInputValue] = useState({
    userId: '',
    nickname: '',
    password: '',
  });
  const { userId, nickname, password } = inputValue;
  const navigate = useNavigate();

  const onChangeHandle = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const submitSignup = async () => {
    try {
      await api.post('/members/signup', inputValue);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-modalOuter">
      <div className="bg-mainBlack w-2/5 rounded-lg">
        <div className="flex flex-row items-center justify-center gap-5">
          <div className="bg-mainlogo bg-cover bg-center bg-no-repeat w-28 h-14" />
          <span className="text-white text-2xl font-bold">
            Commeow에 가입하세요
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <label
            htmlFor="signupId"
            className="text-white font-semibold flex flex-col ml-10"
          >
            아이디
            <input
              id="signupId"
              name="userId"
              value={userId}
              onChange={onChangeHandle}
              className="border border-black border-solid ml-7 w-4/5 text-yellow-500 h-7"
            />
          </label>
          <label
            htmlFor="signupNick"
            className="text-white font-semibold flex flex-col ml-10"
          >
            닉네임
            <input
              id="signupNick"
              name="nickname"
              value={nickname}
              onChange={onChangeHandle}
              className="border border-black border-solid ml-7 text-yellow-500 w-4/5 h-7"
            />
          </label>
          <label
            htmlFor="signupPwd"
            className="text-white font-semibold flex flex-col ml-10 "
          >
            패스워드
            <input
              id="signupPwd"
              name="password"
              type="password"
              value={password}
              onChange={onChangeHandle}
              className="border border-black border-solid ml-7 w-4/5 text-yellow-500 h-7"
            />
          </label>
        </div>
        <div className="flex justify-center gap-16 mt-12 mb-4">
          <button type="button" className="text-yellow-500">
            이미 Commeow 유저인가요? 로그인
          </button>
          <button
            type="button"
            onClick={submitSignup}
            className="bg-yellow-500 w-16 h-7"
          >
            가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
