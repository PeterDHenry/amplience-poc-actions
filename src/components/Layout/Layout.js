import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div className="">
    <Header />
    <Menu />
    {children}
    <Footer />
  </div>
);

export default Layout;
