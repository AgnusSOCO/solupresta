import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';

export function ApplicationSuccess(): ReactElement {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="card shadow">
              <div className="card-body p-5">
                <div className="mb-4">
                  <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '4rem' }}></i>
                </div>
                <h2 className="mb-4">¡Solicitud Enviada con Éxito!</h2>
                <p className="lead mb-4">
                  Hemos recibido tu solicitud de préstamo. Nuestro equipo la revisará y te contactará pronto.
                </p>
                <p className="mb-4">
                  Recibirás un correo electrónico con más detalles sobre el proceso de tu solicitud.
                </p>
                <div className="mt-4">
                  <Link to="/" className="btn btn-primary">
                    Volver al Inicio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
