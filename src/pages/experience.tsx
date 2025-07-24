function Experience() {
  return (
    <div style={{ padding: '2rem', minHeight: '80vh' }}>
      <h2 style={{ marginBottom: '2rem' }}>Experience</h2>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        {/* Left: Image */}
        <div style={{ flex: 1 }}>
          <div style={{ width: '100%', height: 120, background: '#eee', borderRadius: 10, border: '2px solid #ccc', marginBottom: 8 }} />
          <div style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>ISA</div>
          <div style={{ color: '#555', marginTop: 4 }}>Short description for ISA experience goes here.</div>
        </div>
        {/* Right: FAD */}
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: 8 }}>FAD</div>
          <div style={{ color: '#555', marginBottom: 8 }}>Short description for FAD experience goes here.</div>
          <div style={{ width: '100%', height: 120, background: '#eee', borderRadius: 10, border: '2px solid #ccc' }} />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
        {/* Internship */}
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: 8 }}>Internship</div>
          <div style={{ color: '#555' }}>Short description for Internship goes here.</div>
        </div>
        {/* Bootcamp */}
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: 8 }}>Bootcamp</div>
          <div style={{ color: '#555' }}>Short description for Bootcamp goes here.</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
