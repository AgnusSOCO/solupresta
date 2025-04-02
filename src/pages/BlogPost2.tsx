import { type ReactElement } from 'react';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { BlogContent, TeamCards, RegistrationForm } from '../components/blog';
import { SocialIcons } from '../components/shared/SocialIcons';
import { BlogCarousel } from '../components/home/BlogCarousel';

const teamMembers = [
  {
    image: '/assets/images/team/team-member-3.png',
    name: 'Jane Doe',
    title: 'CEO & Founder',
    description: 'Some text that describes me lorem ipsum ipsum lorem.',
    email: 'example@example.com'
  }
];

const orderCard = {
  image: '/assets/images/blog/football-kit.jpg',
  title: 'Order Your Football Kit',
  description: 'Complete football kit for just $50. Click below to order now!',
  buttonText: 'Order Now'
};

export function BlogPost2(): ReactElement {
  const blogContent = (
    <>
      <p className="lead">Aprende cómo invertir sabiamente en mejoras para tu hogar con un préstamo personal.</p>
      
      <h2>Planificación de Mejoras</h2>
      <p>Identifica las áreas de tu hogar que necesitan atención y prioriza las mejoras según su importancia y retorno de inversión.</p>
      
      <h2>Presupuesto Realista</h2>
      <p>Desarrolla un presupuesto detallado que incluya materiales, mano de obra y un margen para imprevistos.</p>
      
      <h2>Selección de Contratistas</h2>
      <p>Investiga y compara diferentes contratistas, verifica referencias y asegúrate de obtener múltiples cotizaciones.</p>
      
      <h2>Permisos y Regulaciones</h2>
      <p>Verifica los permisos necesarios y asegúrate de cumplir con las regulaciones locales de construcción.</p>
      
      <h2>Financiamiento Inteligente</h2>
      <p>Explora las opciones de financiamiento disponibles y elige la que mejor se adapte a tu situación financiera.</p>
      
      <h2>Seguimiento del Proyecto</h2>
      <p>Mantén un registro detallado del progreso y los gastos para asegurar que el proyecto se mantenga dentro del presupuesto.</p>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <BlogContent
            title="Mejoras para el Hogar: Inversión Inteligente"
            featuredImage="/assets/images/blog/blog-2.jpg"
            content={blogContent}
          />
          <div className="col-md-4 col-sm-12">
            <TeamCards members={teamMembers} />
            <div className="order-card">
              <img src={orderCard.image} alt="Football Kit" />
              <h4>{orderCard.title}</h4>
              <p>{orderCard.description}</p>
              <button>{orderCard.buttonText}</button>
              <p className="order-confirm" style={{ display: 'none' }}>Order placed successfully!</p>
            </div>
            <div className="adds mt-2">
              <video autoPlay muted loop src="/assets/videos/soccer-commercial.mp4"></video>
            </div>
            <div className="adds mt-2">
              <video autoPlay muted loop src="/assets/videos/brand-commercial.mp4"></video>
            </div>
            <RegistrationForm />
            <SocialIcons />
          </div>
        </div>
      </div>
      <section className="container-fluid Blog-section mt-3">
        <div className="container Blog">
          <div className="Blog-heading">
            <h3>Related Blog Posts</h3>
          </div>
          <BlogCarousel />
        </div>
      </section>
      <Footer />
    </>
  );
}
