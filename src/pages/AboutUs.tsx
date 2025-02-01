import type { ReactElement } from 'react';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
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
        
        <p className="text-gray-600 transition-colors duration-500 group-hover:text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}

export function AboutUs(): ReactElement {
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
              <span className="text-primary-cyan">Quienes</span>{' '}
              <span className="text-primary-navy">Somos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              En SoluPresta, nos dedicamos a hacer realidad los sueños de mejora del hogar de nuestros clientes a través de soluciones financieras accesibles y personalizadas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="opacity-0 animate-fade-in-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="inline-flex p-3 bg-primary-cyan/10 text-primary-cyan rounded-xl mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">Nuestra Misión</h2>
                <p className="text-gray-600">
                  Facilitar el acceso a financiamiento para mejoras del hogar, contribuyendo al bienestar y calidad de vida de las familias mexicanas mediante soluciones crediticias responsables y transparentes.
                </p>
              </div>
            </div>

            <div className="opacity-0 animate-fade-in-right">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="inline-flex p-3 bg-primary-navy/10 text-primary-navy rounded-xl mb-6">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4">Nuestra Visión</h2>
                <p className="text-gray-600">
                  Ser la institución líder en préstamos para mejoras del hogar en México, reconocida por nuestra excelencia en servicio, innovación financiera y compromiso con el desarrollo de las comunidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">Nuestros Valores</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestras acciones y decisiones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ValueCard
              icon={<Shield className="w-6 h-6" />}
              title="Integridad"
              description="Actuamos con honestidad y transparencia en todas nuestras operaciones."
              index={0}
            />
            <ValueCard
              icon={<Heart className="w-6 h-6" />}
              title="Compromiso"
              description="Nos dedicamos a satisfacer las necesidades de nuestros clientes."
              index={1}
            />
            <ValueCard
              icon={<Rocket className="w-6 h-6" />}
              title="Innovación"
              description="Buscamos constantemente nuevas formas de mejorar nuestros servicios."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="opacity-0 animate-fade-in-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary-navy mb-6">Contáctanos</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-cyan/10 text-primary-cyan rounded-xl">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-2">Atención al Cliente</h3>
                      <p className="text-gray-600">(55) 8128-9583 / (55) 7822-8820</p>
                      <p className="text-gray-600">atencion@prestamomico.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-cyan/10 text-primary-cyan rounded-xl">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-2">Ubicación</h3>
                      <p className="text-gray-600">
                        Avenida Insurgentes Sur No. 1425, Piso 9, Oficina 9D,
                        Col. Insurgentes Mixcoac, Alcaldía Benito Juárez,
                        C.P. 03920 CDMX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-cyan/10 text-primary-cyan rounded-xl">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy mb-2">Horario de Atención</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sábados: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="opacity-0 animate-fade-in-right">
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <h2 className="text-2xl font-bold text-primary-navy mb-6">¿Por qué elegirnos?</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-cyan/10 text-primary-cyan rounded-xl">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy">Proceso Simple</h3>
                      <p className="text-gray-600">Solicitud rápida y sencilla con respuesta en 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-cyan/10 text-primary-cyan rounded-xl">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy">Tasas Competitivas</h3>
                      <p className="text-gray-600">Ofrecemos tasas de interés justas y transparentes</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-cyan/10 text-primary-cyan rounded-xl">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-navy">Asesoría Personalizada</h3>
                      <p className="text-gray-600">Equipo de expertos para guiarte en cada paso</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}