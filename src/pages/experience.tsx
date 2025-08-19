


import ExperienceBlock from '../components/ExperienceBlock';
import fad1 from '../assets/fad/fad1.jpg';
import fadlogo from '../assets/fad/fadlogo.jpg';

function Experience() {
  return (
    <section className="retro-exp-section">
      <div className="retro-exp-container" style={{marginTop: 0}}>
        <h1 className="retro-exp-heading">Experience</h1>
        <ExperienceBlock
          title="FAD — Co-Founder & COO"
          description="Co-founded FAD, a student-led startup pioneering structured thrifting and sustainable fashion. Leading operations, logistics, and partnerships while managing a growing team."
          images={[
            fadlogo,
            fad1
          ]}
          imagePosition="left"
          readMoreLink="/experience/fad"
        />
        <ExperienceBlock
          title="ISA"
          description="Software Engineer Intern at ISA, focused on backend services and scalable APIs."
          images={[
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
          ]}
          imagePosition="right"
        />
        <ExperienceBlock
          title="Bootcamp"
          description="Completed a full-stack web development bootcamp, learning modern frameworks and best practices."
          images={[
            'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
          ]}
          imagePosition="left"
        />
        <ExperienceBlock
          title="Internship"
          description="Interned at TechNova, contributing to frontend features and UI improvements for a SaaS dashboard."
          images={[
            'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
          ]}
          imagePosition="right"
        />
      </div>
      <style>{`
        .retro-exp-section {
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 0.7rem 0 3rem 0;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
        }
        .retro-exp-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .retro-exp-heading {
          font-size: 2.2rem;
          font-weight: bold;
          border-bottom: 1px solid #000;
          margin-bottom: 2.5rem;
          padding-bottom: 0.7rem;
          letter-spacing: -0.01em;
          text-align: left;
        }
        @media (max-width: 600px) {
          .retro-exp-container {
            padding: 0 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Experience;
