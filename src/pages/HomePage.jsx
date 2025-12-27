import React from 'react';
import { ChevronRight, FileCheck, Flame, Droplet, Wind, Calculator } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { translations } from '../data/translations';

// Map service keys to icons
const serviceIcons = {
  scdf: FileCheck,
  fireRenewal: Flame,
  dieselTank: Droplet,
  acDucting: Wind,
  heatLoad: Calculator
};

function HomePage({ navigateTo, language }) {
  const t = translations[language];

  const services = [
    { key: 'scdf', icon: FileCheck },
    { key: 'fireRenewal', icon: Flame },
    { key: 'dieselTank', icon: Droplet },
    { key: 'acDucting', icon: Wind },
    { key: 'heatLoad', icon: Calculator }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-tagline">{t.hero.tagline}</p>
          <button onClick={() => navigateTo('contact')} className="hero-cta">
            <span>{t.nav.contact}</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="services-container">
          <div className="section-header">
            <h2 className="section-title">{t.nav.services}</h2>
            <p className="section-subtitle">Professional fire safety and engineering solutions</p>
          </div>

          <div className="services-grid">
            {services.map(({ key, icon }) => (
              <ServiceCard
                key={key}
                title={t.services[key]}
                description="" // Can add short descriptions if needed
                onClick={() => navigateTo('service', key)}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">{t.common.getStarted}</h2>
          <p className="cta-text">{t.common.contactCta}</p>
          <button onClick={() => navigateTo('contact')} className="cta-button">
            {t.nav.contact}
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
