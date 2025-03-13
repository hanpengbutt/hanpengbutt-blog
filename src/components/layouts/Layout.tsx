import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface Props {
  children: React.ReactNode;
}

const Layout = ({children}:Props) => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main className="pt-[50px] flex-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
