import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import api from '../shared/api';

const LoginComponent = () => {
  const [inputValue, setInputValue] = useState({
    userId: '',
    password: '',
  });
  const { userId, password } = inputValue;
  const navigate = useNavigate();

  const onChangeHandle = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const loginHandle = async () => {
    try {
      const response = await api.post('/members/login', inputValue);
      // console.log('loginRes:::', response);

      const accessHeader = response?.headers?.access_token;
      const refreshHeader = response?.headers?.refresh_token;

      const accessToken = accessHeader?.split(' ')[1];
      const refreshToken = refreshHeader?.split(' ')[1];

      Cookies.set('accesstoken', accessToken);
      Cookies.set('refreshtoken', refreshToken);

      navigate('/');
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

        <label htmlFor="signupPwd">
          패스워드
          <input
            id="signupPwd"
            name="password"
            value={password}
            onChange={onChangeHandle}
            type="password"
            className="border border-black border-solid"
          />
        </label>
      </div>
      <button
        type="button"
        onClick={loginHandle}
        className="border border-black border-solid"
      >
        로그인
      </button>
    </div>
  );
};

export default LoginComponent;
