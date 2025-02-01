import { type ReactElement, useState } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "María González",
    role: "Propietaria de Casa",
    content: "Gracias a SoluPresta pude renovar mi cocina y baño. El proceso fue increíblemente sencillo y el equipo me ayudó en cada paso. ¡Mi casa se ve increíble ahora!",
    image: "/assets/images/testimonials/testimonial-1.jpg",
    rating: 5,
    loanAmount: "$120,000",
    purpose: "Renovación",
    timeline: "2 meses",
    achievement: "Casa renovada"
  },
  {
    name: "Carlos Ramírez",
    role: "Padre de Familia",
    content: "Necesitábamos ampliar nuestra casa para la familia creciente. SoluPresta nos ofreció una solución rápida y accesible. El proceso fue muy profesional.",
    image: "/assets/images/testimonials/testimonial-2.jpg",
    rating: 5,
    loanAmount: "$200,000",
    purpose: "Ampliación",
    timeline: "3 meses",
    achievement: "Espacio extra"
  },
  {
    name: "Ana Martínez",
    role: "Emprendedora",
    content: "Con el préstamo de SoluPresta pude remodelar mi local comercial. Las tasas son justas y el servicio es excelente. ¡Mi negocio ha crecido desde entonces!",
    image: "/assets/images/testimonials/testimonial-3.jpg",
    rating: 5,
    loanAmount: "$150,000",
    purpose: "Remodelación",
    timeline: "2.5 meses",
    achievement: "Local renovado"
  }
];

function TestimonialCard({ testimonial, isActive }: { testimonial: typeof testimonials[0]; isActive: boolean }): ReactElement {
  return (
    <div 
      className={`relative transition-all duration-500 ease-out ${
        isActive 
          ? 'opacity-100 translate-x-0 scale-100' 
          : 'opacity-0 translate-x-full scale-95'
      }`}
    >
      <div className="bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-white/20">
        {/* Card Header with Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/20 via-transparent to-primary-navy/40" />
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          
          {/* Achievement Badge */}
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-primary-navy px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            {testimonial.achievement}
          </div>

          {/* Rating */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star 
                key={i} 
                className="w-5 h-5 fill-primary-cyan text-primary-cyan drop-shadow-lg" 
              />
            ))}
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative px-6 py-8">
          {/* Quote Icon */}
          <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-cyan/10" />
          
          {/* Author Info */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-primary-navy">{testimonial.name}</h4>
            <p className="text-primary-cyan font-medium">{testimonial.role}</p>
          </div>

          {/* Testimonial Content */}
          <p className="text-gray-600 leading-relaxed mb-8">
            "{testimonial.content}"
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
            <div className="text-center">
              <p className="text-sm text-gray-500">Préstamo</p>
              <p className="font-semibold text-primary-navy">{testimonial.loanAmount}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Propósito</p>
              <p className="font-semibold text-primary-navy">{testimonial.purpose}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Tiempo</p>
              <p className="font-semibold text-primary-navy">{testimonial.timeline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsCarousel(): ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
    
    // Reset animation lock after transition
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="section-transition" aria-labelledby="testimonials-title">
      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="testimonials-title" 
            className="text-4xl font-bold mb-4"
          >
            <span className="text-primary-navy">Transformando</span>{' '}
            <span className="text-primary-cyan">Hogares y Vidas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a familias mexicanas a mejorar sus hogares y calidad de vida
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => handleNavigation('prev')}
              disabled={isAnimating}
              className="group p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-cyan/20 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Testimonio anterior"
            >
              <ArrowLeft className="w-6 h-6 text-primary-navy transition-all duration-300 group-hover:text-primary-cyan group-hover:-translate-x-1" />
            </button>
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => handleNavigation('next')}
              disabled={isAnimating}
              className="group p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-cyan/20 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Siguiente testimonio"
            >
              <ArrowRight className="w-6 h-6 text-primary-navy transition-all duration-300 group-hover:text-primary-cyan group-hover:translate-x-1" />
            </button>
          </div>

          {/* Testimonials */}
          <div className="relative overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0"
                    style={{ opacity: index === activeIndex ? 1 : 0 }}
                  >
                    <TestimonialCard 
                      testimonial={testimonial}
                      isActive={index === activeIndex}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && setActiveIndex(index)}
                disabled={isAnimating}
                className={`relative h-3 transition-all duration-300 rounded-full focus:outline-none disabled:cursor-not-allowed ${
                  index === activeIndex 
                    ? 'w-12 bg-primary-cyan' 
                    : 'w-3 bg-gray-200 hover:bg-primary-cyan/50'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : 'false'}
              >
                <span className="sr-only">Testimonio {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}