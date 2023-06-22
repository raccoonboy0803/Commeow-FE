import Cookies from 'js-cookie';
import React, { useState } from 'react';
import api from '../shared/api';
import ModalPortal from '../shared/ModalPortal';
import LoginComponent from './LoginComponent';
import SignUpComponent from './SignUpComponent';

const HeaderComponent = () => {
  const [signupModal, setSignupModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const logoutHandle = async () => {
    try {
      await api.get('/members/logout');
      Cookies.remove('accesstoken');
      Cookies.remove('refreshtoken');
      localStorage.removeItem('point');
      setIsLogin(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignModal = (newValue: boolean) => {
    setSignupModal(newValue);
  };
  const handleLoginModal = (newValue: boolean) => {
    setLoginModal(newValue);
  };

  return (
    <div className="w-full h-14 flex">
      <div className="bg-mainlogo bg-center bg-cover bg-no-repeat w-24 h-14" />
      {isLogin && <button type="button">츄르구매</button>}
      {!isLogin && (
        <button type="button" onClick={() => setLoginModal(true)}>
          로그인
        </button>
      )}
      {loginModal && (
        <ModalPortal>
          <LoginComponent
            onAccess={handleLoginModal}
            setIsLogin={setIsLogin}
            setSignupModal={setSignupModal}
            setLoginModal={setLoginModal}
          />
        </ModalPortal>
      )}

      {!isLogin && (
        <button type="button" onClick={() => setSignupModal(true)}>
          회원가입
        </button>
      )}
      {signupModal && (
        <ModalPortal>
          <SignUpComponent
            onAccess={handleSignModal}
            setSignupModal={setSignupModal}
            setLoginModal={setLoginModal}
          />
        </ModalPortal>
      )}
      {isLogin && (
        <button type="button" onClick={logoutHandle}>
          로그아웃
        </button>
      )}
    </div>
  );
};

export default HeaderComponent;
