import React from 'react';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { serviceData } from '../data/serviceData';

function ServiceDetailPage({ service, language }) {
  if (!service || !serviceData[service]) {
    return <div className="error-page">Service not found</div>;
  }

  const data = serviceData[service][language];

  return (
    <div className="service-detail-page">
      <div className="service-detail-container">
        {/* Header */}
        <div className="service-header">
          <h1 className="service-title">{data.title}</h1>
          <p className="service-subtitle">{data.subtitle}</p>
          <p className="service-description">{data.description}</p>
        </div>

        {/* Process Timeline */}
        <div className="process-section">
          <h2 className="section-heading">{data.processTitle}</h2>
          <div className="process-timeline">
            {data.process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <div className="step-header">
                    <h3 className="step-title">{step.step}</h3>
                    <span className="step-duration">
                      <Clock size={14} />
                      {step.duration}
                    </span>
                  </div>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Included */}
        <div className="included-section">
          <h2 className="section-heading">{data.included}</h2>
          <div className="included-grid">
            {data.services.map((item, index) => (
              <div key={index} className="included-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="timeline-summary">
          <AlertCircle className="info-icon" size={20} />
          <div>
            <h3 className="summary-title">
              {language === 'en' ? 'Timeline' : '时间表'}
            </h3>
            <p className="summary-text">{data.totalDuration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailPage;
