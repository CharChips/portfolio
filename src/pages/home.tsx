import { useRef, useState } from 'react';

function Home() {
  // Slideshow images
  const images = [
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80"
  ];
  const [imgIdx, setImgIdx] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startSlideshow = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setImgIdx(idx => (idx + 1) % images.length);
    }, 700);
  };
  const stopSlideshow = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setImgIdx(0);
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Header Section */}
      <div style={{ height: '2.5rem' }} />
      {/* Main Section */}
      <div className="home-main-row">
        {/* Main Image with hover slideshow */}
        <div
          className="home-main-img"
          onMouseEnter={startSlideshow}
          onMouseLeave={stopSlideshow}
        >
          <img src={images[imgIdx]} alt="profile" className="home-main-img-img" />
        </div>
        {/* Description */}
        <div className="home-main-desc">
          <div style={{ marginBottom: 16, color: '#444', fontWeight: 500 }}>Lives & works in Mumbai, India</div>
          <div style={{ marginBottom: 18 }}>
            Charchit Sahoo lives and works in Mumbai, India. He is currently pursuing his Bachelor's in Electronics and Telecommunication Engineering and serves as the Secretary of ISA-VESIT, leading initiatives to bridge the gap between students and industry through technical workshops and hackathons.
          </div>
          <div style={{ marginBottom: 18 }}>
            Charchit specializes in IoT, robotics, and AI integration, with hands-on experience in developing end-to-end solutions combining hardware and software. He has worked on projects involving pipe inspection rovers with LiDAR mapping, cloud-based security camera systems, and machine learning applications on Raspberry Pi.
          </div>
          <div style={{ marginBottom: 24 }}>
            As a workshop instructor, Charchit has taught over 50 students in areas like Raspberry Pi, Linux, AI/ML, and digital design with Verilog. He has also mentored internship groups on app development and embedded systems. A passionate innovator, Charchit is actively exploring real-time AI and IoT applications for industrial automation and smart systems.
          </div>
        </div>
      </div>

      {/* Experience & Education Section */}
      <div className="home-exp-row">
        {/* Experience as bullet points */}
        <div className="home-exp-block">
          <h2 className="home-exp-heading">Experience</h2>
          <ul className="home-bullets">
            <li>ISA-VESIT Secretary: Leadership, event organization</li>
            <li>FAD: Technical workshops, hackathons</li>
            <li>Internship Mentor: App Dev, Embedded Systems</li>
            <li>Bootcamp: AI/ML, IoT, Linux, Verilog</li>
          </ul>
        </div>
        {/* Education */}
        <div className="home-exp-block">
          <h2 className="home-exp-heading">Education</h2>
          <ul className="home-bullets">
            <li>Bachelor's in Electronics & Telecommunication Engineering</li>
            <li>VESIT, Mumbai</li>
            <li>Relevant coursework: Digital Design, AI/ML, IoT</li>
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
