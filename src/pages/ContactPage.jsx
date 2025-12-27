import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { translations } from '../data/translations';

function ContactPage({ language }) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Connect to Flask backend API
    // Example:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    alert(language === 'en' 
      ? 'Thank you for your message! We will get back to you soon.' 
      : '感谢您的留言！我们会尽快回复您。'
    );
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="page-title">{t.contact.title}</h1>
          <p className="page-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">{t.contact.name}</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">{t.contact.emailLabel}</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">{t.contact.message}</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>
              
              <button type="submit" className="form-submit">
                {t.contact.send}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <div className="contact-info-item">
                <Mail className="contact-icon" />
                <div>
                  <h3 className="contact-info-label">{t.contact.email}</h3>
                  <a href="mailto:kyangengineering@gmail.com" className="contact-info-value">
                    kyangengineering@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="business-hours-card">
              <h3 className="hours-title">{t.contact.hours}</h3>
              <div className="hours-list">
                <p>{t.contact.monFri}</p>
                <p>{t.contact.sat}</p>
                <p>{t.contact.sun}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
