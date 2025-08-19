import React from 'react';

interface CertificateCardProps {
  name: string;
  description: string;
  image: string;
  link?: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ name, description, image, link }) => {
  return (
    <div className="retro-cert-card">
      <div className="retro-cert-img-section">
        <img src={image} alt={name} className="retro-cert-img" />
      </div>
      <div className="retro-cert-title">{name}</div>
      <div className="retro-cert-desc">{description}</div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="retro-cert-btn"
        >
          View Certificate
        </a>
      )}
      <style>{`
        .retro-cert-card {
          width: 100%;
          max-width: 340px;
          background: #fff;
          border: 1px solid #000;
          border-radius: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1.2rem;
          margin: 0 auto 2rem auto;
          box-sizing: border-box;
        }
        .retro-cert-img-section {
          width: 100%;
          height: 180px;
          background: #f5f5f5;
          border: 1px solid #000;
          border-radius: 0;
          margin-bottom: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .retro-cert-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
        }
        .retro-cert-title {
          font-weight: bold;
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: #000;
        }
        .retro-cert-desc {
          color: #222;
          font-size: 1rem;
          margin-bottom: 1.1rem;
        }
        .retro-cert-btn {
          background: #000;
          color: #fff;
          border: 1px solid #000;
          border-radius: 0;
          padding: 0.5em 1.3em;
          font-size: 1rem;
          font-family: inherit;
          font-weight: normal;
          text-decoration: none;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background 0.15s, color 0.15s, text-decoration 0.15s;
          display: inline-block;
        }
        .retro-cert-btn:hover, .retro-cert-btn:focus {
          background: #fff;
          color: #000;
          text-decoration: underline;
        }
        @media (max-width: 700px) {
          .retro-cert-card {
            max-width: 100%;
            padding: 0.8rem;
          }
          .retro-cert-img-section {
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default CertificateCard;
