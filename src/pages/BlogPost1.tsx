
import { type ReactElement } from 'react';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { BlogContent, TeamCards, RegistrationForm } from '../components/blog';
import { SocialIcons } from '../components/shared/SocialIcons';
import { BlogCarousel } from '../components/home/BlogCarousel';

const teamMembers = [
  {
    image: '/assets/images/team/team-member-1.png',
    name: 'Jane Doe',
    title: 'CEO & Founder',
    description: 'Some text that describes me lorem ipsum ipsum lorem.',
    email: 'example@example.com'
  },
  {
    image: '/assets/images/team/team-member-2.png',
    name: 'Mike Ross',
    title: 'Art Director',
    description: 'Some text that describes me lorem ipsum ipsum lorem.',
    email: 'example@example.com'
  }
];

export function BlogPost1(): ReactElement {
  const blogContent = (
    <>
      <p className="lead">Descubre los aspectos más importantes a considerar antes de solicitar un préstamo personal.</p>
      
      <h2>1. Evalúa tu Capacidad de Pago</h2>
      <p>Antes de solicitar un préstamo, analiza tus ingresos mensuales y gastos fijos para determinar cuánto puedes pagar cómodamente.</p>
      
      <h2>2. Compara Tasas de Interés</h2>
      <p>Investiga diferentes opciones y compara las tasas de interés para encontrar la mejor oferta que se ajuste a tus necesidades.</p>
      
      <h2>3. Lee los Términos y Condiciones</h2>
      <p>Es fundamental entender completamente los términos del préstamo, incluyendo plazos, comisiones y penalizaciones.</p>
      
      <h2>4. Prepara tu Documentación</h2>
      <p>Ten lista toda la documentación necesaria para agilizar el proceso de solicitud.</p>
      
      <h2>5. Considera el Plazo del Préstamo</h2>
      <p>Elige un plazo que te permita pagar cómodamente sin comprometer tus finanzas a largo plazo.</p>
      
      <h2>6. Mantén un Buen Historial Crediticio</h2>
      <p>Un buen historial crediticio puede ayudarte a obtener mejores tasas y condiciones.</p>
      
      <h2>7. Planifica tus Pagos</h2>
      <p>Establece un plan de pagos y configura recordatorios para evitar retrasos.</p>
    </>
  );

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <BlogContent
            title="7 Consejos para Préstamos Personales"
            featuredImage="/assets/images/blog/blog-1.jpg"
            content={blogContent}
          />
          <div className="col-md-4 col-sm-12">
            <TeamCards members={teamMembers} />
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
