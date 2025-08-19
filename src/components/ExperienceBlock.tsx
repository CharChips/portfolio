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
      className="retro-exp-img-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={images[current]}
        alt={title}
        className="retro-exp-img"
      />
    </div>
  );

  const textSection = (
    <div className="retro-exp-text-section">
      <div className="retro-exp-title">{title}</div>
      <div className="retro-exp-desc">{description}</div>
      {readMoreLink && (
        <button
          className="retro-exp-btn"
          onClick={() => navigate(readMoreLink)}
        >
          Read More
        </button>
      )}
    </div>
  );

  return (
    <div
      className={`retro-exp-block ${imagePosition === 'left' ? 'left' : 'right'}`}
    >
      {textSection}
      {imageSection}
      <style>{`
        .retro-exp-block {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          justify-content: center;
          gap: 2.5rem;
          width: 100%;
          max-width: 900px;
          margin: 2.5rem auto;
          padding: 2.2rem 1.2rem;
          background: #fff;
          border: 1px solid #000;
          border-radius: 0;
          box-sizing: border-box;
        }
        .retro-exp-block.right {
          flex-direction: row-reverse;
        }
        .retro-exp-img-section {
          flex: 0 0 260px;
          width: 100%;
          max-width: 320px;
          min-width: 140px;
          height: 200px;
          background: #f5f5f5;
          border: 1px solid #000;
          border-radius: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: pointer;
        }
        .retro-exp-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
        }
        .retro-exp-text-section {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          height: 100%;
          padding: 0 0.5rem;
        }
        .retro-exp-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #000;
        }
        .retro-exp-desc {
          color: #222;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 600px;
        }
        .retro-exp-btn {
          background: #000;
          color: #fff;
          border: 1px solid #000;
          border-radius: 0;
          padding: 0.6em 2em;
          font-size: 1rem;
          font-family: inherit;
          font-weight: normal;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background 0.15s, color 0.15s, text-decoration 0.15s;
        }
        .retro-exp-btn:hover, .retro-exp-btn:focus {
          background: #fff;
          color: #000;
          text-decoration: underline;
        }
        @media (max-width: 800px) {
          .retro-exp-block {
            flex-direction: column !important;
            gap: 1.5rem;
            padding: 1.2rem 0.5rem;
          }
          .retro-exp-img-section {
            width: 100%;
            max-width: 100%;
            height: 180px;
            margin-bottom: 0.5rem;
          }
          .retro-exp-text-section {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ExperienceBlock;
