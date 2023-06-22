import React from 'react';

const HeaderComponent = () => {
  return (
    <div className="w-full h-14 flex">
      <div className="bg-mainlogo bg-center bg-cover bg-no-repeat w-24 h-14" />
      <button type="button">비트구매</button>
      <button type="button">로그인</button>
      <button type="button">회원가입</button>
    </div>
  );
};

export default HeaderComponent;
