import type { ReactElement } from 'react';
import { Shield, Clock, CheckCircle2 } from 'lucide-react';

function Feature({ icon, title, description }: FeatureProps): ReactElement {
  return (
    <div className="flex items-start gap-4 opacity-0 animate-fade-in-up">
      <div className="flex-shrink-0">
        <div className="p-3 bg-primary-cyan/10 text-primary-cyan rounded-2xl group-hover:bg-primary-cyan group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-primary-navy mb-2 group-hover:text-primary-cyan transition-colors duration-300">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function SiteTitleSection(): ReactElement {
  return (
    <section className="section-transition" aria-labelledby="site-title">
      <div className="container relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 z-10">
            <div className="max-w-xl">
              <h2 id="site-title" className="text-4xl lg:text-5xl font-bold mb-6 opacity-0 animate-fade-in-left">
                <span className="text-primary-cyan">Fácil</span>{' '}
                <span className="text-primary-navy">rápido y seguro</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-12 opacity-0 animate-fade-in-left" style={{ animationDelay: '100ms' }}>
                Obtén el préstamo que necesitas para mejorar tu hogar de manera simple y segura
              </p>

              <div className="space-y-8">
                <Feature 
                  icon={<Clock className="w-6 h-6" />}
                  title="Proceso Rápido"
                  description="Aprobación en menos de 24 horas y desembolso inmediato a tu cuenta"
                  style={{ animationDelay: '200ms' }}
                />
                
                <Feature 
                  icon={<Shield className="w-6 h-6" />}
                  title="100% Seguro"
                  description="Tus datos están protegidos con los más altos estándares de seguridad"
                  style={{ animationDelay: '300ms' }}
                />
                
                <Feature 
                  icon={<CheckCircle2 className="w-6 h-6" />}
                  title="Fácil de Solicitar"
                  description="Proceso simplificado con documentación mínima requerida"
                  style={{ animationDelay: '400ms' }}
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 opacity-0 animate-fade-in-right" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200&h=800" 
                alt="Familia feliz revisando documentos financieros en su hogar renovado" 
                className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105 shadow-2xl"
                width="600"
                height="400"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent rounded-2xl" />

              {/* Stats Card */}
              <div className="absolute -bottom-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl z-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-cyan/10 rounded-lg">
                    <svg className="w-8 h-8 text-primary-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Monto máximo</p>
                    <p className="text-xl font-bold text-primary-navy">$500,000 MXN</p>
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