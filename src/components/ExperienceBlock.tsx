import React, { useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

interface ExperienceBlockProps {
  title: string;
  description: string;
  images: string[];
  imagePosition?: 'left' | 'right';
  readMoreLink?: string;
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ title, description, images, imagePosition = 'left', readMoreLink }) => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (images.length <= 1) return;
    intervalRef.current = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 900);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    setCurrent(0);
  };

  const imageSection = (
    <div
      style={{
        flex: '0 0 32vw',
        height: '28vw',
        maxWidth: 420,
        maxHeight: 300,
        minWidth: 220,
        minHeight: 140,
        background: '#eee',
        borderRadius: 12,
        border: '2px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: images.length > 1 ? 'pointer' : 'default',
        transition: 'box-shadow 0.3s',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={images[current]}
        alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 10, transition: 'opacity 0.5s' }}
      />
    </div>
  );

  const textSection = (
    <div style={{
      flex: 1,
      minWidth: 0,
      padding: '2vw 2vw 2vw 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      height: '100%',
    }}>
      <div style={{
        fontWeight: 500,
        fontSize: '2.5rem',
        marginBottom: 18,
        color: '#111',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      }}>{title}</div>
      <div style={{
        color: '#222',
        fontSize: '1.25rem',
        lineHeight: 1.6,
        marginBottom: 32,
        maxWidth: 600,
      }}>{description}</div>
      <button
        style={{
          background: '#111',
          color: '#fff',
          border: 'none',
          borderRadius: 2,
          padding: '0.7em 2.5em',
          fontSize: '1.1rem',
          fontWeight: 400,
          cursor: 'pointer',
          marginTop: 10,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          transition: 'background 0.2s',
        }}
        onMouseOver={e => (e.currentTarget.style.background = '#333')}
        onMouseOut={e => (e.currentTarget.style.background = '#111')}
        onClick={() => { if (readMoreLink) navigate(readMoreLink); }}
        disabled={!readMoreLink}
      >
        Read More
      </button>
    </div>
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: imagePosition === 'left' ? 'row' : 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3vw',
        width: '100%',
        maxWidth: 1200,
        margin: '3vw auto',
        padding: '3vw 2vw',
        background: '#fafafa',
        boxSizing: 'border-box',
        borderRadius: 16,
        boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
      }}
    >
      {textSection}
      {imageSection}
    </div>
  );
};

export default ExperienceBlock;
