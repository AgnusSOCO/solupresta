export function SocialIcons() {
  return (
    <div className="social-icons d-flex gap-3 justify-content-center mt-4">
      <a 
        href="https://wa.me/5581289583" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a 
        href="https://x.com/solupresta" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
        aria-label="X (Twitter)"
      >
        <i className="fab fa-x-twitter"></i>
      </a>
      <a 
        href="https://facebook.com/solupresta" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-icon"
        aria-label="Facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a 
        href="mailto:atencion@solupresta.com" 
        className="social-icon"
        aria-label="Email"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
}
