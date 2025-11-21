// src/components/Projects.js
export default function Projects() {
  const projects = [
    {
      title: 'Sistema de Gestión para Pymes',
      description: 'Aplicación web para control de inventario y facturación básica.',
      tech: 'React + Supabase',
      link: 'https://github.com/Nilxxx11/gestion-pymes'
    },
    {
      title: 'Bot de Respuestas Automáticas',
      description: 'Automatización para WhatsApp Business usando Node.js.',
      tech: 'JavaScript + Twilio',
      link: 'https://github.com/Nilxxx11/whatsapp-bot'
    },
    {
      title: 'App de Seguimiento de Tareas',
      description: 'Gestor personal con autenticación y sincronización en la nube.',
      tech: 'React + Supabase',
      link: 'https://github.com/Nilxxx11/HV'
    }
  ];

  return (
    <section style={{ marginBottom: '50px' }}>
      <h2 style={{ borderBottom: '2px solid #007acc', paddingBottom: '8px', color: '#007acc' }}>
        Proyectos Destacados
      </h2>
      <div style={{ marginTop: '15px' }}>
        {projects.map((proj, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#fff',
              padding: '18px',
              borderRadius: '8px',
              marginBottom: '20px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              position: 'relative'
            }}
          >
            <h3 style={{ margin: '0 0 8px', color: '#333' }}>{proj.title}</h3>
            <p style={{ margin: '0 0 10px', fontSize: '0.95rem', color: '#555' }}>
              {proj.description}
            </p>
            <p style={{ fontSize: '0.85rem', color: '#777', marginBottom: '12px' }}>
              {proj.tech}
            </p>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '6px 14px',
                backgroundColor: '#007acc',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}
            >
              Ver más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
