






import React, { useState } from 'react';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Data', 'Cloud', 'AI/ML', 'Web', 'Java'];
  const projects = [
    {
      title: 'SmartAgriAI',
      description: 'AI-powered platform for smart agriculture and crop monitoring.',
      tags: ['React', 'AI', 'IoT', 'AI/ML', 'Data'],
      codeUrl: 'https://github.com/example/smartagriai',
      demoUrl: 'https://smartagriai.example.com',
    },
    {
      title: 'Portfolio',
      description: 'Personal portfolio website built with React and Vite.',
      tags: ['React', 'Vite', 'CSS', 'Web'],
      codeUrl: 'https://github.com/example/portfolio',
      demoUrl: 'https://portfolio.example.com',
    },
    {
      title: 'TaskFlow',
      description: 'Kanban-style task management app.',
      tags: ['React', 'Productivity', 'Web', 'Data'],
      codeUrl: 'https://github.com/example/taskflow',
      demoUrl: 'https://taskflow.example.com',
    },
    {
      title: 'Weatherly',
      description: 'Weather dashboard with live data and forecasts.',
      tags: ['API', 'React', 'UI', 'Cloud', 'Data'],
      codeUrl: 'https://github.com/example/weatherly',
      demoUrl: 'https://weatherly.example.com',
    },
    {
      title: 'JavaAnalyzer',
      description: 'Static code analysis tool for Java projects.',
      tags: ['Java', 'Data'],
      codeUrl: 'https://github.com/example/javaanalyzer',
      demoUrl: 'https://javaanalyzer.example.com',
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(selectedCategory));

  return (
    <section className="retro-section">
      <div className="retro-container">
        <h1 className="retro-heading">Projects</h1>
        {/* Filter Bar */}
        <div className="retro-filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`retro-filter-btn${selectedCategory === cat ? ' selected' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="retro-grid">
          {filteredProjects.map((proj, idx) => (
            <div key={idx} className="retro-card">
              <div className="retro-card-title">{proj.title}</div>
              <div className="retro-card-desc">{proj.description}</div>
              <div className="retro-card-tags">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="retro-tag">{tag}</span>
                ))}
              </div>
              <div className="retro-card-actions">
                <a
                  href={proj.codeUrl}
                  className="retro-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <a
                  href={proj.demoUrl}
                  className="retro-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .retro-filter-bar {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.5rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }
        .retro-filter-btn {
          background: #fff;
          color: #000;
          border: 1px solid #000;
          border-radius: 0;
          font-family: inherit;
          font-size: 1rem;
          font-weight: normal;
          padding: 0.45em 1.2em;
          cursor: pointer;
          transition: background 0.15s, color 0.15s, text-decoration 0.15s;
          outline: none;
        }
        .retro-filter-btn.selected {
          background: #000;
          color: #fff;
        }
        .retro-filter-btn:hover, .retro-filter-btn:focus {
          background: #000;
          color: #fff;
          text-decoration: underline;
        }
        .retro-section {
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 3rem 0;
        }
        .retro-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .retro-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-top: 2.5rem;
        }
        @media (min-width: 700px) {
          .retro-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .retro-heading {
          font-size: 2.2rem;
          font-weight: bold;
          border-bottom: 1px solid #000;
          margin-bottom: 2.5rem;
          padding-bottom: 0.7rem;
          letter-spacing: -0.01em;
          text-align: left;
        }
        .retro-card {
          border: 1px solid #000;
          border-radius: 0;
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          margin-bottom: 2.5rem;
          background: #fff;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .retro-card-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.2rem;
        }
        .retro-card-desc {
          font-size: 1rem;
          font-weight: normal;
          margin-bottom: 0.5rem;
        }
        .retro-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .retro-tag {
          font-size: 0.95rem;
          border: 1px solid #000;
          border-radius: 0;
          padding: 0.15em 0.7em;
          background: #fff;
          color: #000;
          margin-right: 0.2em;
        }
        .retro-card-actions {
          display: flex;
          gap: 1rem;
        }
        .retro-btn {
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
          transition: background 0.15s, color 0.15s, text-decoration 0.15s;
          outline: none;
        }
        .retro-btn:hover, .retro-btn:focus {
          background: #fff;
          color: #000;
          text-decoration: underline;
        }
        .retro-card a {
          text-decoration: none;
        }
        .retro-card a:hover, .retro-card a:focus {
          text-decoration: underline;
        }
        @media (max-width: 600px) {
          .retro-container {
            padding: 0 0.5rem;
          }
          .retro-card {
            padding: 1.2rem 0.7rem 1rem 0.7rem;
          }
          .retro-grid {
            gap: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
