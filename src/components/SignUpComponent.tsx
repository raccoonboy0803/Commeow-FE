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
    <div>
      <div className="flex flex-row items-center gap-3">
        <div className="bg-mainlogo bg-cover bg-center bg-no-repeat w-24 h-24" />
        <span>Commeow에 가입하세요</span>
      </div>
      <div className="flex flex-col  gap-3">
        <label htmlFor="signupId">
          아이디
          <input
            id="signupId"
            name="userId"
            value={userId}
            onChange={onChangeHandle}
            className="border border-black border-solid"
          />
        </label>
        <label htmlFor="signupNick">
          닉네임
          <input
            id="signupNick"
            name="nickname"
            value={nickname}
            onChange={onChangeHandle}
            className="border border-black border-solid"
          />
        </label>
        <label htmlFor="signupPwd">
          패스워드
          <input
            id="signupPwd"
            name="password"
            type="password"
            value={password}
            onChange={onChangeHandle}
            className="border border-black border-solid"
          />
        </label>
      </div>
      <button
        type="button"
        onClick={submitSignup}
        className="border border-black border-solid"
      >
        가입
      </button>
    </div>
  );
};

export default SignUpComponent;
