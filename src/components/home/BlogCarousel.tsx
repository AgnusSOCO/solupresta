import type { ReactElement } from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Los 7 errores al pedir préstamos en línea',
    excerpt: 'No pidas un crédito hasta enterarte de los 7 errores más comunes, el número 5 te va a sorprender porque esta...',
    image: '/assets/images/blog/blog-1.jpg',
    date: '15 Enero 2024',
    link: '/blog/1'
  },
  {
    title: 'Como mejorar tu índice en el buró de crédito',
    excerpt: '¿Has tenido problemas con tu crédito?, muchas veces no es culpa de los usuarios, sino de los ejecutivos que no siguen...',
    image: '/assets/images/blog/blog-2.jpg',
    date: '10 Enero 2024',
    link: '/blog/2'
  },
  {
    title: 'Que te conviene para un crédito: ¿más meses para pagar o menos intereses?',
    excerpt: 'Hay quienes aseguran que debes pedir un crédito a varios meses, todo depende...',
    image: '/assets/images/blog/blog-3.jpg',
    date: '5 Enero 2024',
    link: '/blog/3'
  }
];

export function BlogCarousel(): ReactElement {
  return (
    <section className="bg-gray-50 py-16 lg:py-24 scroll-mt-20" aria-labelledby="blog-section-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 id="blog-section-title" className="text-3xl lg:text-4xl font-bold text-primary-navy mb-4">
            Blog y Noticias
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Mantente informado sobre finanzas personales y préstamos</p>
        </div>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          role="feed" 
          aria-busy="false"
          aria-label="Lista de artículos del blog"
        >
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="group opacity-0 animate-fade-in-up" 
              style={{ animationDelay: `${index * 150}ms` }}
              aria-labelledby={`blog-title-${index}`}
              aria-describedby={`blog-excerpt-${index}`}
            >
              <div className="bg-primary-cyan rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-4 focus-within:ring-offset-primary-cyan">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={`Imagen ilustrativa para el artículo: ${post.title}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    height="192"
                    width="384"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-primary-navy bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" aria-hidden="true"></div>
                  <time 
                    dateTime={post.date.replace(/(\d+)\s+(\w+)\s+(\d+)/, '$3-$2-$1')}
                    className="absolute bottom-4 left-4 bg-white text-primary-navy px-4 py-1 rounded-full text-sm font-medium shadow-md transition-transform duration-300 group-hover:translate-y-[-4px]"
                    aria-label={`Publicado el ${post.date}`}
                  >
                    {post.date}
                  </time>
                </div>
                <div className="p-6 text-white">
                  <h3 id={`blog-title-${index}`} className="text-xl font-semibold mb-3 line-clamp-2 transition-colors group-hover:text-white/90">{post.title}</h3>
                  <p id={`blog-excerpt-${index}`} className="text-white/90 mb-4 line-clamp-3">{post.excerpt}</p>
                  <a 
                    href={post.link} 
                    className="group/link inline-flex items-center text-white font-medium hover:text-white/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-cyan rounded-lg px-3 py-2 hover:bg-white/10"
                    aria-labelledby={`blog-title-${index}`}
                    aria-describedby={`blog-excerpt-${index}`}
                  >
                    <span className="sr-only">Leer artículo completo:</span>
                    <span>Leer más</span>
                    <svg 
                      className="ml-2 w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
