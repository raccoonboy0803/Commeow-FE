import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderComponent />
      <div>{children}</div>
    </>
  );
};

export default Layout;
