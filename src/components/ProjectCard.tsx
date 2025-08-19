import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  codeUrl?: string;
  demoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, codeUrl, demoUrl }) => {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 14,
        border: '2px solid #eee',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        padding: '1.5rem',
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        transition: 'box-shadow 0.2s, border 0.2s',
        cursor: 'pointer',
      }}
      className="project-card"
    >
      <div style={{ fontWeight: 700, fontSize: '1.35rem', marginBottom: 8 }}>{title}</div>
      <div style={{ color: '#444', fontSize: '1.08rem', marginBottom: 14 }}>{description}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: 18 }}>
        {tags.map((tag, i) => (
          <span key={i} style={{ background: '#f0f0f0', color: '#333', borderRadius: 6, padding: '0.2em 0.8em', fontSize: '0.95rem' }}>{tag}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
        <a
          href={codeUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#232323',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            padding: '0.5em 1.3em',
            fontSize: '1rem',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.background = '#444')}
          onMouseOut={e => (e.currentTarget.style.background = '#232323')}
        >
          View Code
        </a>
        <a
          href={demoUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#fff',
            color: '#232323',
            border: '2px solid #232323',
            borderRadius: 4,
            padding: '0.5em 1.3em',
            fontSize: '1rem',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = '#232323';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = '#232323';
          }}
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
