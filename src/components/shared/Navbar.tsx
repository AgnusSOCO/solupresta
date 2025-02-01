import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>SoluPresta | Préstamos para Mejoras del Hogar en México</title>
        <meta name="description" content="Obtén financiamiento rápido y seguro para mejorar tu hogar. Préstamos hasta $500,000 MXN con las mejores tasas del mercado. ¡Aprobación en 24 horas!" />
      </Helmet>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md" role="banner">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4" role="navigation" aria-label="Navegación principal del sitio">
            <div className="flex-shrink-0 opacity-0 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <Link to="/" className="block transition-transform duration-300 hover:scale-105">
                <img 
                  src="/assets/images/logos/logo.png" 
                  alt="Solupresta - Préstamos personales en línea" 
                  className="hidden lg:block h-12 w-auto"
                  width="280" 
                  height="60"
                  loading="eager"
                  decoding="async"
                />
                <img 
                  src="/assets/images/logos/mobile-logo.png" 
                  alt="Solupresta - Préstamos personales en línea" 
                  className="lg:hidden h-8 w-auto"
                  width="200" 
                  height="45"
                  loading="eager"
                  decoding="async"
                />
              </Link>
            </div>

            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-primary-cyan focus:ring-offset-2 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú de navegación"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg 
                className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M4 6h16M4 12h16m-7 6h7"
                  } 
                />
              </svg>
            </button>

            <div 
              id="mobile-menu"
              className={`
                absolute top-full left-0 right-0 transform transition-all duration-300 ease-in-out opacity-0 animate-fade-in
                ${isOpen 
                  ? 'opacity-100 translate-y-0 visible bg-white shadow-lg border-t'
                  : 'opacity-0 -translate-y-4 invisible pointer-events-none'
                } lg:relative lg:block lg:border-0 lg:shadow-none lg:transform-none lg:opacity-100 lg:translate-y-0 lg:visible lg:pointer-events-auto
              `}
              style={{ animationDelay: '300ms' }}
            >
              <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 p-4 lg:p-0" role="menubar">
                <li role="none">
                  <Link 
                    className="block py-2 text-gray-700 hover:text-primary-cyan focus:text-primary-cyan focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:ring-offset-2 transition-all duration-300 font-medium"
                    to="/loan-application"
                    role="menuitem"
                    aria-label="Solicitar un crédito personal"
                  >
                    Solicita tu Crédito
                  </Link>
                </li>
                <li role="none">
                  <Link 
                    className="block py-2 text-gray-700 hover:text-primary-cyan transition-colors font-medium"
                    to="/about"
                    role="menuitem"
                  >
                    Quienes Somos
                  </Link>
                </li>
                <li role="none">
                  <Link 
                    className="block py-2 text-gray-700 hover:text-primary-cyan transition-colors font-medium"
                    to="/contact"
                    role="menuitem"
                  >
                    Contáctanos
                  </Link>
                </li>
                <li role="none">
                  <Link 
                    className="block py-2 text-gray-700 hover:text-primary-cyan transition-colors font-medium"
                    to="/#blog"
                    role="menuitem"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}