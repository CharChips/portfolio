import React from 'react';

interface CertificateCardProps {
  name: string;
  description: string;
  image: string;
  link?: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ name, description, image, link }) => {
  return (
    <div style={{
      width: 320,
      background: '#fff',
      borderRadius: 12,
      border: '2px solid #eee',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '1.2rem',
      margin: '1.2rem',
      boxSizing: 'border-box',
    }}>
      <div style={{ width: '100%', height: 140, background: '#f5f5f5', borderRadius: 8, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
      </div>
      <div style={{ fontWeight: 600, fontSize: '1.3rem', marginBottom: 8 }}>{name}</div>
      <div style={{ color: '#444', fontSize: '1.05rem', marginBottom: 18 }}>{description}</div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#111',
            color: '#fff',
            border: 'none',
            borderRadius: 2,
            padding: '0.6em 1.5em',
            fontSize: '1rem',
            fontWeight: 400,
            textDecoration: 'none',
            marginTop: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            transition: 'background 0.2s',
            display: 'inline-block',
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#333')}
          onMouseOut={e => (e.currentTarget.style.background = '#111')}
        >
          View Certificate
        </a>
      )}
    </div>
  );
};

export default CertificateCard;
