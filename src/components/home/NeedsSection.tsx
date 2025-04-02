import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Lightbulb, Shield, Rocket, Heart } from 'lucide-react';

interface ValueCardProps {
  icon: ReactElement;
  title: string;
  description: string;
  index: number;
}

function ValueCard({ icon, title, description, index }: ValueCardProps): ReactElement {
  return (
    <div 
      className="group relative bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-2 has-[[data-variant=inset]]:bg-sidebar"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-cyan/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start gap-6">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-lg transition-all duration-500 group-hover:shadow-primary-cyan/20 group-hover:scale-110">
          <div className="p-3 text-primary-cyan transition-transform duration-500 group-hover:scale-110">
            {icon}
          </div>
        </div>
        
        {/* Text Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-primary-navy transition-colors duration-300 group-hover:text-primary-cyan">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 text-primary-cyan/20">
          <svg className="w-12 h-12 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M12 5v14m7-7H5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function NeedsSection(): ReactElement {
  return (
    <section className="section-transition" aria-labelledby="needs-title">
      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 id="needs-title" className="text-4xl font-bold mb-4">
            <span className="text-primary-navy">¿Qué necesitas para</span>{' '}
            <span className="text-primary-cyan">solicitar un préstamo</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prepara estos documentos básicos para agilizar tu solicitud
          </p>
        </div>

        {/* Cards Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          role="list" 
          aria-label="Requisitos para solicitar préstamo"
        >
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Identificación oficial",
              description: "INE, Pasaporte o Cédula Profesional vigente. Asegúrate de que esté actualizada y en buen estado."
            },
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Comprobante de domicilio",
              description: "Recibo reciente de luz, agua o teléfono con antigüedad no mayor a 3 meses."
            },
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "Comprobante de ingresos",
              description: "Estados de cuenta bancarios o recibos de nómina de los últimos 3 meses."
            }
          ].map((requirement, index) => (
            <ValueCard
              key={index}
              {...requirement}
              index={index}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <Link 
            to="/loan-application" 
            className="group inline-flex items-center bg-primary-cyan text-white font-bold py-4 px-8 rounded-full transition-all duration-500 hover:bg-primary-navy hover:scale-105 focus:ring-2 focus:ring-primary-cyan focus:ring-offset-2 focus:ring-offset-white shadow-lg hover:shadow-primary-cyan/20"
          >
            <span className="text-white">Solicitar Ahora</span>
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
    </section>
  );
}