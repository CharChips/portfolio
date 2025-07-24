function Certifications() {
  return (
    <div style={{ padding: '2rem', minHeight: '80vh' }}>
      <h2 style={{ marginBottom: '2rem' }}>Certifications</h2>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        {/* AWS and description */}
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.7rem', marginBottom: 8 }}>AWS</div>
          <div style={{ color: '#555', marginBottom: 16 }}>Short description for AWS certification goes here.</div>
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: 40 }}>Flutter</div>
        </div>
        {/* Image and NVIDIA, DS */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', height: '100%' }}>
          <div style={{ width: 160, height: 90, background: '#eee', borderRadius: 10, border: '2px solid #ccc', marginBottom: 8 }} />
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: 32 }}>NVIDIA</div>
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: 'auto' }}>DS</div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
