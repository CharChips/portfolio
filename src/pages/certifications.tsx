
import CertificateCard from '../components/CertificateCard';

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
          name="AWS"
          description="Amazon Web Services Certified Solutions Architect. Demonstrated expertise in designing and deploying scalable systems."
          image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
          link="#"
        />
        <CertificateCard
          name="NVIDIA"
          description="NVIDIA Deep Learning Institute Certificate. Completed hands-on training in deep learning and AI."
          image="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
          link="#"
        />
        <CertificateCard
          name="Flutter"
          description="Flutter Development Certificate. Built cross-platform mobile apps using Flutter and Dart."
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          link="#"
        />
        <CertificateCard
          name="Flutter Advanced"
          description="Advanced Flutter Certificate. Mastered advanced state management and animations in Flutter."
          image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
          link="#"
        />
      </div>
    </div>
  );
}

export default Certifications;
