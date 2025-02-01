import { type ReactElement } from 'react';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { BlogContent, TeamCards, RegistrationForm } from '../components/blog';
import { SocialIcons } from '../components/shared/SocialIcons';
import { BlogCarousel } from '../components/home/BlogCarousel';

const teamMembers = [
  {
    image: '/assets/images/team/team-member-2.png',
    name: 'Jane Doe',
    title: 'CEO & Founder',
    description: 'Some text that describes me lorem ipsum ipsum lorem.',
    email: 'example@example.com'
  }
];

export function BlogPost3(): ReactElement {
  const blogContent = (
    <>
      <p className="lead">Descubre los fundamentos para mantener unas finanzas personales saludables.</p>
      
      <h2>Presupuesto Mensual</h2>
      <p>Aprende a crear y mantener un presupuesto mensual efectivo que te ayude a controlar tus gastos e ingresos.</p>
      
      <h2>Ahorro Estratégico</h2>
      <p>Implementa estrategias de ahorro que te permitan construir un fondo de emergencia y alcanzar tus metas financieras.</p>
      
      <h2>Gestión de Deudas</h2>
      <p>Desarrolla un plan efectivo para manejar y reducir tus deudas de manera responsable.</p>
      
      <h2>Inversiones Básicas</h2>
      <p>Conoce las opciones de inversión disponibles y cómo comenzar a construir un portafolio diversificado.</p>
      
      <h2>Protección Financiera</h2>
      <p>Entiende la importancia de los seguros y cómo proteger tu patrimonio y a tu familia.</p>
      
      <h2>Metas Financieras</h2>
      <p>Establece metas financieras claras y desarrolla planes de acción para alcanzarlas.</p>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <BlogContent
            title="Finanzas Personales: Guía Básica"
            featuredImage="/assets/images/blog/blog-3.jpg"
            content={blogContent}
          />
          <div className="col-md-4 col-sm-12">
            <TeamCards members={teamMembers} />
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
