import React from 'react';
import HomeSection from '../components/HomeSection';
import QueryForm from '../components/QueryForm';
import CarsPage from './CarsPage';
import PackagesPage from './PackagesPage';
import ContactPage from './ContactPage';

const MainPage = () => {
  return (
    <>
      {/* 1. Home */}
      <HomeSection />

      {/* 4. Packages */}
      <PackagesPage />

      {/* 3. Cars */}
      <CarsPage />

      {/* 2. Query Form from Contact Page */}
      <div className="query-section">
        <div className="form-section">
          <h2 className="main-title">CUSTOMIZED FOR YOU, <span>SERVED BY US</span></h2>
          <QueryForm />
        </div>
      </div>

      {/* 5. Contact */}
      <ContactPage />
    </>
  );
};

export default MainPage;
