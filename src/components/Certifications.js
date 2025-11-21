// src/components/Certifications.js
import { useState, useEffect, useRef } from 'react';

// Hook para detectar cuando un elemento entra en la vista
const useOnScreen = (ref, rootMargin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};

function CertItem({ image, title, issuer, year }) {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        marginBottom: '25px',
        display: 'flex',
        gap: '15px',
        alignItems: 'flex-start'
      }}
    >
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '8px',
        overflow: 'hidden',
        flexShrink: 0,
        border: '1px solid #eee'
      }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div>
        <h4 style={{ margin: '0 0 4px', fontSize: '1.1rem' }}>{title}</h4>
        <p style={{ margin: '0', color: '#666', fontSize: '0.95rem' }}>
          {issuer} • {year}
        </p>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section style={{ marginBottom: '50px' }}>
      <h2 style={{ borderBottom: '2px solid #007acc', paddingBottom: '8px', color: '#007acc' }}>
        Certificaciones
      </h2>
      <div style={{ marginTop: '20px' }}>
        <CertItem
          image="/images/cert1.jpg"
          title="Desarrollo Web Completo"
          issuer="Platzi"
          year="2024"
        />
        <CertItem
          image="/images/cert2.jpg"
          title="Fundamentos de Python"
          issuer="Coursera"
          year="2023"
        />
        <CertItem
          image="/images/cert3.jpg"
          title="Networking Essentials"
          issuer="Cisco"
          year="2022"
        />
        <CertItem
          image="/images/cert4.jpg"
          title="Técnico en Sistemas"
          issuer="SENA"
          year="2021"
        />
      </div>
    </section>
  );
}
