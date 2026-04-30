export function TechMarquee() {
  const techs = [
    "Java", "Spring Boot", "React 19", "TypeScript", "Python",
    "PostGIS", "PyTorch", "Supabase", "Deno Edge", "Kotlin", "Room", "Firebase"
  ];

  // Double the array to ensure smooth infinite scrolling
  const scrollTechs = [...techs, ...techs];

  return (
    <div style={{ padding: '3rem 0', background: 'rgba(2, 6, 23, 0.5)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)' }}>
      <div className="marquee-container">
        <div className="marquee-content">
          {scrollTechs.map((tech, idx) => (
            <div key={idx} className="marquee-item">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
