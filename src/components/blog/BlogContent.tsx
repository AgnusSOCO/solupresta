
import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface BlogContentProps {
  title: string;
  featuredImage: string;
  content: ReactElement;
}

export function BlogContent({ title, featuredImage, content }: BlogContentProps): ReactElement {
  return (
    <div className="col-md-8 col-sm-12">
      <article className="bg-primary-cyan rounded-2xl overflow-hidden shadow-lg animate-fade-in">
        <header className="p-6 bg-primary-navy">
          <h1 id="blog-title" className="text-3xl font-heading text-text-light mb-4">{title}</h1>
        </header>
        <div className="relative">
          <img 
            src={featuredImage} 
            alt={`Imagen destacada para ${title}`} 
            className="w-full h-64 object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-navy/30"></div>
        </div>
        <div className="p-8 text-text-light space-y-6 animate-fade-in-up">
          {content}
        </div>
        <div className="p-6 bg-primary-navy/10 border-t border-primary-navy/20">
          <div className="rating" role="group" aria-labelledby="rating-title">
            <span id="rating-title" className="text-lg font-heading text-text-light block mb-3">Rate Your Experience</span>
            <div role="radiogroup" aria-label="Calificación del artículo" className="flex gap-2">
              <span className="fa fa-star text-warning" role="radio" aria-checked="true" aria-label="1 estrella"></span>
              <span className="fa fa-star text-warning" role="radio" aria-checked="true" aria-label="2 estrellas"></span>
              <span className="fa fa-star text-warning" role="radio" aria-checked="true" aria-label="3 estrellas"></span>
              <span className="fa fa-star text-warning" role="radio" aria-checked="true" aria-label="4 estrellas"></span>
              <span className="fa fa-star text-text-light/30" role="radio" aria-checked="false" aria-label="5 estrellas"></span>
            </div>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div className="group">
          <article className="bg-primary-navy rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="relative">
              <img 
                src="/assets/images/blog/traffic-safety.jpg" 
                alt="Traffic Safety" 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-navy/60"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-heading text-text-light mb-3">Traffic Safety</h4>
              <p className="text-text-light/90">Understanding the importance of traffic safety can save lives and reduce accidents on</p>
            </div>
          </article>
        </div>
        
        <div className="group">
          <article className="bg-primary-navy rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="relative">
              <img 
                src="/assets/images/blog/road-signs.jpg" 
                alt="Road Signs" 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-navy/60"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-heading text-text-light mb-3">Road Signs</h4>
              <p className="text-text-light/90">Recognizing and following road signs is crucial for safe driving and road discipline.</p>
            </div>
          </article>
        </div>
        
        <div className="group hidden lg:block">
          <article className="bg-primary-navy rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="relative">
              <img 
                src="/assets/images/blog/speed-limits.jpg" 
                alt="Speed Limits" 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-navy/60"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-heading text-text-light mb-3">Speed Limits</h4>
              <p className="text-text-light/90">Adhering to speed limits is key to avoiding accidents and ensuring road safety.</p>
            </div>
          </article>
        </div>
      </div>

      <div className="mt-12 p-8 bg-primary-navy/5 rounded-xl border border-primary-navy/10">
        <h2 className="text-2xl font-heading text-primary-navy mb-4">How to Stay Safe</h2>
        <p className="text-text-secondary">Always wear a seat belt, follow traffic signals, maintain a safe distance from the vehicle ahead, and never use mobile phones while driving. Educate yourself on road signs and signals, and be courteous to fellow drivers.</p>
      </div>

      <nav className="flex justify-between items-center mt-12 py-6 border-t border-primary-navy/10" aria-label="Navegación entre artículos">
        <Link 
          to="/blog3" 
          className="flex items-center text-primary-navy hover:text-primary-navy/80 transition-colors duration-300"
          aria-label="Ir al artículo anterior"
        >
          <i className="fa-solid fa-circle-chevron-left mr-3" aria-hidden="true"></i>
          <span>Previous Blog</span>
        </Link>
        <Link 
          to="/blog2" 
          className="flex items-center text-primary-navy hover:text-primary-navy/80 transition-colors duration-300"
          aria-label="Ir al siguiente artículo"
        >
          <span>Next Blog</span>
          <i className="fa-solid fa-circle-chevron-right ml-3" aria-hidden="true"></i>
        </Link>
      </nav>
      </article>
    </div>
  );
}
