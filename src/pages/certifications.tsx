

import awsDeveloping from '../assets/certificates/awsdeveloping.png';
import awsFoundation from '../assets/certificates/awsfoundation.png';
import nvidiaCert from '../assets/certificates/nvidia.png';
import flutterCert from '../assets/certificates/fluttercerti.jpg';

function Certifications() {
  return (
    <section className="retro-cert-section">
      <div className="retro-cert-container">
        <h1 className="retro-cert-heading">Certifications</h1>
        <div className="retro-cert-grid">
          <CertificateCard
            name="AWS Cloud Developing"
            description="AWS Certified Developer  Associate. Demonstrated expertise in developing and maintaining AWS-based applications."
            image={awsDeveloping}
            link="#"
          />
          <CertificateCard
            name="AWS Cloud Foundation"
            description="AWS Certified Cloud Practitioner. Validated foundational knowledge of AWS Cloud and global infrastructure."
            image={awsFoundation}
            link="#"
          />
          <CertificateCard
            name="NVIDIA"
            description="NVIDIA Deep Learning Institute Certificate. Completed hands-on training in deep learning and AI."
            image={nvidiaCert}
            link="#"
          />
          <CertificateCard
            name="Flutter"
            description="Flutter Development Certificate. Built cross-platform mobile apps using Flutter and Dart."
            image={flutterCert}
            link="#"
          />
        </div>
      </div>
      <style>{`
        .retro-cert-section {
          background: #fff;
          color: #000;
          min-height: 100vh;
          padding: 0.7rem 0 3rem 0;
          font-family: 'IBM Plex Mono', 'Fira Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace', 'Arial', 'sans-serif';
        }
        .retro-cert-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .retro-cert-heading {
          font-size: 2.2rem;
          font-weight: bold;
          border-bottom: 1px solid #000;
          margin-bottom: 2.5rem;
          padding-bottom: 0.7rem;
          letter-spacing: -0.01em;
          text-align: left;
        }
        .retro-cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 700px) {
          .retro-cert-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .retro-cert-container {
            padding: 0 0.5rem;
          }
          .retro-cert-grid {
            gap: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Certifications;

import CertificateCard from '../components/CertificateCard';
