import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Settings = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, paddingLeft: '200px' }}>
        <Navbar />
        <div style={{ paddingTop: '20px', paddingBottom: '40px' }}>
          <h1>Página do Settings</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Settings;
