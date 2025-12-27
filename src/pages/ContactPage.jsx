import React from 'react';
import { Mail, Clock, MessageCircle } from 'lucide-react';
import { translations } from '../data/translations';

function ContactPage({ language }) {
  const t = translations[language];

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="page-title">{t.contact.title}</h1>
          <p className="page-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className="contact-cards-grid">
          {/* Email Card */}
          <div className="contact-card-large">
            <div className="contact-card-icon">
              <Mail size={32} />
            </div>
            <h2 className="contact-card-title">
              {language === 'en' ? 'Email Us' : '发送电子邮件'}
            </h2>
            <a 
              href="mailto:kyangengineering@gmail.com" 
              className="contact-email-link"
            >
              kyangengineering@gmail.com
            </a>
            <p className="contact-card-description">
              {language === 'en' 
                ? 'We typically respond within 24 hours' 
                : '我们通常在24小时内回复'}
            </p>
            <a 
              href="mailto:kyangengineering@gmail.com" 
              className="contact-button"
            >
              <Mail size={20} />
              <span>{language === 'en' ? 'Send Email' : '发送电子邮件'}</span>
            </a>
          </div>

          {/* Business Hours Card */}
          <div className="contact-card">
            <div className="contact-card-icon-small">
              <Clock size={24} />
            </div>
            <h3 className="contact-card-subtitle">{t.contact.hours}</h3>
            <div className="hours-list">
              <p>{t.contact.monFri}</p>
              <p>{t.contact.sat}</p>
              <p>{t.contact.sun}</p>
            </div>
          </div>

          {/* Services Card */}
          <div className="contact-card">
            <div className="contact-card-icon-small">
              <MessageCircle size={24} />
            </div>
            <h3 className="contact-card-subtitle">
              {language === 'en' ? 'How We Can Help' : '我们如何帮助您'}
            </h3>
            <ul className="services-checklist">
              <li>{language === 'en' ? 'SCDF Plan Submission' : '民防部队计划提交'}</li>
              <li>{language === 'en' ? 'Fire Certificate Renewal' : '消防证书更新'}</li>
              <li>{language === 'en' ? 'Diesel Tank Inspection' : '柴油罐检查'}</li>
              <li>{language === 'en' ? 'AC Ducting Services' : '空调管道服务'}</li>
              <li>{language === 'en' ? 'Heat Load Calculation' : '热负荷计算'}</li>
            </ul>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="contact-footer-info">
          <p className="contact-footer-text">
            {language === 'en' 
              ? 'For urgent matters, please call us during business hours. For general inquiries, email is preferred as it allows us to provide you with detailed information and documentation.' 
              : '如有紧急事项，请在营业时间内致电我们。对于一般咨询，我们建议使用电子邮件，因为这样我们可以为您提供详细的信息和文档。'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
