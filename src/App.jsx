import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentService, setCurrentService] = useState(null);
  const [language, setLanguage] = useState('en');

  const navigateTo = (page, service = null) => {
    setCurrentPage(page);
    setCurrentService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} language={language} />;
      case 'service':
        return <ServiceDetailPage service={currentService} language={language} />;
      case 'work':
        return <WorkPage language={language} />;
      case 'contact':
        return <ContactPage language={language} />;
      default:
        return <HomePage navigateTo={navigateTo} language={language} />;
    }
  };

  return (
    <div className="app">
      <Header 
        navigateTo={navigateTo} 
        language={language} 
        setLanguage={setLanguage}
        currentPage={currentPage}
      />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer language={language} navigateTo={navigateTo} />
    </div>
  );
}

export default App;
