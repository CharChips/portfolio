import { useState } from 'react';
import ProjectImage from '../components/ProjectImage';

// project images
import lumina1 from '../assets/projects/lumina/1.jpg';
import lumina2 from '../assets/projects/lumina/2.jpg';
import lumina3 from '../assets/projects/lumina/3.jpg';
import powerbi2_1 from '../assets/projects/powerbiProject2/1.png';
import powerbi1_1 from '../assets/projects/powerbi_project1/1.png';
import powerbi1_2 from '../assets/projects/powerbi_project1/2.png';
import powerbi1_3 from '../assets/projects/powerbi_project1/3.png';
import piper1 from '../assets/projects/piper/1.png';
import piper2 from '../assets/projects/piper/2.png';
import piper3 from '../assets/projects/piper/3.jpg';

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  timeline: string;
  status: string;
  tags: string[];
  codeUrl: string;
  demoUrl: string;
  playStoreUrl?: string;
  guestCredentials?: {
    username: string;
    password: string;
    note: string;
  };
  photos: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = ['All', 'Power BI', 'App', 'AI/ML', 'Cloud', 'Java', 'UI/UX'];
  const projects: Project[] = [
    {
      title: 'Lumina',
      description: 'A beautiful mobile app for mood-based lighting and smart home design.',
      fullDescription: 'Lumina is a comprehensive mobile application that revolutionizes smart home lighting through mood-based controls. The app features an intuitive interface that allows users to create custom lighting scenarios based on their emotional state, daily routines, and environmental preferences. Built with modern design principles, Lumina integrates seamlessly with popular smart home ecosystems.',
      features: [
        'Mood-based lighting presets',
        'Custom scene creation',
        'Voice control integration',
        'Scheduling and automation',
        'Energy usage analytics',
        'Multi-room synchronization'
      ],
      technologies: ['React Native', 'Node.js', 'IoT Integration', 'Firebase', 'UI/UX Design'],
      timeline: '3 months',
      status: 'Completed',
      tags: ['Design', 'App'],
      codeUrl: 'https://github.com/CharChips/inventory',
      demoUrl: 'https://luminatest.charchitsahoo.space',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.isavesit.lumina',
      guestCredentials: {
        username: 'guest123@gmail.com',
        password: 'guest123',
        note: 'Use these credentials to explore the app features'
      },
      photos: [
        {
          src: lumina1,
          alt: 'Lumina main dashboard',
          caption: 'Main dashboard with mood-based lighting controls'
        },
        {
          src: lumina2,
          alt: 'Custom lighting scenes',
          caption: 'Create and customize lighting scenes'
        },
        {
          src: lumina3,
          alt: 'Lumina app interface',
          caption: 'Smart home lighting interface'
        }
      ]
    },
    {
      title: 'Ecommerce Sales Dashboard',
      description: 'Interactive Power BI dashboard showcasing e-commerce sales metrics and insights.',
      fullDescription: 'A comprehensive sales analytics dashboard built with Power BI to visualize key performance indicators for an e-commerce business. The report highlights total revenue, profit, average order value, quantity sold, and detailed breakdowns by state, category, customer, and payment mode. Users can filter data by quarter and region to uncover trends and make informed decisions.',
      features: [
        'Overview of revenue, profit, AOV, and quantities',
        'Sales breakdown by state and product category',
        'Customer-level purchase analysis',
        'Payment mode distribution (COD, UPI, EMI, etc.)',
        'Monthly profit trends with quarter selectors',
        'Interactive slicers and drill‑through capabilities'
      ],
      technologies: ['Power BI', 'DAX', 'Data Visualization', 'Excel'],
      timeline: '1 month',
      status: 'Completed',
      tags: ['Power BI', 'Analytics', 'Dashboard', 'Data'],
      codeUrl: '',
      demoUrl: 'https://app.powerbi.com/links/PylqtyCcFe?ctid=cca3f0fe-586f-4426-a8bd-b8146307e738&pbi_source=linkShare',
      photos: [
        {
          src: powerbi2_1,
          alt: 'Sales Data Analysis Dashboard',
          caption: 'Main dashboard with key sales metrics and KPIs'
        },
        // {
        //   src: powerbi1_2,
        //   alt: 'Sales Performance Analytics',
        //   caption: 'Detailed sales performance analysis and trends'
        // },
        // {
        //   src: powerbi1_3,
        //   alt: 'Data Visualization Components',
        //   caption: 'Interactive charts and data visualization elements'
        // }
      ]
    },

    {
  title: 'Ecommerce Comparative Sales & Product Performance Dashboard',
  description: 'Advanced Power BI dashboard comparing sales performance across two date ranges with product and city-level insights.',
  fullDescription: 'An advanced sales analytics dashboard built in Power BI that enables comparative analysis between two different date ranges. The report provides deep insights into net sales, total sales, profit, and units sold with dynamic date filters. It highlights top and bottom performing products by sales, profit, and quantity, along with city-level sales distribution using map visualization. The dashboard is designed to help businesses identify growth trends, underperforming products, and regional performance differences for better strategic decisions.',
  features: [
    'Dual date range comparison using interactive slicers',
    'KPI comparison for Net Sales, Total Sales, Profit, and Units Sold',
    'Top 5 and Bottom 5 products by Sales, Profit, and Units Sold',
    'City-wise sales distribution with interactive map visualization',
    'Total number of orders KPI card',
    'Dynamic filtering and drill-down capabilities'
  ],
  technologies: ['Power BI', 'DAX', 'Data Modeling', 'Data Visualization'],
  timeline: '3 weeks',
  status: 'Completed',
  tags: ['Power BI', 'Business Intelligence', 'Analytics', 'Dashboard'],
  codeUrl: '',
  demoUrl: '',
  photos: [
    {
      src: powerbi1_1,
      alt: 'Comparative Sales KPI Dashboard',
      caption: 'Comparison of sales, profit, and units sold across two date ranges'
    },
    {
      src: powerbi1_2,
      alt: 'Top and Bottom Product Performance Analysis',
      caption: 'Top 5 and Bottom 5 products by sales, profit, and units'
    },
    {
      src: powerbi1_3,
      alt: 'City-wise Sales Map Visualization',
      caption: 'Geographical distribution of net sales with total order count'
    }
  ]
},

    {
      title: 'Portfolio',
      description: 'Personal portfolio website built with React and Vite.',
      fullDescription: 'A modern, responsive portfolio website showcasing my projects, skills, and professional journey. Built with performance in mind using Vite for lightning-fast development and optimized builds. The site features smooth animations, interactive elements, and a clean design that adapts beautifully to all screen sizes.',
      features: [
        'Responsive design',
        'Interactive animations',
        'Project showcase',
        'Skills visualization',
        'Contact integration',
        'SEO optimized'
      ],
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript', 'Responsive Design'],
      timeline: '2 months',
      status: 'Completed',
      tags: ['React', 'Vite', 'CSS', 'Web', 'UI/UX'],
      codeUrl: 'https://github.com/example/portfolio',
      demoUrl: 'https://portfolio.example.com',
      photos: [
        // homepage screenshot removed – asset not available
      ]
    },
    {
      title: 'Expense Tracker',
      description: 'Kanban-style task management app.',
      fullDescription: 'TaskFlow is a productivity-focused task management application that implements the Kanban methodology for visual project management. The app helps teams and individuals organize their workflow through customizable boards, cards, and automated workflow rules.',
      features: [
        'Drag-and-drop interface',
        'Custom board creation',
        'Team collaboration',
        'Progress tracking',
        'Due date reminders',
        'Activity timeline'
      ],
      technologies: ['UI/UX', 'Flutter', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      timeline: '4 months',
      status: 'Completed',
      tags: ['UI/UX', 'Productivity', 'Web', 'Data'],
      codeUrl: 'https://github.com/example/taskflow',
      demoUrl: 'https://app.charchitsahoo.space',
      guestCredentials: {
        username: 'demo_user',
        password: 'taskflow2024',
        note: 'Access to sample project boards and tasks'
      },
      photos: [
        // TaskFlow screenshots removed – assets unavailable
      ]
    },
         {
          title: 'Corrosion Detection for Piper',
          description: 'AI-powered computer vision system for detecting corrosion inside industrial pipelines.',
          fullDescription: 'This project focuses on developing a machine learning pipeline for detecting corrosion within pipes as part of the PIPER rover system. The system processes video snapshots from the ESP32-CAM, applies preprocessing techniques (Hough Transform, edge detection, and thresholding), and runs a deep learning model to identify corrosion, cracks, and sediment. The project integrates real-time video frame analysis with confidence scoring and generates corrosion maps for pipeline health monitoring.',
          features: [
            'Corrosion, crack, and sediment detection',
            'Deep learning model integration (TensorFlow/Keras)',
            'Video snapshot analysis with per-second evaluation',
            'Hough Transform and preprocessing for joint detection',
            'Confidence scoring for predictions',
            'Data integration with PIPER rover control system'
          ],
          technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask', 'ESP32-CAM'],
          timeline: '5 months',
          status: 'In Development',
          tags: ['AI/ML', 'Computer Vision', 'IoT', 'Data', 'Robotics'],
          codeUrl: 'https://github.com/example/corrosion-detection-piper',
          demoUrl: 'https://piper-demo.charchitsahoo.space',
          photos: [
            // images removed – assets directory empty
          ]
        },
        
        {
          title: 'PIPER',
          description: 'A pipe inspection and profile evaluation rover with 3D mapping and AI-driven defect detection.',
          fullDescription: 'PIPER (Pipe Inspection and Profile Evaluation Rover) is a robotic system designed to autonomously navigate inside industrial pipelines and provide comprehensive structural health analysis. The rover dynamically adjusts its diameter using a 4-bar linkage mechanism, while collecting sensor and visual data in real-time. Equipped with a 2D LiDAR, MPU650, motor encoders, and environmental sensors (gas and temperature), PIPER generates 3D point clouds of pipe interiors, detects corrosion and cracks through AI models, and streams video via ESP32-CAM. Data is transmitted to a host PC through LoRa, where a desktop application enables real-time visualization, rover control, and defect mapping.',
          features: [
            'Autonomous rover with adjustable 4-bar linkage mechanism',
            '3D point cloud generation using LiDAR + motor encoder fusion',
            'Corrosion, crack, and sediment detection via AI models',
            'Live ESP32-CAM feed with storage and cloud integration',
            'Gas and temperature monitoring with MQ135 and DHT11 sensors',
            'LoRa-based data transmission to host PC',
            'Desktop app for real-time control and defect visualization'
          ],
          technologies: [
            'STM32 Nucleo', 
            'RPLIDAR A1M8', 
            'ESP32-CAM', 
            'LoRa', 
            'Python', 
            'Open3D', 
            'TensorFlow/Keras', 
            'Flask', 
            'C/C++ (Embedded)', 
            'IoT Sensors'
          ],
          timeline: '8 months',
          status: 'In Development',
          tags: ['Robotics', 'IoT', 'AI/ML', 'Computer Vision', 'Embedded Systems', 'Data'],
          codeUrl: 'https://github.com/example/piper',
          demoUrl: 'https://piper.charchitsahoo.space',
          photos: [
            {
              src: piper1,
              alt: 'PIPER rover prototype',
              caption: 'PIPER rover prototype with adjustable diameter mechanism'
            },
            {
              src: piper2,
              alt: '3D point cloud visualization',
              caption: 'Open3D visualization of pipeline interior from LiDAR data'
            },
            {
              src: piper3,
              alt: 'Corrosion detection output',
              caption: 'AI model detecting corrosion inside pipeline from ESP32-CAM feed'
            }
          ]
        },
        {
          title: 'FileCloud',
          description: 'A personal cloud storage system built on AWS with secure file management.',
          fullDescription: 'FileCloud is a cloud-based personal storage platform that enables secure file upload, retrieval, and sharing. Built on AWS infrastructure, the system leverages S3 for scalable object storage and EC2 for backend hosting. It provides presigned URL support for secure file access, user authentication for private storage, and a clean React-based interface for managing files. The project demonstrates how cloud services can be orchestrated to create a reliable, scalable, and user-friendly personal storage solution.',
          features: [
            'Secure file upload and download using AWS S3',
            'Presigned URL support for temporary file sharing',
            'User authentication and access control',
            'Scalable backend on AWS EC2',
            'React-based frontend for file management',
            'Support for large file uploads with multipart upload',
            'Basic analytics on file usage'
          ],
          technologies: ['AWS S3', 'AWS EC2', 'Node.js', 'React', 'Express', 'Authentication', 'Cloud Computing'],
          timeline: '3 months',
          status: 'Completed',
          tags: ['Cloud', 'AWS', 'Storage', 'Web'],
          codeUrl: 'https://github.com/example/filecloud',
          demoUrl: 'https://filecloud.charchitsahoo.space',
          guestCredentials: {
            username: 'demo_user',
            password: 'filecloud123',
            note: 'Login to explore demo file uploads and downloads'
          },
          photos: [
            // filecloud images removed – assets folder missing
          ]
        },
        
        
     
   ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(selectedCategory));

  const handleCardClick = (project: Project, e: React.MouseEvent) => {
    // Check if the click was on a button or link
    const target = e.target as HTMLElement;
    if (target.closest('.retro-btn') || target.closest('a')) {
      return; // Let the button/link handle the click
    }
    
    // Navigate to project descriptions
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  // Project Detail View
  if (selectedProject) {
    return (
      <section className="retro-section">
        <div className="retro-container">
          <div className="retro-project-detail">
            {/* Back Button */}
            <button onClick={handleBackClick} className="retro-back-btn">
              ← Back to Projects
            </button>
            
            {/* Project Header */}
            <div className="retro-project-header">
              <h1 className="retro-project-title">{selectedProject.title}</h1>
              <div className="retro-project-meta">
                <span className="retro-project-status">{selectedProject.status}</span>
                <span className="retro-project-timeline">Timeline: {selectedProject.timeline}</span>
              </div>
            </div>
            
            {/* Project Description */}
            <div className="retro-project-content">
              <div className="retro-project-description">
                <h3>Overview</h3>
                <p>{selectedProject.fullDescription}</p>
              </div>
              
              {/* Features */}
              <div className="retro-project-features">
                <h3>Key Features</h3>
                <ul>
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div className="retro-project-tech">
                <h3>Technologies Used</h3>
                <div className="retro-tech-tags">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="retro-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              {/* Guest Credentials */}
              {selectedProject.guestCredentials && (
                <div className="retro-project-credentials">
                  <h3>Guest Login</h3>
                  <div className="retro-credentials-box">
                    <div className="retro-credential-item">
                      <span className="retro-credential-label">Username:</span>
                      <code className="retro-credential-value">{selectedProject.guestCredentials?.username}</code>
                      <button 
                        className="retro-copy-btn"
                        onClick={() => selectedProject.guestCredentials && navigator.clipboard.writeText(selectedProject.guestCredentials.username)}
                        title="Copy username"
                      >
                        📋
                      </button>
                    </div>
                    <div className="retro-credential-item">
                      <span className="retro-credential-label">Password:</span>
                      <code className="retro-credential-value">{selectedProject.guestCredentials?.password}</code>
                      <button 
                        className="retro-copy-btn"
                        onClick={() => selectedProject.guestCredentials && navigator.clipboard.writeText(selectedProject.guestCredentials.password)}
                        title="Copy password"
                      >
                        📋
                      </button>
                    </div>
                    {selectedProject.guestCredentials?.note && (
                      <div className="retro-credential-note">
                        <span className="retro-note-icon">💡</span>
                        {selectedProject.guestCredentials.note}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Project Photos */}
              {selectedProject.photos && selectedProject.photos.length > 0 && (
                <div className="retro-project-photos">
                  <h3>Project Screenshots</h3>
                  <div className="retro-photos-grid">
                    {selectedProject.photos.map((photo, idx) => (
                      <ProjectImage
                        key={idx}
                        src={photo.src}
                        alt={photo.alt}
                        caption={photo.caption}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="retro-project-actions">
                <a
                  href={selectedProject.codeUrl}
                  className="retro-btn retro-btn-large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source Code
                </a>
                {selectedProject.playStoreUrl && (
                  <a
                    href={selectedProject.playStoreUrl}
                    className="retro-btn retro-btn-store retro-btn-large"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📱 Play Store
                  </a>
                )}
                <a
                  href={selectedProject.demoUrl}
                  className="retro-btn retro-btn-primary retro-btn-large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <style>{`
          .retro-section {
            font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
            background: #fff;
            color: #000;
            min-height: 100vh;
            padding: 2rem 0 3rem 0;
          }
          
          .retro-container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }
          
          .retro-project-detail {
            max-width: 800px;
            margin: 0 auto;
          }
          
          .retro-back-btn {
            background: #fff;
            color: #000;
            border: 1px solid #000;
            border-radius: 0;
            padding: 0.6em 1.2em;
            font-size: 1rem;
            font-family: inherit;
            cursor: pointer;
            transition: all 0.2s ease;
            margin-bottom: 2rem;
          }
          
          .retro-back-btn:hover {
            background: #000;
            color: #fff;
            text-decoration: underline;
          }
          
          .retro-project-header {
            border-bottom: 2px solid #000;
            padding-bottom: 1.2rem;
            margin-bottom: 2rem;
          }
          
          .retro-project-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }
          
          .retro-project-meta {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
          }
          
          .retro-project-status {
            background: #000;
            color: #fff;
            padding: 0.25em 0.7em;
            font-size: 0.85rem;
            font-weight: bold;
            font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
          }
          
          .retro-project-timeline {
            font-size: 0.95rem;
            color: #666;
            font-style: italic;
            font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
          }
          
          .retro-project-content {
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
          }
          
          .retro-project-content h3 {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 0.8rem;
            border-left: 4px solid #000;
            padding-left: 1rem;
            font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
          }
          
          .retro-project-description p {
            font-size: 1rem;
            line-height: 1.6;
            color: #333;
            font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-weight: 400;
          }
          
          .retro-project-features ul {
            list-style: none;
            padding: 0;
          }
          
          .retro-project-features li {
            font-size: 0.95rem;
            padding: 0.4rem 0;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 1.5rem;
            font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-weight: 400;
          }
          
          .retro-project-features li:before {
            content: "▸";
            position: absolute;
            left: 0;
            font-weight: bold;
            color: #000;
          }
          
          .retro-project-features li:last-child {
            border-bottom: none;
          }
          
          .retro-tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
          }
          
          .retro-tech-tag {
            background: #f5f5f5;
            color: #000;
            border: 1px solid #000;
            padding: 0.35em 0.7em;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.2s ease;
            font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
          }
          
          .retro-tech-tag:hover {
            background: #000;
            color: #fff;
          }
          
          .retro-project-credentials {
            border: 1px solid #000;
            padding: 1.2rem;
            background: #f9f9f9;
          }
          
          .retro-credentials-box {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
          }
          
          .retro-credential-item {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            flex-wrap: wrap;
          }
          
          .retro-credential-label {
            font-weight: bold;
            min-width: 80px;
          }
          
          .retro-credential-value {
            background: #fff;
            border: 1px solid #000;
            padding: 0.25em 0.5em;
            font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
            font-size: 0.9rem;
            flex: 1;
            min-width: 150px;
          }
          
          .retro-copy-btn {
            background: #000;
            color: #fff;
            border: 1px solid #000;
            border-radius: 0;
            padding: 0.3em 0.6em;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.2s ease;
            min-width: 40px;
          }
          
          .retro-copy-btn:hover {
            background: #fff;
            color: #000;
            transform: translateY(-1px);
          }
          
          .retro-credential-note {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem;
            background: #fff;
            border-left: 3px solid #000;
            font-style: italic;
            color: #555;
            font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
            font-size: 0.9rem;
          }
          
          .retro-note-icon {
            font-size: 1.1rem;
          }
          
          .retro-project-photos {
            margin-top: 0.5rem;
          }
          
          .retro-photos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.2rem;
            margin-top: 0.8rem;
          }
          
          .retro-photo-item {
            border: 1px solid #000;
            padding: 0.8rem;
            background: #fff;
          }
          
          .retro-project-image {
            width: 100%;
            height: auto;
            border: 1px solid #eee;
            display: block;
            transition: opacity 0.3s ease;
            opacity: 0;
          }
          
          .retro-project-image.loaded {
            opacity: 1;
          }
          
          .retro-photo-placeholder {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 3rem 1rem;
            background: #f5f5f5;
            border: 2px dashed #ccc;
            text-align: center;
          }
          
          .retro-placeholder-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            opacity: 0.6;
          }
          
          .retro-placeholder-text {
            color: #666;
            font-style: italic;
          }
          
          .retro-photo-caption {
            margin-top: 0.6rem;
            text-align: center;
            font-size: 0.85rem;
            color: #555;
            font-style: italic;
            font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
          }
          
          .retro-project-actions {
            display: flex;
            gap: 1.2rem;
            padding-top: 0.8rem;
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
            transition: all 0.2s ease;
            outline: none;
          }
          
          .retro-btn-large {
            padding: 0.8em 2em;
            font-size: 1.1rem;
          }
          
          .retro-btn:hover, .retro-btn:focus {
            background: #fff;
            color: #000;
            text-decoration: underline;
            transform: translateY(-1px);
          }
          
          .retro-btn-primary {
            background: #000;
            border: 2px solid #000;
          }
          
          .retro-btn-primary:hover {
            background: #333;
            color: #fff;
            border-color: #333;
            text-decoration: none;
          }
          
          .retro-btn-store {
            background: #01875f;
            border-color: #01875f;
            color: #fff;
          }
          
          .retro-btn-store:hover {
            background: #016b4f;
            border-color: #016b4f;
            color: #fff;
            text-decoration: none;
          }
          
          @media (max-width: 768px) {
            .retro-container {
              padding: 0 1rem;
            }
            
            .retro-project-title {
              font-size: 2rem;
            }
            
            .retro-project-meta {
              flex-direction: column;
              gap: 0.8rem;
            }
            
            .retro-project-actions {
              flex-direction: column;
              gap: 1rem;
            }
            
            .retro-btn-large {
              text-align: center;
            }
            
            .retro-credential-item {
              flex-direction: column;
              align-items: flex-start;
              gap: 0.5rem;
            }
            
            .retro-credential-value {
              min-width: 100%;
            }
            
            .retro-photos-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
          }
          
          @media (max-width: 480px) {
            .retro-section {
              padding: 1rem 0 2rem 0;
            }
            
            .retro-project-title {
              font-size: 1.8rem;
            }
            
            .retro-tech-tags {
              gap: 0.5rem;
            }
            
            .retro-tech-tag {
              font-size: 0.9rem;
            }
            
            .retro-project-credentials {
              padding: 1rem;
            }
            
            .retro-photo-item {
              padding: 0.7rem;
            }
            
            .retro-credential-note {
              padding: 0.5rem;
            }
          }
        `}</style>
      </section>
    );
  }

  // Projects Grid View (original)
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
            <div 
              key={idx} 
              className={`retro-card ${hoveredCard === idx ? 'hovered' : ''}`}
              onClick={(e) => handleCardClick(proj, e)}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="retro-card-content">
                <div className="retro-card-header">
                  <div className="retro-card-title">{proj.title}</div>
                  <div className="retro-card-click-hint">
                    <span className="retro-click-icon">→</span>
                  </div>
                </div>
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Code
                  </a>
                  <a
                    href={proj.demoUrl}
                    className="retro-btn retro-btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="retro-card-overlay"></div>
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
          transition: all 0.2s ease;
          outline: none;
          position: relative;
        }
        
        .retro-filter-btn.selected {
          background: #000;
          color: #fff;
        }
        
        .retro-filter-btn:hover, .retro-filter-btn:focus {
          background: #000;
          color: #fff;
          text-decoration: underline;
          transform: translateY(-1px);
        }
        
        .retro-section {
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 0.7rem 0 3rem 0;
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
          padding: 0;
          margin-bottom: 2.5rem;
          background: #fff;
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .retro-card:hover {
          transform: translateY(-4px);
          box-shadow: 4px 4px 0px #000;
          border-width: 2px;
        }
        
        .retro-card.hovered {
          background: #fafafa;
        }
        
        .retro-card-content {
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          position: relative;
          z-index: 2;
        }
        
        .retro-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.2rem;
        }
        
        .retro-card-title {
          font-size: 1.25rem;
          font-weight: bold;
          flex: 1;
        }
        
        .retro-card-click-hint {
          opacity: 0;
          transition: all 0.3s ease;
          margin-left: 1rem;
        }
        
        .retro-card:hover .retro-card-click-hint {
          opacity: 1;
          transform: translateX(2px);
        }
        
        .retro-click-icon {
          font-size: 1.2rem;
          font-weight: bold;
          color: #666;
        }
        
        .retro-card-desc {
          font-size: 1rem;
          font-weight: normal;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }
        
        .retro-card:hover .retro-card-desc {
          color: #333;
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
          transition: all 0.3s ease;
        }
        
        .retro-card:hover .retro-tag {
          background: #f0f0f0;
          transform: translateY(-1px);
        }
        
        .retro-card-actions {
          display: flex;
          gap: 1rem;
          margin-top: auto;
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
          transition: all 0.2s ease;
          outline: none;
          position: relative;
          z-index: 3;
        }
        
        .retro-btn:hover, .retro-btn:focus {
          background: #fff;
          color: #000;
          text-decoration: underline;
          transform: translateY(-1px);
        }
        
        .retro-btn-primary {
          background: #000;
          border: 2px solid #000;
        }
        
        .retro-btn-primary:hover {
          background: #333;
          color: #fff;
          border-color: #333;
        }
        
        .retro-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.02) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .retro-card:hover .retro-card-overlay {
          opacity: 1;
        }
        
        .retro-card a {
          text-decoration: none;
        }
        
        .retro-card a:hover, .retro-card a:focus {
          text-decoration: underline;
        }
        
        /* Add a subtle pulse animation for better visual feedback */
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        
        .retro-card:active {
          animation: pulse 0.2s ease;
        }
        
        /* Responsive adjustments */
        @media (max-width: 600px) {
          .retro-container {
            padding: 0 0.5rem;
          }
          
          .retro-card-content {
            padding: 1.2rem 0.7rem 1rem 0.7rem;
          }
          
          .retro-grid {
            gap: 1.2rem;
          }
          
          .retro-card:hover {
            transform: translateY(-2px);
            box-shadow: 2px 2px 0px #000;
          }
          
          .retro-card-header {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .retro-card-click-hint {
            align-self: flex-end;
            margin-left: 0;
          }
        }
        
        @media (max-width: 400px) {
          .retro-card-actions {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .retro-btn {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;