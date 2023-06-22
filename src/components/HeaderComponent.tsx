import Cookies from 'js-cookie';
import React, { useState } from 'react';
import api from '../shared/api';
import ModalPortal from '../shared/ModalPortal';
import SignUpComponent from './SignUpComponent';

const HeaderComponent = () => {
  const [signupModal, setSignupModal] = useState(false);

  const logoutHandle = async () => {
    try {
      await api.get('/members/logout');
      Cookies.remove('accesstoken');
      Cookies.remove('refreshtoken');
      localStorage.removeItem('point');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-14 flex">
      <div className="bg-mainlogo bg-center bg-cover bg-no-repeat w-24 h-14" />
      <button type="button">츄르구매</button>
      <button type="button">로그인</button>

      <button type="button" onClick={() => setSignupModal(true)}>
        회원가입
      </button>
      {signupModal && (
        <ModalPortal>
          <SignUpComponent />
        </ModalPortal>
      )}
      <button type="button" onClick={logoutHandle}>
        로그아웃
      </button>
    </div>
  );
};

export default HeaderComponent;
