import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export function FormHeader(): ReactElement {
  return (
    <header className="bg-white shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/assets/images/logos/mobile-logo.png" 
              alt="SoluPresta" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-primary-cyan transition-colors duration-300"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </header>
  );
}