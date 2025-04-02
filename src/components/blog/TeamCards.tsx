
import { type ReactElement } from 'react';

interface TeamMember {
  image: string;
  name: string;
  title: string;
  description: string;
  email: string;
}

interface TeamCardsProps {
  members: TeamMember[];
}

export function TeamCards({ members }: TeamCardsProps): ReactElement {
  return (
    <section className="my-team" aria-labelledby="team-section-title">
      <h2 id="team-section-title" className="sr-only">Nuestro Equipo</h2>
      <div className="row" role="list">
        {members.map((member, index) => (
          <div className="column" key={index} role="listitem">
            <div className="team-card">
              <img 
                src={member.image} 
                alt={`Foto de ${member.name}, ${member.title}`} 
                style={{ width: '100%' }} 
                loading="lazy" 
              />
              <div className="card-body">
                <h3>{member.name}</h3>
                <p className="title">{member.title}</p>
                <p>{member.description}</p>
                <p>{member.email}</p>
                <p>
                  <button 
                    className="left-btn"
                    aria-label={`Contactar a ${member.name}`}
                  >
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="adds mt-2">
        <video 
          autoPlay 
          muted 
          loop 
          src="/assets/videos/product-commercial.mp4"
          aria-label="Video comercial del producto"
        ></video>
      </div>
      <div className="adds mt-2">
        <video 
          autoPlay 
          muted 
          loop 
          src="/assets/videos/brand-commercial.mp4"
          aria-label="Video comercial de la marca"
        ></video>
      </div>
    </section>
  );
}
