import type { ReactElement } from 'react';
import { 
  FileText, 
  FileCheck, 
  CreditCard
} from 'lucide-react';

const steps = [
  {
    icon: <FileText className="w-8 h-8" />,
    title: "1. Completa Tu Solicitud",
    description: "Llena el formulario en línea con tus datos personales y la cantidad que necesitas. El proceso es rápido y seguro."
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "2. Prepara Tus Documentos",
    description: "• Identificación Oficial\n• Comprobante de Domicilio\n• Comprobante de Ingresos"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "3. Recibe Tu Dinero",
    description: "Una vez aprobada tu solicitud, recibirás el dinero directamente en tu cuenta bancaria en menos de 24 horas."
  }
];

export function HowItWorksCarousel(): ReactElement {
  return (
    <section className="section-transition" aria-labelledby="how-it-works-title">
      <div className="container relative">
        {/* Process Steps */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 
            id="how-it-works-title" 
            className="text-4xl font-bold mb-4"
          >
            <span className="text-primary-navy">Proceso simple en</span>{' '}
            <span className="text-primary-cyan">tres pasos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Obtén tu préstamo de manera rápida y sencilla
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-primary-cyan/20 hidden md:block">
            <div className="absolute inset-0 bg-primary-cyan w-1/3 transition-all duration-1000" />
          </div>

          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl group opacity-0 animate-fade-in-up border border-white/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full border-4 border-primary-cyan flex items-center justify-center shadow-lg">
                {step.icon}
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary-navy mb-4 group-hover:text-primary-cyan transition-colors duration-300">
                  {step.title}
                </h3>
                {step.title.includes('Documentos') ? (
                  <ul className="text-gray-600 space-y-2 text-left">
                    {step.description.split('\n').map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-cyan" />
                        {item.replace('• ', '')}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}