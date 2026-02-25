
import { useState, useEffect } from 'react';
import fadlogo from '../assets/fad/fadlogo.jpg';
import fad1 from '../assets/fad/fad1.jpg';
import prod1 from '../assets/fad/prod1.jpg';
import fad9 from '../assets/fad/9.png';

function FadDetails() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWebsiteClick = () => {
    window.open('https://fadclothing.com', '_blank');
  };

  return (
    <section className="retro-fad-section">
      <div className="retro-fad-container">
        {/* Main Header with Website CTA */}
        <div className="retro-fad-header">
          <div className="retro-fad-header-content">
            <div className="retro-fad-title">Charchit Sahoo</div>
            <div className="retro-fad-role">Co-Founder & Chief Operating Officer (COO), FAD</div>
            <div className="retro-fad-italic">Student-led startup focused on structured thrifting and sustainable fashion</div>
            
            {/* Attractive Website CTA */}
            <div className="retro-fad-cta-container">
              <button onClick={handleWebsiteClick} className="retro-fad-website-btn">
                <div className="retro-fad-btn-icon">🌐</div>
                <div className="retro-fad-btn-content">
                  <div className="retro-fad-btn-text">Visit FAD Clothing</div>
                  <div className="retro-fad-btn-url">fadclothing.com</div>
                </div>
                <div className="retro-fad-btn-arrow">→</div>
              </button>
              <div className="retro-fad-cta-subtitle">Discover sustainable fashion that makes a difference</div>
            </div>
          </div>
          
          {/* FAD Logo */}
          <div className="retro-fad-logo-container">
            <div className="retro-fad-logo-box">
              <img 
                src={fadlogo}
                alt="FAD Logo"
                className="retro-fad-logo-img"
              />
              <div className="retro-fad-logo-label">FAD</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="retro-fad-content">
          {/* Left Column - Text Content */}
          <div className="retro-fad-text">
            <p className="retro-fad-p">
              As the <b>Co-Founder & COO of FAD</b>, I oversee <b>operations, logistics, vendor partnerships, and team management</b> to scale a thrift-focused sustainable fashion marketplace. My role combines <b>strategy, execution, and leadership</b>, ensuring smooth day-to-day operations while driving long-term growth.
            </p>
            
            <div className="retro-fad-subheading">Key Highlights:</div>
            <ul className="retro-fad-list">
              <li><b>Leadership & Team Management:</b> Lead a team of 4 interns, fostering ownership and collaboration across projects.</li>
              <li><b>Operational Excellence:</b> Designed workflows and logistics pipelines to streamline vendor onboarding and product circulation.</li>
              <li><b>Recognition & Achievements:</b>
                <ul className="retro-fad-list-nested">
                  <li><b>Incubated by HABIT Foundation</b>, which supports high-potential student-led startups.</li>
                  <li><b>Top 5 Finalist</b> at <i>Indian Collegiate Startup Week 2025</i> (Grand Finale upcoming).</li>
                  <li><b>Winner – Sustainable Startup Innovation</b>, FMS Delhi.</li>
                  <li><b>Winner – Indian Intercollegiate Startup Week Competition</b></li>
                  <li>Invited as a <b>Hiring Partner by IIT Bombay</b>, recognized for FAD's sustainability-driven model.</li>
                </ul>
              </li>
              <li><b>Mentorship & Growth:</b> Mentored by an <b>IIT Kharagpur alumnus</b>, gaining access to strategic guidance and networking.</li>
            </ul>
            
            <p className="retro-fad-p">
              Through this journey, I've been at the forefront of <b>building a sustainable, scalable marketplace model</b> that combines <b>business growth with impact-driven fashion innovation</b>.
            </p>
          </div>
          
          {/* Right Column - Competition Win Photo */}
          <div className="retro-fad-visual">
            <div className="retro-fad-achievement-photo">
              <img 
                src={fad1}
                alt="FAD Team - Indian Collegiate Startup Week Competition Winners"
                className="retro-fad-win-img"
              />
              <div className="retro-fad-achievement-overlay">
                <div className="retro-fad-achievement-title">🏆 Competition Winners</div>
                <div className="retro-fad-achievement-desc">Indian Collegiate Startup Week</div>
              </div>
              
              {/* Decorative elements */}
              <div className="retro-fad-winner-badge">WINNER</div>
              <div className="retro-fad-sparkles">
                <div className="retro-fad-sparkle retro-fad-sparkle-1">✨</div>
                <div className="retro-fad-sparkle retro-fad-sparkle-2">⭐</div>
                <div className="retro-fad-sparkle retro-fad-sparkle-3">✨</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Showcase Section */}
        <div className="retro-fad-products">
          <div className="retro-fad-products-header">
            <h3 className="retro-fad-section-title">Our Products</h3>
            <p className="retro-fad-products-desc">Curated sustainable fashion pieces from our thrift marketplace</p>
          </div>
          
          <div className="retro-fad-products-grid">
            {/* Product 1 */}
            <a
              className="retro-fad-product-card"
              href="https://fadclothing.com/product/stylish-cropped-anorak/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`
              }}
            >
              <div className="retro-fad-product-image">
                <img
                  src={prod1}
                  alt="FAD Product - Vintage Jacket"
                  className="retro-fad-product-img"
                />
                <div className="retro-fad-product-overlay">
                  <div className="retro-fad-product-badge">SUSTAINABLE</div>
                </div>
              </div>
              <div className="retro-fad-product-info">
                <div className="retro-fad-product-name">Vintage Denim Collection</div>
                <div className="retro-fad-product-category">Curated Thrift</div>
              </div>
            </a>
            
            {/* Product 2 */}
            <div 
              className="retro-fad-product-card"
              style={{
                transform: `translateY(${scrollY * 0.08}px)`
              }}
            >
              <div className="retro-fad-product-image">
                <img 
                  src={fad9}
                  alt="FAD Product - Sustainable Fashion"
                  className="retro-fad-product-img"
                />
                <div className="retro-fad-product-overlay">
                  <div className="retro-fad-product-badge">ECO-FRIENDLY</div>
                </div>
              </div>
              <div className="retro-fad-product-info">
                <div className="retro-fad-product-name">Structured Fashion Line</div>
                <div className="retro-fad-product-category">Premium Thrift</div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="retro-fad-bottom-cta">
            <button onClick={handleWebsiteClick} className="retro-fad-explore-btn">
              Explore More on fadclothing.com
              <span className="retro-fad-btn-shine"></span>
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .retro-fad-section {
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 2rem 0 4rem 0;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
          overflow-x: hidden;
        }
        
        .retro-fad-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .retro-fad-header {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
          margin-bottom: 4rem;
          padding: 2rem 0;
          border-bottom: 3px solid #000;
        }
        
        .retro-fad-header-content {
          flex: 1;
        }
        
        .retro-fad-logo-container {
          display: flex;
          align-items: center;
        }
        
        .retro-fad-logo-box {
          position: relative;
          width: 120px;
          height: 120px;
          border: 3px solid #000;
          background: #fff;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        
        .retro-fad-logo-box:hover {
          transform: rotate(5deg) scale(1.05);
        }
        
        .retro-fad-logo-img {
          width: 100%;
          height: 80%;
          object-fit: cover;
        }
        
        .retro-fad-logo-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: #000;
          color: #fff;
          text-align: center;
          font-weight: bold;
          padding: 4px;
          height: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .retro-fad-cta-container {
          margin-top: 2rem;
        }
        
        .retro-fad-website-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: linear-gradient(45deg, #000, #333);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          position: relative;
          overflow: hidden;
        }
        
        .retro-fad-website-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0,0,0,0.4);
          background: linear-gradient(45deg, #333, #000);
        }
        
        .retro-fad-website-btn:active {
          transform: translateY(0);
        }
        
        .retro-fad-btn-icon {
          font-size: 1.5rem;
        }
        
        .retro-fad-btn-content {
          flex: 1;
          text-align: left;
        }
        
        .retro-fad-btn-text {
          font-weight: bold;
          font-size: 1.1rem;
        }
        
        .retro-fad-btn-url {
          font-size: 0.9rem;
          opacity: 0.9;
          font-style: italic;
        }
        
        .retro-fad-btn-arrow {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        
        .retro-fad-website-btn:hover .retro-fad-btn-arrow {
          transform: translateX(5px);
        }
        
        .retro-fad-cta-subtitle {
          margin-top: 0.5rem;
          font-style: italic;
          color: #666;
          font-size: 0.95rem;
        }
        
        .retro-fad-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          margin-bottom: 5rem;
        }
        
        .retro-fad-visual {
          position: relative;
        }
        
        .retro-fad-achievement-photo {
          position: relative;
          width: 100%;
          height: 500px;
          border: 3px solid #000;
          overflow: hidden;
          background: #f8f8f8;
        }
        
        .retro-fad-win-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .retro-fad-achievement-photo:hover .retro-fad-win-img {
          transform: scale(1.05);
        }
        
        .retro-fad-achievement-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          color: white;
          padding: 2rem 1.5rem 1.5rem;
        }
        
        .retro-fad-achievement-title {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .retro-fad-achievement-desc {
          font-size: 1rem;
          opacity: 0.9;
        }
        
        .retro-fad-winner-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #ffd700;
          color: #000;
          padding: 8px 16px;
          font-weight: bold;
          font-size: 0.9rem;
          border: 2px solid #000;
          transform: rotate(15deg);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: rotate(15deg) scale(1); }
          50% { transform: rotate(15deg) scale(1.1); }
        }
        
        .retro-fad-sparkles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .retro-fad-sparkle {
          position: absolute;
          font-size: 1.5rem;
          animation: sparkle 3s infinite;
        }
        
        .retro-fad-sparkle-1 {
          top: 15%;
          left: 15%;
          animation-delay: 0s;
        }
        
        .retro-fad-sparkle-2 {
          top: 25%;
          right: 20%;
          animation-delay: 1s;
        }
        
        .retro-fad-sparkle-3 {
          bottom: 30%;
          left: 20%;
          animation-delay: 2s;
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .retro-fad-products {
          margin-top: 5rem;
        }
        
        .retro-fad-products-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .retro-fad-section-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          border-bottom: 3px solid #000;
          display: inline-block;
          padding-bottom: 0.5rem;
        }
        
        .retro-fad-products-desc {
          font-size: 1.1rem;
          color: #666;
          font-style: italic;
        }
        
        .retro-fad-products-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        
        .retro-fad-product-card {
          border: 3px solid #000;
          background: #fff;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .retro-fad-product-card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        .retro-fad-product-image {
          position: relative;
          height: 300px;
          overflow: hidden;
        }
        
        .retro-fad-product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        /* Link styling for clickable product */
        .retro-fad-product-link {
          display: block;
          width: 100%;
          height: 100%;
          color: inherit;
          text-decoration: none;
        }
        .retro-fad-product-link-name {
          color: inherit;
          text-decoration: none;
          font-weight: bold;
        }
        .retro-fad-product-link-name:hover {
          text-decoration: underline;
        }
        
        .retro-fad-product-card:hover .retro-fad-product-img {
          transform: scale(1.1);
        }
        
        .retro-fad-product-overlay {
          position: absolute;
          top: 15px;
          left: 15px;
        }
        
        .retro-fad-product-badge {
          background: #000;
          color: #fff;
          padding: 6px 12px;
          font-size: 0.8rem;
          font-weight: bold;
          border: 2px solid #fff;
        }
        
        .retro-fad-product-info {
          padding: 1.5rem;
        }
        
        .retro-fad-product-name {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .retro-fad-product-category {
          color: #666;
          font-size: 1rem;
          font-style: italic;
        }
        
        .retro-fad-bottom-cta {
          text-align: center;
        }
        
        .retro-fad-explore-btn {
          background: linear-gradient(45deg, #000, #333);
          color: white;
          border: none;
          padding: 1.2rem 2.5rem;
          font-size: 1.1rem;
          font-weight: bold;
          font-family: inherit;
          border-radius: 50px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        
        .retro-fad-explore-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.4);
        }
        
        .retro-fad-btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .retro-fad-explore-btn:hover .retro-fad-btn-shine {
          left: 100%;
        }
        
        .retro-fad-title {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.3rem;
        }
        
        .retro-fad-role {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 0.3rem;
        }
        
        .retro-fad-italic {
          font-size: 1.1rem;
          font-style: italic;
          margin-bottom: 1.5rem;
          color: #333;
        }
        
        .retro-fad-p {
          font-size: 1.08rem;
          margin-bottom: 1.3rem;
          line-height: 1.6;
        }
        
        .retro-fad-subheading {
          font-size: 1.15rem;
          font-weight: bold;
          margin-bottom: 0.8rem;
        }
        
        .retro-fad-list {
          font-size: 1.08rem;
          margin-bottom: 1.3rem;
          padding-left: 1.2em;
        }
        
        .retro-fad-list li {
          margin-bottom: 0.8em;
          line-height: 1.5;
        }
        
        .retro-fad-list-nested {
          font-size: 1.02rem;
          margin-top: 0.6em;
          margin-bottom: 0.6em;
          padding-left: 1.2em;
        }
        
        .retro-fad-list-nested li {
          margin-bottom: 0.5em;
        }
        
        @media (max-width: 1024px) {
          .retro-fad-products-grid {
            gap: 2rem;
          }
        }
        
        @media (max-width: 968px) {
          .retro-fad-header {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .retro-fad-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .retro-fad-visual {
            order: -1;
          }
          
          .retro-fad-products-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .retro-fad-container {
            padding: 0 1rem;
          }
          
          .retro-fad-achievement-photo {
            height: 400px;
          }
          
          .retro-fad-logo-box {
            width: 100px;
            height: 100px;
          }
          
          .retro-fad-website-btn {
            width: 100%;
            justify-content: center;
          }
          
          .retro-fad-product-image {
            height: 250px;
          }
        }
        
        @media (max-width: 580px) {
          .retro-fad-section {
            padding: 1.5rem 0 3rem 0;
          }
          
          .retro-fad-header {
            margin-bottom: 2rem;
          }
          
          .retro-fad-title {
            font-size: 1.4rem;
          }
          
          .retro-fad-role {
            font-size: 1.1rem;
          }
          
          .retro-fad-section-title {
            font-size: 1.6rem;
          }
          
          .retro-fad-achievement-photo {
            height: 320px;
          }
          
          .retro-fad-logo-box {
            width: 80px;
            height: 80px;
          }
          
          .retro-fad-website-btn {
            padding: 0.8rem 1rem;
            gap: 0.8rem;
          }
          
          .retro-fad-btn-text {
            font-size: 1rem;
          }
          
          .retro-fad-product-image {
            height: 220px;
          }
          
          .retro-fad-sparkle {
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 400px) {
          .retro-fad-achievement-photo {
            height: 280px;
          }
          
          .retro-fad-product-image {
            height: 200px;
          }
          
          .retro-fad-explore-btn {
            padding: 1rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

export default FadDetails;