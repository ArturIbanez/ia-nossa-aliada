import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-line"></div>
      <div className="footer-content">
       
        <div className="footer-column">
          <p className="footer-title">Informações do Projeto</p>
          <p>Projeto acadêmico da disciplina de Desafio da Profissão <br/>Prof. Suellen S. Sotille <br/>Semestre 2025/01 </p>

          <p className="footer-title">Integrantes</p>
          <p>Artur Ibañez <br/>Augusto Altmayer <br/>Davi Maia <br/> Ricardo Drews</p>
      
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 IA Nossa Aliada. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
