import React, { useState } from 'react';
import ModalPortal from '../shared/ModalPortal';
import SignUpComponent from './SignUpComponent';

const HeaderComponent = () => {
  const [signupModal, setSignupModal] = useState(false);

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
    </div>
  );
};

export default HeaderComponent;
