import { useState, type ReactElement } from 'react';
import { FormHeader } from '../components/forms/FormHeader';
import { Footer } from '../components/shared/Footer';
import { FormProvider, useFormContext } from '../contexts/FormContext';

export function HomeWork(): ReactElement {
  const [currentStep, setCurrentStep] = useState(1);
  const { validateStep } = useFormContext();

  const handleNext = () => {
    if (validateStep(currentStep) && currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      // Show success popup and redirect to home
      window.location.href = '/';
    }
  };

  return (
    <FormProvider>
      <div>
        <FormHeader />
        <div className="container" id="form-layout-style">
          <div className={`form${currentStep}-body form-content ${currentStep === 1 ? 'active' : ''}`} id={`form${currentStep}`}>
            <div className="form-heading">
              <p>
                <span style={{ color: 'white', paddingRight: '5px' }}>{currentStep}.</span>
                {currentStep === 1 && 'Datos de identicacion de la o el derechohabiente'}
                {currentStep === 2 && 'Datos de la empresa en la que labora la o el derechohabiente'}
                {currentStep === 3 && 'Datos de la vivienda a mejorar'}
                {currentStep === 4 && 'Datos de identicacion de la o el derechohabiente'}
                {currentStep === 5 && 'Referencias familiares'}
                {currentStep === 6 && 'Beneficiario en caso de fallecimiento del titular'}
              </p>
            </div>

            {currentStep === 1 && (
              <div className="row">
                <div className="col-md-6 page-1-side-A">
                  <form>
                    <input type="text" id="nombre" placeholder="Carlos Roberto" />
                    <label htmlFor="nombre">Nombres<span className="required">*</span></label>
                    <input type="text" id="apellidoPaterno" placeholder="Becerra" />
                    <label htmlFor="apellidoPaterno">Apellido Paterno<span className="required">*</span></label>
                    <input type="text" id="apellidoMaterno" placeholder="Tella" />
                    <label htmlFor="apellidoMaterno">Apellido Materno<span className="required">*</span></label>
                    <input type="text" id="tipoIdentificacion" placeholder="INE" />
                    <label htmlFor="tipoIdentificacion">Tipo de Identificación</label>
                    <input type="number" id="fechaValidez" placeholder="0331502679145" />
                    <label htmlFor="numeroIdentificacion">Número de Identificación</label>
                    <div className="date-inputs">
                      <input type="text" className="active" id="numeroIdentificacion" placeholder="00" />
                      <input type="text" placeholder="Mes" />
                      <input type="text" placeholder="Año" />
                    </div>
                    <label htmlFor="fechaValidez">Fecha de validez de identificación</label>
                  </form>
                </div>
                <div className="col-md-6 page-1-side-B">
                  <div className="form1-body">
                    <form>
                      <input type="text" id="nss" placeholder="81119000989" />
                      <label htmlFor="nss">NSS<span className="required">*</span></label>
                      <input type="text" id="curp" placeholder="BECT900123MCYNG09" />
                      <label htmlFor="curp">CURP<span className="required">*</span></label>
                      <input type="text" id="rfc" placeholder="BETC900721400" />
                      <label htmlFor="rfc">RFC<span className="required">*</span></label>
                      <input type="text" id="telefono" placeholder="52 5566 2316" />
                      <label htmlFor="telefono">Teléfono</label>
                      <input type="email" id="correo" placeholder="art1008000@gmail.com" />
                      <label htmlFor="correo">Correo electrónico</label>
                      <div className="gender-inputs">
                        <input type="text" className="active" value="masculino" id="genero" placeholder="Masculino" />
                        <input type="text" value="femenino" placeholder="Femenino" />
                      </div>
                      <label htmlFor="genero">Género</label>
                      <div className="custom-select-wrapper">
                        <select id="estadoCivil">
                          <option value="casado">Casado</option>
                          <option value="soltero">Soltero</option>
                        </select>
                        <i className="fa-solid fa-caret-down custom-dropdown-icon"></i>
                      </div>
                      <label htmlFor="estadoCivil">Estado civil</label>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="row">
                <div className="col-md-6 page-1-form2-A">
                  <input type="text" id="nombreEmpresa" placeholder="Kreattive" required />
                  <label htmlFor="nombreEmpresa">Nombre de la empresa <span className="required">*</span></label>
                </div>
                <div className="col-md-6 page-1-form2-B">
                  <input type="text" id="telefono" placeholder="5537334748" required />
                  <label htmlFor="telefono">Teléfono de la empresa donde trabaja <span className="required">*</span></label>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="row">
                <div className="col-md-6 page-1-form3-A">
                  <label style={{ marginBlock: '10px' }} htmlFor="vivienda">La vivienda para mejorar es</label>
                  <div className="custom-select-wrapper">
                    <select id="Propia">
                      <option value="casado">Propia</option>
                      <option value="soltero">vivienda</option>
                    </select>
                    <i className="fa-solid fa-caret-down custom-dropdown-icon"></i>
                  </div>
                  <input type="text" id="calle" placeholder="Tres" required />
                  <label htmlFor="calle">Calle <span className="required">*</span></label>
                  <div className="inner-form-number">
                    <div className="inner1-number">
                      <input type="text" id="numeroExterior" placeholder="705" />
                      <label htmlFor="numeroExterior">Número exterior <span className="required">*</span></label>
                    </div>
                    <div className="inner2-number">
                      <input type="text" id="numeroInterior" placeholder="1080" />
                      <label htmlFor="numeroInterior">Número interior <span className="required">*</span></label>
                    </div>
                  </div>
                  <div className="inner-form-batch">
                    <div className="inner1-number">
                      <input type="text" id="lote" placeholder="B16" />
                      <label htmlFor="lote">Lote</label>
                    </div>
                    <div className="inner2-number">
                      <input type="text" id="manzana" placeholder="A2" />
                      <label htmlFor="manzana">Manzana</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 page-1-form3-B">
                  <div className="inner-form-Entity">
                    <div className="inner1-number">
                      <input type="text" id="entidad" placeholder="Cuernavaca" />
                      <label htmlFor="entidad">Entidad <span className="required">*</span></label>
                    </div>
                    <div className="inner2-number">
                      <input type="text" id="codigoPostal" placeholder="62440" />
                      <label htmlFor="codigoPostal">Código Postal <span className="required">*</span></label>
                    </div>
                  </div>
                  <input type="text" id="municipio" placeholder="Cuernavaca" />
                  <label htmlFor="municipio">Municipio <span className="required">*</span></label>
                  <input type="text" id="folioAcuse" placeholder="123456" />
                  <label htmlFor="folioAcuse">Número de folio del acuse de carga de evidencia inicial de la mejora</label>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="row form6-body">
                <div className="form6-bodyA col-md-6">
                  <input type="text" id="montoCredito" placeholder="$75,000" />
                  <label htmlFor="montoCredito">Monto del crédito solicitado</label>
                  <input type="text" id="plazoSolicitado" placeholder="5 años" />
                  <label htmlFor="plazoSolicitado">Plazo solicitado en años <span className="required">*</span></label>
                  <span className="short-note">Máximo 5 años Repara, máximo 10 años renueva</span>
                  <br />
                  <br />
                  <p className="destination">Destino de los recursos</p>
                  <p className="amount-details">
                    Porcentaje del monto de crédito otorgado para pago de mano de obra para las reparaciones, ampliaciones o mejoras de la vivienda que habito
                  </p>
                  <input type="text" id="maximoCredito" placeholder="20%" />
                  <label htmlFor="maximoCredito">Máximo 20% del monto del crédito otorgado</label>
                  <br />
                  <p className="amount-geal">
                    Porcentaje del monto de crédito otorgado para pago de titulación de vivienda a mi nombre presentando previa cotización emititd por el notario público a cargo del trámite de titulación.
                  </p>
                  <br />
                  <input type="text" id="maximoCredito" placeholder="30%" />
                  <label htmlFor="maximoCredito">Máximo 20% del monto del crédito otorgado</label>
                </div>
                <div className="form6-bodyB col-md-6">
                  <div className="custom-select-wrapper">
                    <select id="Mejoravit">
                      <option value="casado">Renueva</option>
                      <option value="soltero">Mejoravit</option>
                    </select>
                    <i className="fa-solid fa-caret-down custom-dropdown-icon"></i>
                  </div>
                  <label htmlFor="Mejoravit">Mejoravit<span className="required">*</span></label>
                  <div className="custom-select-wrapper">
                    <select id="Campeche">
                      <option value="casado">Campeche</option>
                      <option value="soltero">Mejoravit</option>
                    </select>
                    <i className="fa-solid fa-caret-down custom-dropdown-icon"></i>
                  </div>
                  <label htmlFor="Campeche">CESI<span className="required">*</span></label>
                  <br />
                  <br />
                  <input type="text" id="cuentaClabe" placeholder="123456987" />
                  <label htmlFor="cuentaClabe">Cuenta CLABE de la notaría a la que realizará el pago <span className="required">*</span></label>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="row">
                <div className="col-md-6 border-center page-2-form5-A">
                  <h4 className="inner-form-heading">Primera referencia</h4>
                  <input type="text" id="referencia1Nombre" placeholder="123456987" />
                  <label htmlFor="referencia1Nombre">Nombre completo <span className="required">*</span></label>
                  <input type="text" id="referencia1Telefono" placeholder="5537335748" />
                  <label htmlFor="referencia1Telefono">Teléfono <span className="required">*</span></label>
                  <input type="text" id="referencia1Celular" placeholder="7773121869" />
                  <label htmlFor="referencia1Celular">Celular</label>
                </div>
                <div className="col-md-6 page-2-form5-A">
                  <h4 className="inner-form-heading">Segunda referencia</h4>
                  <input type="text" id="referencia2Nombre" placeholder="Elisa de la Fuente" />
                  <label htmlFor="referencia2Nombre">Nombre completo</label>
                  <input type="text" id="referencia2Telefono" placeholder="5537335768" />
                  <label htmlFor="referencia2Telefono">Teléfono</label>
                  <input type="text" id="referencia2Celular" placeholder="7894512" />
                  <label htmlFor="referencia2Celular">Celular</label>
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div className="row">
                <div className="col-md-6 page-2-form6-A">
                  <input type="text" id="parentesco" placeholder="Madre" />
                  <label htmlFor="parentesco">Parentesco<span className="required">*</span></label>
                  <input type="text" id="beneficiarioApellidoPaterno" placeholder="5537335748" />
                  <label htmlFor="beneficiarioApellidoPaterno">Beneficiario apellido paterno<span className="required">*</span></label>
                </div>
                <div className="col-md-6 d-flex align-items-end page-2-form6-B">
                  <div>
                    <input type="text" id="beneficiarioApellidoMaterno" placeholder="5537335748" />
                    <label htmlFor="beneficiarioApellidoMaterno">Beneficiario apellido materno<span className="required">*</span></label>
                  </div>
                </div>
              </div>
            )}

            {currentStep > 1 && (
              <button className="prev-btn" onClick={handlePrev}>
                <i className="fas fa-arrow-left"></i> Previous
              </button>
            )}
            {currentStep < 6 ? (
              <button className="next-btn" onClick={handleNext}>
                SIGUIENTE <i className="fas fa-arrow-right"></i>
              </button>
            ) : (
              <button className="next-btn" onClick={handleSubmit}>
                Submit <i className="fas fa-check"></i>
              </button>
            )}
          </div>
        </div>

        <div className="popup" id="successPopup" style={{ display: 'none' }}>
          <h2>Thank you for your submission!</h2>
          <p>Your form has been successfully submitted.</p>
          <a href="/" className="back-home-btn">Back to Home</a>
        </div>

        <Footer />
      </div>
    </FormProvider>
  );
}
