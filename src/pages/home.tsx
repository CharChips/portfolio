// using only a static image, no state or refs needed
// import React from 'react';
import mainImage from '../assets/image.png';

function Home() {
  // Single static main photo imported from assets
  // (bundler will take care of file path)
  // `mainImage` is already declared above via import
  

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Header Section */}
      <div style={{ height: '2.5rem' }} />
      {/* Main Section */}
      <div className="home-main-row">
        {/* Main Image (static) */}
        <div className="home-main-img">
          <img src={mainImage} alt="profile" className="home-main-img-img" />
        </div>
        {/* Description */}
        <div className="home-main-desc">
          <div style={{ marginBottom: 16, color: '#444', fontWeight: 500 }}>Lives & works in Mumbai, India</div>
          <div style={{ marginBottom: 18 }}>
            I live and work in Mumbai, India, and I’m currently pursuing a Bachelor's degree in Artificial Intelligence and Data Science. I serve as the COO at FAD, where I handle operations, strategy, and project execution, and I also serve as the Vice President of ISA-VESIT.          </div>
          <div style={{ marginBottom: 18 }}>
            I work across IoT, robotics, embedded systems, AI integration, and cloud projects. I don’t limit myself to a single specialization—instead, I focus on building practical, end-to-end systems that blend hardware, software, and intelligent automation. Some of my key projects include a pipe-inspection rover with LiDAR mapping, machine-learning applications on Raspberry Pi, and various multidisciplinary engineering prototypes.          </div>
          <div style={{ marginBottom: 24 }}>
            I’ve trained over 50 students through workshops on Raspberry Pi, Linux, AI/ML, and digital design, and I’ve mentored teams in app development, embedded systems, and project management. Along with my technical background, I bring strong management and leadership skills, and I’m deeply interested in real-time AI and IoT solutions for automation and smart systems.          </div>
        </div>
      </div>

      {/* Experience & Education Section */}
      <div className="home-exp-row">
        {/* Experience as bullet points */}
        <div className="home-exp-block">
          <h2 className="home-exp-heading">Experience</h2>
          <ul className="home-bullets">
            <li>ISA-VESIT Vice President: Strategic leadership, event planning, and team coordination</li>
            <li>FAD (COO): Operations, growth strategy, product development, and community building</li>
            <li>Internship Mentor: Guided teams in app development and embedded systems</li>
            <li>Bootcamp Instructor: Delivered training in AI/ML, IoT, Linux, and Verilog</li>

          </ul>
        </div>
        {/* Education */}
        <div className="home-exp-block">
          <h2 className="home-exp-heading">Education</h2>
          <ul className="home-bullets">
            <li>Bachelor's in Artificial Intelligence & Data Science</li>
            <li>VESIT, Mumbai</li>
            <li>Relevant coursework: Computer Architecture, IoT, Networking, Operating Systems, Cloud Computing, Data Warehousing, Software Engineering, Data Analysis & Visualization</li>

          </ul>
        </div>
      </div>

      {/* Footer: Contact Info (sketch style) */}
      <footer className="home-footer">
        <span>
          <a href="mailto:sahoocharchit@gmail.com" className="home-footer-link">sahoocharchit@gmail.com</a>
        </span>
        <span>
          <a href="https://github.com/CharChips" target="_blank" rel="noopener noreferrer" className="home-footer-link">GitHub</a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/charchit-sahoo/" target="_blank" rel="noopener noreferrer" className="home-footer-link">LinkedIn</a>
        </span>
      </footer>
      <style>{`
      .home-main-row {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 3vw 0;
        background: #f5f5f5;
        gap: 2.5rem;
      }
      .home-main-img {
        width: 420px;
        height: 320px;
        background: linear-gradient(120deg, #ffb347 0%, #ffcc33 100%);
        border-radius: 8px;
        margin-right: 0;
        box-shadow: 0 2px 24px #0001;
        overflow: hidden;
        cursor: pointer;
        flex-shrink: 0;
      }
      .home-main-img-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s;
      }
      .home-main-desc {
        max-width: 540px;
        color: #232323;
        font-size: 1.15rem;
        line-height: 1.7;
      }
      .home-exp-row {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 3vw;
        margin: 3.5rem 0 6.5rem 0;
        width: 100%;
      }
      .home-exp-block {
        min-width: 240px;
        max-width: 420px;
      }
      .home-exp-heading {
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 1.2rem;
        color: #232323;
      }
      .home-bullets {
        padding-left: 1.2em;
        font-size: 1.08rem;
        line-height: 1.7;
      }
      .home-footer {
        width: 100vw;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        border-top: 2px solid #bbb;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 1.15rem;
        padding: 0.7rem 0;
        z-index: 100;
      }
      .home-footer-link {
        color: #232323;
        text-decoration: none;
      }
      .home-footer-link:hover, .home-footer-link:focus {
        text-decoration: underline;
      }
      @media (max-width: 800px) {
        .home-main-row {
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .home-main-img {
          width: 95vw;
          max-width: 340px;
          height: 200px;
        }
        .home-main-desc {
          font-size: 1rem;
          max-width: 98vw;
        }
        .home-exp-row {
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
          margin: 2.2rem 0 5rem 0;
        }
        .home-exp-block {
          min-width: 0;
          max-width: 98vw;
        }
        .home-exp-heading {
          font-size: 1.3rem;
        }
        .home-footer {
          position: static;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 1rem;
          padding: 1.1rem 0 0.7rem 0;
        }
      }
    `}</style>
    </div>
  );
}

export default Home;
