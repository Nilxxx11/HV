// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#fafafa', color: '#333' }}>
      <Header />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '30px 0', color: '#777', fontSize: '0.9em' }}>
        © {new Date().getFullYear()} Neil. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
