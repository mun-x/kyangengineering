import React from 'react';
import { Mail } from 'lucide-react';
import { translations } from '../data/translations';
import { serviceKeys } from '../data/serviceData';

function Footer({ language, navigateTo }) {
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/logo.png" 
                alt="K.Yang Engineering" 
                className="footer-logo-image"
              />
              <div className="footer-company-name">K.Yang Engineering</div>
            </div>
            <p className="footer-tagline">{t.hero.tagline}</p>
          </div>
          
          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-heading">{t.nav.services}</h3>
            <ul className="footer-links">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <button 
                    onClick={() => navigateTo('service', key)}
                    className="footer-link"
                  >
                    {t.services[key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="footer-section">
            <h3 className="footer-heading">{t.contact.title}</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Mail size={14} />
                <span>kyangengineering@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 K.Yang Engineering Pte Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
