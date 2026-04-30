export function TechMarquee() {
  const techs = [
    "Java", "Spring Boot", "React 19", "TypeScript", "Python",
    "PostGIS", "PyTorch", "Supabase", "Deno Edge", "Kotlin", "Room", "Firebase"
  ];

  // Double the array to ensure smooth infinite scrolling
  const scrollTechs = [...techs, ...techs];

  return (
    <div className="tech-marquee-wrapper">
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
