import type { ReactElement } from 'react';
import { ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function JoinSection(): ReactElement {
  return (
    <section className="section-transition" aria-labelledby="join-title">
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <h2 id="join-title" className="text-4xl lg:text-5xl font-bold text-primary-navy mb-6 leading-tight">
              ¿Listo para hacer realidad <br />
              <span className="text-primary-cyan">tus metas financieras</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Únete a miles de personas que ya confían en nosotros para alcanzar un futuro financiero más sólido
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Proceso Rápido",
                description: "Aprobación en 24 horas"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "100% Seguro",
                description: "Datos protegidos"
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Sin Complicaciones",
                description: "Proceso simplificado"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/40 backdrop-blur-md rounded-2xl p-6 text-center transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-white/20 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-cyan/10 text-primary-cyan mb-4 group-hover:bg-primary-cyan group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-primary-navy font-semibold mb-2 group-hover:text-primary-cyan transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link 
              to="/loan-application" 
              className="inline-flex items-center bg-primary-cyan hover:bg-primary-navy text-white font-bold py-4 px-8 rounded-full transition-all duration-500 hover:scale-105 focus:ring-2 focus:ring-primary-cyan focus:ring-offset-2 focus:ring-offset-white group shadow-lg hover:shadow-primary-cyan/20 hover:shadow-2xl"
            >
              <span className="text-white">SOLICITAR PRÉSTAMO</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}