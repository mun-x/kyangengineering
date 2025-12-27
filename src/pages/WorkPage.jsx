import React from 'react';
import { Shield } from 'lucide-react';
import { translations } from '../data/translations';

function WorkPage({ language }) {
  const t = translations[language];

  return (
    <div className="work-page">
      <div className="work-container">
        <h1 className="page-title">{t.work.title}</h1>
        <p className="page-subtitle">{t.work.subtitle}</p>
        
        <div className="work-in-progress">
          <div className="work-icon">
            <Shield className="icon" />
          </div>
          <h2 className="work-heading">{t.work.inProgress}</h2>
          <p className="work-description">{t.work.description}</p>
          <p className="work-note">{t.work.checkBack}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
