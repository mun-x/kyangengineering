import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { translations } from '../data/translations';
import { serviceKeys } from '../data/serviceData';

function Header({ navigateTo, language, setLanguage, currentPage }) {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const t = translations[language];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.services-dropdown')) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleServiceClick = (serviceKey) => {
    navigateTo('service', serviceKey);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo" onClick={() => navigateTo('home')}>
            <img 
              src="/logo.png" 
              alt="K.Yang Engineering" 
              className="logo-image"
            />
            <div className="logo-text">
              <div className="company-name">K.Yang Engineering</div>
              <div className="company-tagline">{t.hero.since}</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {/* Services Dropdown */}
            <div className="services-dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesDropdownOpen(!servicesDropdownOpen);
                }}
                className="nav-link"
              >
                <span>{t.nav.services}</span>
                <ChevronDown 
                  size={16} 
                  className={`dropdown-icon ${servicesDropdownOpen ? 'open' : ''}`} 
                />
              </button>
              
              {servicesDropdownOpen && (
                <div className="dropdown-menu">
                  {serviceKeys.map((key) => (
                    <button
                      key={key}
                      onClick={() => handleServiceClick(key)}
                      className="dropdown-item"
                    >
                      {t.services[key]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => navigateTo('work')} className="nav-link">
              {t.nav.work}
            </button>

            <button onClick={() => navigateTo('contact')} className="nav-link">
              {t.nav.contact}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="language-toggle"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-button"
          >
            <div className="hamburger">
              <span className={mobileMenuOpen ? 'open' : ''}></span>
              <span className={mobileMenuOpen ? 'open' : ''}></span>
              <span className={mobileMenuOpen ? 'open' : ''}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-section">
            <div className="mobile-menu-label">{t.nav.services}</div>
            {serviceKeys.map((key) => (
              <button
                key={key}
                onClick={() => handleServiceClick(key)}
                className="mobile-menu-item"
              >
                {t.services[key]}
              </button>
            ))}
          </div>
          <button onClick={() => navigateTo('work')} className="mobile-menu-item">
            {t.nav.work}
          </button>
          <button onClick={() => navigateTo('contact')} className="mobile-menu-item">
            {t.nav.contact}
          </button>
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="mobile-language-toggle"
          >
            {language === 'en' ? '切换到中文' : 'Switch to English'}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
