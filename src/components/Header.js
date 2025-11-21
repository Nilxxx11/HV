// src/components/Header.js
export default function Header() {
  return (
    <header style={{
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #eee'
    }}>
      <div style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        overflow: 'hidden',
        margin: '0 auto 20px',
        border: '3px solid #e0e0e0'
      }}>
        <img
          src="/images/profile.jpg"
          alt="Neil"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <h1 style={{ margin: '0', fontSize: '2.3rem', fontWeight: '600' }}>Neil</h1>
      <p style={{ color: '#555', marginTop: '10px' }}>
        Técnico en Sistemas • Desarrollador Web • Especialista en Automatización
      </p>
    </header>
  );
}
