


import ExperienceBlock from '../components/ExperienceBlock';

function Experience() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      margin: 0,
      background: '#fff',
    }}>
      <ExperienceBlock
        title="FAD"
        description="Worked as a Frontend Developer at FAD, building modern web interfaces and collaborating with cross-functional teams."
        images={[
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
          'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        ]}
        imagePosition="left"
        readMoreLink="/experience/fad"
      />
      <ExperienceBlock
        title="ISA"
        description="Software Engineer Intern at ISA, focused on backend services and scalable APIs."
        images={[
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
          'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
        ]}
        imagePosition="right"
      />
      <ExperienceBlock
        title="Bootcamp"
        description="Completed a full-stack web development bootcamp, learning modern frameworks and best practices."
        images={[
          'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
          'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
        ]}
        imagePosition="left"
      />
      <ExperienceBlock
        title="Internship"
        description="Interned at TechNova, contributing to frontend features and UI improvements for a SaaS dashboard."
        images={[
          'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
          'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
        ]}
        imagePosition="right"
      />
    </div>
  );
}

export default Experience;
