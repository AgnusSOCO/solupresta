import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { LoanAmountSelector } from '../shared/LoanAmountSelector';
import { LOAN_LIMITS } from '../../utils/loanCalculator';

export function HeroSection(): ReactElement {
  return (
    <section className="section-transition min-h-[calc(100vh-5rem)] flex items-center mt-20" aria-labelledby="hero-title">
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 z-10">
            <div className="max-w-xl">
              <h1 id="hero-title" className="text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in-left">
                <span className="text-primary-cyan">Mejora tu hogar</span>
                <br /> 
                <span className="text-primary-navy">con Mejoravit</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 opacity-0 animate-fade-in-left" style={{ animationDelay: '100ms' }}>
                Préstamos desde ${LOAN_LIMITS.repara.min.toLocaleString()} hasta ${LOAN_LIMITS.renueva.max.toLocaleString()} MXN
              </p>
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <LoanAmountSelector className="mb-8" />
              </div>
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <Link 
                  to="/loan-application" 
                  className="group inline-flex items-center bg-primary-cyan text-white font-bold py-4 px-8 rounded-full hover:bg-primary-navy transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-primary-cyan focus:ring-offset-2 focus:ring-offset-white"
                >
                  <span className="text-white">SOLICITAR AHORA</span>
                  <svg 
                    className="ml-2 w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 opacity-0 animate-fade-in-right" style={{ animationDelay: '400ms' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-cyan/10 rounded-2xl transform rotate-3 transition-transform duration-300 group-hover:rotate-0" />
              <img 
                src="/assets/images/backgrounds/hero-img.png" 
                alt="Persona sonriente revisando documentos financieros" 
                className="relative rounded-2xl shadow-2xl transform -rotate-3 transition-all duration-300 group-hover:rotate-0 group-hover:scale-105"
                width="600"
                height="400"
                loading="eager"
              />
              
              {/* Stats Card */}
              <div className="absolute -bottom-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl z-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-cyan/10 rounded-lg">
                    <svg className="w-8 h-8 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tasa desde</p>
                    <p className="text-xl font-bold text-primary-navy">10% anual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}