import type { ReactElement } from 'react';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Building,
  HelpCircle
} from 'lucide-react';

interface ContactCardProps {
  icon: ReactElement;
  title: string;
  details: string[];
  index: number;
}

function ContactCard({ icon, title, details, index }: ContactCardProps): ReactElement {
  return (
    <div 
      className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/5 to-primary-navy/5 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Content */}
      <div className="relative">
        <div className="mb-6 p-4 bg-white shadow-lg rounded-2xl transform -translate-y-12 transition-all duration-500 group-hover:-translate-y-14">
          <div className="p-3 bg-primary-cyan/10 text-primary-cyan rounded-xl transition-all duration-500 group-hover:bg-primary-cyan group-hover:text-white">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-primary-navy mb-3 transition-colors duration-500 group-hover:text-primary-cyan">
          {title}
        </h3>
        
        {details.map((detail, i) => (
          <p key={i} className="text-gray-600 mb-2 last:mb-0">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
}

interface FAQProps {
  question: string;
  answer: string;
  index: number;
}

function FAQ({ question, answer, index }: FAQProps): ReactElement {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <h4 className="flex items-start gap-3 text-lg font-semibold text-primary-navy mb-3">
        <HelpCircle className="w-6 h-6 text-primary-cyan flex-shrink-0" />
        {question}
      </h4>
      <p className="text-gray-600 ml-9">
        {answer}
      </p>
    </div>
  );
}

export function Contact(): ReactElement {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      details: ["5612474747"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Correo Electrónico",
      details: ["atencion@solupresta.com"]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      details: [
        "Avenida Insurgentes Sur No. 1425,",
        "Piso 9, Oficina 9D,",
        "Col. Insurgentes Mixcoac,",
        "Alcaldía Benito Juárez,",
        "C.P. 03920 CDMX"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horario de Atención",
      details: [
        "Lunes a Viernes: 9:00 AM - 6:00 PM",
        "Sábados: 10:00 AM - 2:00 PM"
      ]
    }
  ];

  const faqs = [
    {
      question: "¿Cuál es el monto máximo que puedo solicitar?",
      answer: "Puedes solicitar hasta $500,000 MXN, dependiendo de tu capacidad de pago y historial crediticio."
    },
    {
      question: "¿Cuánto tiempo tarda la aprobación?",
      answer: "El proceso de aprobación generalmente toma menos de 24 horas una vez que recibimos toda la documentación necesaria."
    },
    {
      question: "¿Qué documentos necesito?",
      answer: "Necesitarás una identificación oficial vigente, comprobante de domicilio reciente y comprobante de ingresos."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-primary-navy/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-primary-cyan">Contáctanos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="opacity-0 animate-fade-in-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary-navy mb-6 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-primary-cyan" />
                  Envíanos un mensaje
                </h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-cyan focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-cyan focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-cyan focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="asunto"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-cyan focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="prestamo">Información sobre préstamos</option>
                      <option value="existente">Consulta sobre préstamo existente</option>
                      <option value="pagos">Información sobre pagos</option>
                      <option value="otro">Otro asunto</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-cyan focus:border-transparent transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-cyan text-white font-semibold rounded-lg shadow-sm hover:bg-primary-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-cyan transition-colors group"
                  >
                    Enviar mensaje
                    <Send className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <ContactCard
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  details={info.details}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}