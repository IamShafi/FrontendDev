import React from 'react';
import PropTypes from 'prop-types';
import style from './Features.module.css'; // Создайте соответствующий CSS-файл
import iconAccessAnywhere from '../assets/images/icon-access-anywhere.svg';
import iconAnyFile from '../assets/images/icon-any-file.svg';
import iconCollaboration from '../assets/images/icon-collaboration.svg';
import iconSecurity from '../assets/images/icon-security.svg';

function FeatureCard({ image, title, text }) {
  return (
    <div className={style.feature_card}>
      <img src={image} alt="Feature" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  image: PropTypes.string.isRequired, // 
  title: PropTypes.string.isRequired, // 
  text: PropTypes.string.isRequired,
};

function Features() {
  const featuresData = [
    {
      image: iconAccessAnywhere,
      title: 'Access your files, anywhere',
      text: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    },
    {
      image: iconSecurity,
      title: 'Security you can trust',
      text: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    },
    {
      image: iconCollaboration,
      title: 'Real-time collaboration',
      text: 'Securely shared files and folders white friends, family and colleagues for live collaboration. No email attachments required. ',
    },
    {
      image: iconAnyFile,
      title: 'Store any type of file',
      text: 'Whether you’re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.',
    },
  ];

  return (
    <div className={style.wrapper}>
      {featuresData.map((feature) => (
        <FeatureCard
          key={feature.id}
          image={feature.image}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </div>
  );
}

export default Features;
