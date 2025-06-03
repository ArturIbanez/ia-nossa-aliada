import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-line"></div>
      <div className="footer-content">
        <div className="footer-column">
          <p className="footer-title">Informações do Projeto</p>
          <p>Projeto acadêmico da disciplina de Desafio da Profissão</p>
          <p>Prof. Suellen S. Sotille</p>
          <p>Semestre 2025/01</p>
        </div>
        <div className="footer-column">
          <p className="footer-title">Integrantes</p>
          <p>Artur Ibañez</p>
          <p>Augusto Altmayer</p>
          <p>Davi Maia</p>
          <p>Ricardo Drews</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 IA Nossa Aliada. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
