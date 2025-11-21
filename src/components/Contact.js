// src/components/Contact.js
export default function Contact() {
  return (
    <section style={{ marginBottom: '50px' }}>
      <h2 style={{ borderBottom: '2px solid #007acc', paddingBottom: '8px', color: '#007acc' }}>Contacto</h2>
      <p style={{ marginTop: '15px' }}>
        ¿Quieres trabajar juntos o necesitas una solución web para tu negocio?
      </p>
      <p style={{ marginTop: '10px', fontWeight: '500' }}>
        📧 <a href="mailto:tucorreo@dominio.com" style={{ color: '#007acc', textDecoration: 'none' }}>tucorreo@dominio.com</a>
      </p>
      <p style={{ marginTop: '5px', fontWeight: '500' }}>
        💼 <a href="https://linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer" style={{ color: '#007acc', textDecoration: 'none' }}>LinkedIn</a>
      </p>
    </section>
  );
}
