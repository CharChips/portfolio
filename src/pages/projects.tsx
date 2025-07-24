function Projects() {
  return (
    <div style={{ padding: '2rem', minHeight: '80vh' }}>
      <h2 style={{ marginBottom: '2rem' }}>Projects</h2>
      {/* SmartAgriAI */}
      <div style={{ fontWeight: 'bold', fontSize: '2.2rem', marginBottom: 8 }}>SmartAgriAI</div>
      <div style={{ height: 40 }} />
      <hr style={{ margin: '2rem 0' }} />
      {/* Lumina */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', minHeight: 60 }}>
        <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>Lumina</div>
      </div>
      <div style={{ height: 40 }} />
      <hr style={{ margin: '2rem 0' }} />
      {/* Piper */}
      <div style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: 8 }}>PIPER</div>
    </div>
  );
}

export default Projects;
