function IsaDetails() {

  return (
    <section className="retro-isa-section">
      <div className="retro-isa-container">
        {/* Main Header */}
        <div className="retro-isa-header">
          <div className="retro-isa-header-content">
            <div className="retro-isa-title">Charchit Sahoo</div>
            <div className="retro-isa-role">Vice President, ISA-VESIT</div>
            <div className="retro-isa-italic">
              Leadership Journey: Technical Coordinator → Secretary → Vice President
            </div>

            {/* ISA-VESIT Info */}
            <div className="retro-isa-company-info">
              <div className="retro-isa-company-name">ISA-VESIT Student Chapter</div>
              <div className="retro-isa-company-desc">
                Part of ISA Maharashtra & ISA International, bridging the gap between students
                and industry by conducting technical workshops, projects, and hackathons.
              </div>
              <div className="retro-isa-company-link">
                <a href="https://www.isavesit.org.in/council" target="_blank" rel="noopener noreferrer">
                  View ISA council</a>
              </div>
            </div>
          </div>

          {/* ISA Logo/Icon */}
          <div className="retro-isa-logo-container">
            <div className="retro-isa-logo-box">
              <div className="retro-isa-logo-icon">🤝</div>
              <div className="retro-isa-logo-label">ISA-VESIT</div>
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="retro-isa-content">
          <div className="retro-isa-text">
            <p className="retro-isa-p">
              My journey at <b>ISA-VESIT</b> has been a transformative leadership experience,
              where I grew from a <b>Technical Coordinator</b> to <b>Secretary</b>, and now serve
              as the <b>Vice President</b>, driving initiatives for a 60+ member council.
            </p>

            {/* Timeline */}
            <div className="retro-isa-subheading">Leadership Roles & Achievements</div>
            <ul className="retro-isa-list">
              <li>
                <b>Vice President (May 2025 – Present):</b> Steering strategic direction, overseeing
                60+ member initiatives, and maintaining liaison with ISA Maharashtra and
                international chapters.
              </li>
              <li>
                <b>Secretary (July 2024 – May 2025):</b> Directed operations for 40+ members,
                executed 10+ workshops & speaker sessions, and led the council’s first hackathon.
              </li>
              <li>
                <b>Technical Coordinator (Aug 2023 – June 2024):</b> Built internal tools, managed
                event logistics, and supported technical project execution.
              </li>
            </ul>

            {/* Skills */}
            <div className="retro-isa-subheading">Skills & Experience Gained</div>
            <ul className="retro-isa-list">
              <li>Leadership & Strategic Planning</li>
              <li>Event & Workshop Management</li>
              <li>Hackathon Organization</li>
              <li>Team Collaboration & Communication</li>
              <li>Technical Project Development</li>
            </ul>

            <p className="retro-isa-p">
              Through ISA-VESIT, I’ve been able to <b>merge technical expertise with leadership</b>,
              impacting my peers while building scalable initiatives for the student community.
            </p>
          </div>

          {/* Visual Content */}
          <div className="retro-isa-visual">
            <div className="retro-isa-tech-stack">
              <div className="retro-isa-tech-title">🌟 Initiatives</div>
              <div className="retro-isa-tech-items">
                <div className="retro-isa-tech-item">Workshops</div>
                <div className="retro-isa-tech-item">Hackathons</div>
                <div className="retro-isa-tech-item">Tech Talks</div>
                <div className="retro-isa-tech-item">Projects</div>
                <div className="retro-isa-tech-item">Student-Industry Connect</div>
              </div>
            </div>

            <div className="retro-isa-achievement-box">
              <div className="retro-isa-achievement-icon">🚀</div>
              <div className="retro-isa-achievement-content">
                <div className="retro-isa-achievement-title">Growth Journey</div>
                <div className="retro-isa-achievement-desc">
                  From Technical Coordinator → Secretary → Vice President
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="retro-isa-additional">
          <div className="retro-isa-section-title">Key Highlights</div>
          <div className="retro-isa-projects-grid">
            <div className="retro-isa-project-card">
              <div className="retro-isa-project-icon">🎤</div>
              <div className="retro-isa-project-title">Workshops & Sessions</div>
              <div className="retro-isa-project-desc">Executed 10+ technical workshops and talks.</div>
            </div>
            <div className="retro-isa-project-card">
              <div className="retro-isa-project-icon">💡</div>
              <div className="retro-isa-project-title">Hackathon</div>
              <div className="retro-isa-project-desc">
                Organized ISA-VESIT’s first hackathon with cross-college participation.
              </div>
            </div>
            <div className="retro-isa-project-card">
              <div className="retro-isa-project-icon">⚙️</div>
              <div className="retro-isa-project-title">Tech & Tools</div>
              <div className="retro-isa-project-desc">
                Built internal tools and streamlined event operations.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .retro-isa-section {
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 0.7rem 0 3rem 0;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Menlo', 'monospace', sans-serif;
        }
        .retro-isa-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .retro-isa-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3rem;
          padding: 2rem 0;
          border-bottom: 1px solid #000;
        }
        .retro-isa-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .retro-isa-role {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }
        .retro-isa-italic {
          font-style: italic;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 1.5rem;
        }
        .retro-isa-company-info {
          background: #f8f8f8;
          padding: 1rem;
          border: 1px solid #ddd;
        }
        .retro-isa-company-name {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }
        .retro-isa-company-desc {
          font-size: 0.95rem;
          color: #555;
        }
        .retro-isa-logo-box {
          text-align: center;
          padding: 1.5rem;
          border: 2px solid #000;
          background: #fff;
          min-width: 120px;
        }
        .retro-isa-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .retro-isa-text {
          line-height: 1.7;
        }
        .retro-isa-p {
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
          color: #333;
        }
        .retro-isa-subheading {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.3rem;
        }
        .retro-isa-list {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .retro-isa-list li {
          margin-bottom: 0.8rem;
          color: #444;
          line-height: 1.6;
        }
        .retro-isa-tech-stack {
          background: #f8f8f8;
          border: 1px solid #ddd;
          padding: 1.5rem;
        }
        .retro-isa-tech-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-align: center;
        }
        .retro-isa-tech-item {
          background: #fff;
          border: 1px solid #ccc;
          padding: 0.5rem;
          text-align: center;
          font-size: 0.9rem;
        }
        .retro-isa-achievement-box {
          background: #000;
          color: #fff;
          padding: 1.5rem;
          text-align: center;
        }
        .retro-isa-additional {
          margin-top: 3rem;
        }
        .retro-isa-section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
          border-bottom: 1px solid #000;
          padding-bottom: 0.5rem;
        }
        .retro-isa-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .retro-isa-project-card {
          background: #f8f8f8;
          border: 1px solid #ddd;
          padding: 1.5rem;
          text-align: center;
        }
        .retro-isa-project-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .retro-isa-project-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .retro-isa-project-desc {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .retro-isa-header {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          .retro-isa-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default IsaDetails;
