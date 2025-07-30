import React, { useRef, useState } from 'react';

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
      {/* Removed duplicate greeting and name from home page header */}
      <div style={{ height: '2.5rem' }} />
      {/* Main Section */}

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '3vw 0', background: '#f5f5f5' }}>
        {/* Main Image with hover slideshow */}
        <div
          style={{ width: 420, height: 320, background: 'linear-gradient(120deg, #ffb347 0%, #ffcc33 100%)', borderRadius: 8, marginRight: 48, boxShadow: '0 2px 24px #0001', overflow: 'hidden', cursor: 'pointer' }}
          onMouseEnter={startSlideshow}
          onMouseLeave={stopSlideshow}
        >
          <img src={images[imgIdx]} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.3s' }} />
        </div>
        {/* Description */}
        <div style={{ maxWidth: 540, color: '#232323', fontSize: '1.15rem', lineHeight: 1.7 }}>
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
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '6vw',
        margin: '3.5rem 0 6.5rem 0',
        width: '100%'
      }}>
        {/* Experience as bullet points */}
        <div style={{ minWidth: 340, maxWidth: 420 }}>
          <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '1.2rem', color: '#232323' }}>Experience</h2>
          <ul className="home-bullets">
            <li>ISA-VESIT Secretary: Leadership, event organization</li>
            <li>FAD: Technical workshops, hackathons</li>
            <li>Internship Mentor: App Dev, Embedded Systems</li>
            <li>Bootcamp: AI/ML, IoT, Linux, Verilog</li>
          </ul>
        </div>
        {/* Education */}
        <div style={{ minWidth: 320, maxWidth: 400 }}>
          <h2 style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '1.2rem', color: '#232323' }}>Education</h2>
          <ul className="home-bullets">
            <li>Bachelor's in Electronics & Telecommunication Engineering</li>
            <li>VESIT, Mumbai</li>
            <li>Relevant coursework: Digital Design, AI/ML, IoT</li>
          </ul>
        </div>
      </div>

    {/* Footer: Contact Info (sketch style) */}
    <footer style={{
      width: '100vw',
      position: 'fixed',
      left: 0,
      bottom: 0,
      background: '#fff',
      borderTop: '2px solid #bbb',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      fontSize: '1.15rem',
      padding: '0.7rem 0',
      zIndex: 100
    }}>
      <span>
        <a href="mailto:sahoocharchit@gmail.com" style={{ color: '#232323', textDecoration: 'none' }}>sahoocharchit@gmail.com</a>
      </span>
      <span>
        <a href="https://github.com/CharChips" target="_blank" rel="noopener noreferrer" style={{ color: '#232323', textDecoration: 'none' }}>GitHub</a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/charchit-sahoo/" target="_blank" rel="noopener noreferrer" style={{ color: '#232323', textDecoration: 'none' }}>LinkedIn</a>
      </span>
    </footer>
  </div>
  );
}

export default Home;
