

import awsDeveloping from '../assets/certificates/awsdeveloping.png';
import awsFoundation from '../assets/certificates/awsfoundation.png';
import nvidiaCert from '../assets/certificates/nvidia.png';
import flutterCert from '../assets/certificates/fluttercerti.jpg';

function Certifications() {
  return (
    <div style={{ padding: '2rem', minHeight: '80vh', background: '#fafafa' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 900,
        margin: '0 auto',
      }}>
        <CertificateCard
          name="AWS Cloud Developing"
          description="AWS Certified Developer – Associate. Demonstrated expertise in developing and maintaining AWS-based applications."
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
  );
}

export default Certifications;

import CertificateCard from '../components/CertificateCard';
