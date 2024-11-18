import React from 'react';
import '../stylesheets/footer/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Sobre Nosotros</h2>
          <p>¡Te ayudamos a encontrar comunidades que compartan tus gustos!</p>
        </div>
        
        <div className="footer-section contact">
          <h2>Contacto</h2>
          <p>Correo: contacto@boardmatch.com</p>
          <p>Teléfono: +56987654321</p>
        </div>
        
        {/* <div className="footer-section links">
          <h2>Enlaces Útiles</h2>
          <ul>
            <li><a href="/politica-privacidad">Política de Privacidad</a></li>
            <li><a href="/terminos-condiciones">Términos y Condiciones</a></li>
            <li><a href="/faq">Preguntas Frecuentes</a></li>
          </ul>
        </div> */}
      </div>
      
      <div className="footer-bottom">
        &copy; 2024 BoardMatch | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
