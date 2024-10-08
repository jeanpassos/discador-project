import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flexGrow: 1, padding: '20px' }}>
          <DashboardContent />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
