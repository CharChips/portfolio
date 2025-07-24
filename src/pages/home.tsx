function Home() {
  return (
    <div className="home-container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flex: 1, alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem' }}>
        {/* Left: Profile Image */}
        <div style={{ flex: '0 0 250px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div style={{ width: 220, height: 220, background: '#eee', borderRadius: 12, border: '2px solid #ccc' }} />
        </div>
        {/* Right: Description, Experience, Education */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2.5rem', justifyContent: 'flex-start' }}>
          <div>
            <h2 style={{ margin: 0 }}>Description</h2>
            <p style={{ marginTop: 8 }}>A short description about yourself goes here. You can mention your role, interests, or a brief summary.</p>
          </div>
          <div>
            <h2 style={{ margin: 0 }}>Experience</h2>
            <p style={{ marginTop: 8 }}>Highlight your key work experience or skills here.</p>
          </div>
          <div>
            <h2 style={{ margin: 0 }}>Education</h2>
            <p style={{ marginTop: 8 }}>Mention your educational background here.</p>
          </div>
        </div>
      </div>
      {/* Footer: Contact Info */}
      <footer style={{
        borderTop: '2px solid #ddd',
        padding: '1.2rem 0 0.5rem 0',
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '1.1rem',
        background: 'transparent',
        marginTop: 'auto'
      }}>
        <span>phone</span>
        <span>email</span>
        <span>github</span>
        <span>linkedin</span>
      </footer>
    </div>
  );
}

export default Home;
