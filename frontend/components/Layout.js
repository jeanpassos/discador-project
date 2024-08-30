import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flexGrow: 1, padding: '20px' }}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
