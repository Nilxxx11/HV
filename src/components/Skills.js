// src/components/Skills.js
export default function Skills() {
  const skills = [
    'HTML5 / CSS3', 'JavaScript (ES6+)', 'React', 'Python', 'Flask',
    'SQL / PostgreSQL', 'Git / GitHub', 'Desarrollo Web para Pymes',
    'Automatización de Procesos', 'Soporte Técnico', 'Redes Básicas'
  ];

  return (
    <section style={{ marginBottom: '50px' }}>
      <h2 style={{ borderBottom: '2px solid #007acc', paddingBottom: '8px', color: '#007acc' }}>Habilidades</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px' }}>
        {skills.map((skill, i) => (
          <span
            key={i}
            style={{
              backgroundColor: '#e6f2ff',
              color: '#007acc',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
