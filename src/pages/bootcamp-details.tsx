function BootcampDetails() {

  return (
    <section className="retro-bootcamp-section">
      <div className="retro-bootcamp-container">
        {/* Main Header */}
        <div className="retro-bootcamp-header">
          <div className="retro-bootcamp-header-content">
            <div className="retro-bootcamp-title">Charchit Sahoo</div>
            <div className="retro-bootcamp-role">ISA VESIT Tech Bootcamps</div>
            <div className="retro-bootcamp-italic">
              Led intensive workshops teaching Raspberry Pi, Linux, Machine Learning, and AI
            </div>

            {/* Bootcamp Info */}
            <div className="retro-bootcamp-company-info">
              <div className="retro-bootcamp-company-name">ISA VESIT - Ideation Instruments</div>
              <div className="retro-bootcamp-company-desc">
                Led two comprehensive bootcamps as speaker and instructor, teaching embedded systems, 
                Linux, Python programming, machine learning fundamentals, and AI applications through 
                hands-on projects.
              </div>
            </div>
          </div>

          {/* Bootcamp Logo/Icon */}
          <div className="retro-bootcamp-logo-container">
            <div className="retro-bootcamp-logo-box">
              <div className="retro-bootcamp-logo-icon">🎓</div>
              <div className="retro-bootcamp-logo-label">ISA VESIT</div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="retro-bootcamp-content">
          {/* Left Column - Text Content */}
          <div className="retro-bootcamp-text">
            <p className="retro-bootcamp-p">
              I participated in two intensive <b>ISA VESIT Tech Bootcamps</b> organized by 
              Ideation Instruments. The <b>Winter Tech Bootcamp</b> focused on Raspberry Pi 
              and Linux fundamentals, while the <b>Summer Tech Bootcamp</b> provided a 
              comprehensive introduction to Machine Learning and AI. These hands-on workshops 
              equipped me with practical skills in embedded systems, Python programming, and 
              modern ML techniques.
            </p>

            {/* Winter Bootcamp */}
            <div className="retro-bootcamp-subheading">🌨️ Winter Tech Bootcamp: Intro to Raspberry Pi and Linux (Dec 2024)</div>
            <p className="retro-bootcamp-p">
              A 3-day intensive workshop exploring Raspberry Pi hardware and Linux fundamentals 
              through hands-on exercises and real-world applications.
            </p>
            <ul className="retro-bootcamp-list">
              <li>
                <b>Understanding Linux:</b> Learned Linux basics, its benefits, and popular 
                distributions like Raspberry Pi OS.
              </li>
              <li>
                <b>Basic Terminal Commands:</b> Mastered essential commands like ls, cd, mkdir, 
                and file permission management.
              </li>
              <li>
                <b>Linux System Management:</b> Managed file permissions and edited system files 
                using nano and vim editors.
              </li>
              <li>
                <b>Raspberry Pi Setup:</b> Understood Raspberry Pi hardware, OS setup, and 
                connecting peripherals easily.
              </li>
              <li>
                <b>GPIO Control:</b> Controlled GPIO pins using Python to create simple LED 
                blinking projects.
              </li>
              <li>
                <b>Machine Learning on Raspberry Pi:</b> Ran machine learning models using 
                TensorFlow Lite with practical examples.
              </li>
              <li>
                <b>Python Programming:</b> Learned Python basics to control LEDs and buttons 
                using Thonny IDE.
              </li>
            </ul>

            {/* Summer Bootcamp */}
            <div className="retro-bootcamp-subheading">☀️ Summer Tech Bootcamp: Foundation of Machine Learning and AI (July 2025)</div>
            <p className="retro-bootcamp-p">
              A comprehensive workshop offering hands-on introduction to Machine Learning, 
              covering data analysis, model building, and real-world ML applications.
            </p>
            <ul className="retro-bootcamp-list">
              <li>
                <b>Introduction to ML & Tools:</b> Learned ML concepts, classes, and key types 
                including supervised, unsupervised, and reinforcement learning. Hands-on with 
                Python, Jupyter, and libraries like scikit-learn, pandas, and matplotlib.
              </li>
              <li>
                <b>Linear Regression:</b> Built a linear regression model to predict house prices, 
                covering data prep, model training, evaluation, and visualization.
              </li>
              <li>
                <b>Classification Algorithms:</b> Explored KNN and logistic regression. Learned 
                metrics like accuracy, precision, recall, and F1-score to evaluate models.
              </li>
              <li>
                <b>Ensemble Methods:</b> Worked with decision trees and random forests, focusing 
                on classification, feature importance, and basic model tuning.
              </li>
              <li>
                <b>Deep Learning Basics:</b> Understood how neural networks work, learned about 
                layers, activation functions, and built a simple model using TensorFlow or Keras.
              </li>
              <li>
                <b>ML on Hardware:</b> Learned how ML runs on edge devices like Raspberry Pi and 
                TPUs, understanding basic constraints and real-world examples.
              </li>
            </ul>

            {/* Key Outcomes */}
            <div className="retro-bootcamp-subheading">Teaching Impact & Outcomes</div>
            <ul className="retro-bootcamp-list">
              <li>
                <b>Comprehensive Raspberry Pi Instruction:</b> Successfully taught students practical 
                knowledge on setting up and working with Raspberry Pi hardware and Linux systems.
              </li>
              <li>
                <b>Python Programming Proficiency:</b> Helped participants develop strong Python skills 
                for both hardware control and data science applications.
              </li>
              <li>
                <b>Machine Learning Foundation:</b> Enabled students to build a solid foundation in ML 
                concepts, supervised and unsupervised learning, and model evaluation.
              </li>
              <li>
                <b>Hands-On Project Guidance:</b> Mentored students in designing and implementing projects 
                combining hardware and software skills, from GPIO control to ML model deployment.
              </li>
              <li>
                <b>Industry-Relevant Skills Transfer:</b> Equipped participants with practical knowledge 
                applicable to real-world automation, robotics, IoT projects, and AI/ML applications.
              </li>
              <li>
                <b>Career Readiness:</b> Prepared students for internships, job interviews, and academic 
                research in AI/ML fields by enhancing their technical confidence.
              </li>
            </ul>

            <p className="retro-bootcamp-p">
              Leading these bootcamp sessions allowed me to share <b>comprehensive technical knowledge</b> 
              spanning embedded systems, Linux administration, Python programming, and modern machine 
              learning techniques. The combination of hardware and software projects, along with the 
              tier-based certification and rewards system, created truly transformative learning 
              experiences for all participants.
            </p>
          </div>

          {/* Right Column - Visual Content */}
          <div className="retro-bootcamp-visual">
            <div className="retro-bootcamp-tech-stack">
              <div className="retro-bootcamp-tech-title">🛠️ Tech Stack</div>
              <div className="retro-bootcamp-tech-items">
                <div className="retro-bootcamp-tech-item">Raspberry Pi</div>
                <div className="retro-bootcamp-tech-item">Linux / Raspberry Pi OS</div>
                <div className="retro-bootcamp-tech-item">Python</div>
                <div className="retro-bootcamp-tech-item">TensorFlow Lite</div>
                <div className="retro-bootcamp-tech-item">Scikit-learn</div>
                <div className="retro-bootcamp-tech-item">Pandas & Matplotlib</div>
                <div className="retro-bootcamp-tech-item">GPIO & Hardware</div>
              </div>
            </div>

            <div className="retro-bootcamp-achievement-box">
              <div className="retro-bootcamp-achievement-icon">🎯</div>
              <div className="retro-bootcamp-achievement-content">
                <div className="retro-bootcamp-achievement-title">Embedded Systems & ML</div>
                <div className="retro-bootcamp-achievement-desc">
                  From hardware to intelligent systems
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="retro-bootcamp-additional">
          <div className="retro-bootcamp-section-title">Bootcamp Highlights</div>
          <div className="retro-bootcamp-projects-grid">
            <div className="retro-bootcamp-project-card">
              <div className="retro-bootcamp-project-icon">🖥️</div>
              <div className="retro-bootcamp-project-title">Student Projects</div>
              <div className="retro-bootcamp-project-desc">
                Mentored students in LED blinking, GPIO control, and hardware interfacing using Python and Thonny IDE.
              </div>
            </div>
            <div className="retro-bootcamp-project-card">
              <div className="retro-bootcamp-project-icon">🐧</div>
              <div className="retro-bootcamp-project-title">Linux Training</div>
              <div className="retro-bootcamp-project-desc">
                Taught terminal commands, file permissions, system management, and text editor proficiency.
              </div>
            </div>
            <div className="retro-bootcamp-project-card">
              <div className="retro-bootcamp-project-icon">🤖</div>
              <div className="retro-bootcamp-project-title">ML Instruction</div>
              <div className="retro-bootcamp-project-desc">
                Instructed students on linear regression, classification algorithms, neural networks, and model evaluation.
              </div>
            </div>
            <div className="retro-bootcamp-project-card">
              <div className="retro-bootcamp-project-icon">🏆</div>
              <div className="retro-bootcamp-project-title">Certification & Rewards</div>
              <div className="retro-bootcamp-project-desc">
                Tier-based certification system with rewards for top performers and active participation.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .retro-bootcamp-section {
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 0.7rem 0 3rem 0;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Menlo', 'monospace', sans-serif;
        }
        .retro-bootcamp-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .retro-bootcamp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3rem;
          padding: 2rem 0;
          border-bottom: 1px solid #000;
        }
        .retro-bootcamp-header-content {
          flex: 1;
          max-width: 600px;
        }
        .retro-bootcamp-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .retro-bootcamp-role {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }
        .retro-bootcamp-italic {
          font-style: italic;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 1.5rem;
        }
        .retro-bootcamp-company-info {
          background: #f8f8f8;
          padding: 1rem;
          border: 1px solid #ddd;
        }
        .retro-bootcamp-company-name {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
        }
        .retro-bootcamp-company-desc {
          font-size: 0.95rem;
          color: #555;
        }
        .retro-bootcamp-logo-container {
          flex-shrink: 0;
          margin-left: 2rem;
        }
        .retro-bootcamp-logo-box {
          text-align: center;
          padding: 1.5rem;
          border: 2px solid #000;
          background: #fff;
          min-width: 120px;
        }
        .retro-bootcamp-logo-icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        .retro-bootcamp-logo-label {
          font-size: 1.1rem;
          font-weight: bold;
          color: #000;
        }
        .retro-bootcamp-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .retro-bootcamp-text {
          line-height: 1.7;
        }
        .retro-bootcamp-p {
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
          color: #333;
        }
        .retro-bootcamp-subheading {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.3rem;
        }
        .retro-bootcamp-list {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .retro-bootcamp-list li {
          margin-bottom: 0.8rem;
          color: #444;
          line-height: 1.6;
        }
        .retro-bootcamp-visual {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .retro-bootcamp-tech-stack {
          background: #f8f8f8;
          border: 1px solid #ddd;
          padding: 1.5rem;
        }
        .retro-bootcamp-tech-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-align: center;
        }
        .retro-bootcamp-tech-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .retro-bootcamp-tech-item {
          background: #fff;
          border: 1px solid #ccc;
          padding: 0.5rem;
          text-align: center;
          font-size: 0.9rem;
        }
        .retro-bootcamp-achievement-box {
          background: #000;
          color: #fff;
          padding: 1.5rem;
          text-align: center;
        }
        .retro-bootcamp-achievement-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .retro-bootcamp-achievement-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }
        .retro-bootcamp-achievement-desc {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        .retro-bootcamp-additional {
          margin-top: 3rem;
        }
        .retro-bootcamp-section-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          text-align: center;
          border-bottom: 1px solid #000;
          padding-bottom: 0.5rem;
        }
        .retro-bootcamp-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .retro-bootcamp-project-card {
          background: #f8f8f8;
          border: 1px solid #ddd;
          padding: 1.5rem;
          text-align: center;
        }
        .retro-bootcamp-project-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .retro-bootcamp-project-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .retro-bootcamp-project-desc {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .retro-bootcamp-header {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          .retro-bootcamp-logo-container {
            margin-left: 0;
          }
          .retro-bootcamp-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .retro-bootcamp-projects-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .retro-bootcamp-container {
            padding: 0 0.5rem;
          }
          .retro-bootcamp-title {
            font-size: 2rem;
          }
          .retro-bootcamp-role {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
}

export default BootcampDetails;