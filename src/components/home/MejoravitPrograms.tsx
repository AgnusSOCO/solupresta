import { type ReactElement } from 'react';
import { LOAN_LIMITS } from '../../utils/loanCalculator';
import { Link } from 'react-router-dom';
import { CreditCard, Clock, Wallet, FileCheck } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  type: 'repara' | 'renueva';
  features: string[];
  index: number;
}

function ProgramCard({ title, type, features, index }: ProgramCardProps): ReactElement {
  const limits = LOAN_LIMITS[type];
  
  return (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/5 to-primary-navy/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-2xl font-bold text-primary-navy mb-6">{title}</h3>
        
        {/* Key Features */}
        <div className="space-y-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-cyan/10 rounded-lg">
              <Wallet className="w-5 h-5 text-primary-cyan" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Monto del préstamo</p>
              <p className="font-semibold text-primary-navy">
                ${limits.min.toLocaleString()} - ${limits.max.toLocaleString()}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-cyan/10 rounded-lg">
              <Clock className="w-5 h-5 text-primary-cyan" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Plazo máximo</p>
              <p className="font-semibold text-primary-navy">{limits.maxTerm} años</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-cyan/10 rounded-lg">
              <CreditCard className="w-5 h-5 text-primary-cyan" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Tasa de interés</p>
              <p className="font-semibold text-primary-navy">{limits.rate * 100}% anual</p>
            </div>
          </div>
        </div>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <FileCheck className="w-5 h-5 text-primary-cyan flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/loan-application"
          className="block w-full text-center py-3 px-6 bg-primary-cyan text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-navy group"
        >
          Solicitar {title}
          <svg 
            className="inline-block ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export function MejoravitPrograms(): ReactElement {
  return (
    <section className="section-transition" aria-labelledby="programs-title">
      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 id="programs-title" className="text-4xl font-bold mb-4">
            <span className="text-primary-navy">Nuestros</span>{' '}
            <span className="text-primary-cyan">Programas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige el programa que mejor se adapte a tus necesidades
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProgramCard
            title="Mejoravit Repara"
            type="repara"
            features={[
              "Ideal para reparaciones menores y mejoras básicas",
              "80% del crédito en Tarjeta Mejoravit",
              "20% disponible para mano de obra",
              "Hasta 30% para regularización de vivienda",
              "Tiempo de ejecución: 9 meses + 3 meses de extensión",
              "Garantía: 100% SSV"
            ]}
            index={0}
          />
          
          <ProgramCard
            title="Mejoravit Renueva"
            type="renueva"
            features={[
              "Perfecto para renovaciones mayores",
              "80% del crédito en Tarjeta Mejoravit exclusiva",
              "20% disponible para mano de obra",
              "Hasta 30% para regularización de vivienda",
              "Tiempo de ejecución: 9 meses + 3 meses de extensión",
              "Garantía: 100% SSV"
            ]}
            index={1}
          />
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-8 bg-gray-50 rounded-xl opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <h3 className="text-xl font-semibold text-primary-navy mb-4">Información Importante</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <li className="flex items-start gap-2">
              <FileCheck className="w-5 h-5 text-primary-cyan flex-shrink-0 mt-0.5" />
              <span>Registro disponible a través de CESI, Mi Cuenta Infonavit o APP MCI</span>
            </li>
            <li className="flex items-start gap-2">
              <FileCheck className="w-5 h-5 text-primary-cyan flex-shrink-0 mt-0.5" />
              <span>Asistencia técnica opcional disponible</span>
            </li>
            <li className="flex items-start gap-2">
              <FileCheck className="w-5 h-5 text-primary-cyan flex-shrink-0 mt-0.5" />
              <span>Catálogo de productos basado en criterios específicos</span>
            </li>
            <li className="flex items-start gap-2">
              <FileCheck className="w-5 h-5 text-primary-cyan flex-shrink-0 mt-0.5" />
              <span>Financiamiento respaldado por Infonavit</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}