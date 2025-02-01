import { useState, useEffect, type ReactElement } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import { calculateLoan, type LoanCalculationResult } from '../../utils/loanCalculator';

interface CreditDataFormProps {
  onNext: () => void;
  onPrev: () => void;
}

export function CreditDataForm({ onNext, onPrev }: CreditDataFormProps): ReactElement {
  const { formData, updateFormData, errors } = useFormContext();
  const [loanDetails, setLoanDetails] = useState<LoanCalculationResult | null>(null);

  useEffect(() => {
    if (formData.montoCredito && formData.plazoSolicitado) {
      const monto = parseFloat(formData.montoCredito);
      const plazo = parseInt(formData.plazoSolicitado);
      if (!isNaN(monto) && !isNaN(plazo)) {
        const result = calculateLoan(monto, plazo * 12); // Convert years to months
        setLoanDetails(result);
      }
    }
  }, [formData.montoCredito, formData.plazoSolicitado]);
  return (
    <div className="form-content" id="form3">
      <div className="form-heading">
        <p>
          <span style={{ color: 'white', paddingRight: '5px' }}>4.</span>
          Datos del crédito
        </p>
      </div>
      <p className="short-note">
        <span className="required" style={{ paddingRight: '5px' }}>*</span>
        Campos obligatorios
      </p>
      <div className="row form6-body">
        <div className="form6-bodyA col-md-6">
          <form>
            <input
              type="text"
              id="montoCredito"
              placeholder="$75,000"
              value={formData.montoCredito || ''}
              onChange={(e) => updateFormData({ montoCredito: e.target.value })}
              className={errors.montoCredito ? 'error' : ''}
            />
            <label htmlFor="montoCredito">
              Monto del crédito solicitado <span className="required">*</span>
              {errors.montoCredito && <span className="error-message">{errors.montoCredito}</span>}
            </label>

            <input
              type="text"
              id="plazoSolicitado"
              placeholder="5 años"
              value={formData.plazoSolicitado || ''}
              onChange={(e) => updateFormData({ plazoSolicitado: e.target.value })}
              className={errors.plazoSolicitado ? 'error' : ''}
            />
            <label htmlFor="plazoSolicitado">
              Plazo solicitado en años <span className="required">*</span>
              {errors.plazoSolicitado && <span className="error-message">{errors.plazoSolicitado}</span>}
            </label>
            <span className="short-note">Máximo 5 años Repara, máximo 10 años renueva</span>

            <br />
            <br />
            <p className="destination">Destino de los recursos</p>
            <p className="amount-details">
              Porcentaje del monto de crédito otorgado para pago de mano de obra para las reparaciones,
              ampliaciones o mejoras de la vivienda que habito
            </p>

            <input
              type="text"
              id="porcentajeManoObra"
              placeholder="20%"
              value={formData.porcentajeManoObra || ''}
              onChange={(e) => updateFormData({ porcentajeManoObra: e.target.value })}
            />
            <label htmlFor="porcentajeManoObra">Máximo 20% del monto del crédito otorgado</label>

            <br />
            <p className="amount-geal">
              Porcentaje del monto de crédito otorgado para pago de titulación de vivienda a mi nombre
              presentando previa cotización emititd por el notario público a cargo del trámite de titulación.
            </p>
            <br />

            <input
              type="text"
              id="porcentajeTitulacion"
              placeholder="30%"
              value={formData.porcentajeTitulacion || ''}
              onChange={(e) => updateFormData({ porcentajeTitulacion: e.target.value })}
            />
            <label htmlFor="porcentajeTitulacion">Máximo 20% del monto del crédito otorgado</label>
          </form>
        </div>

        <div className="form6-bodyB col-md-6">
          <form>
            <select
              className="form-select"
              value={formData.tipoMejoravit || ''}
              onChange={(e) => updateFormData({ tipoMejoravit: e.target.value })}
            >
              <option value="">Seleccione tipo</option>
              <option value="renueva">Renueva</option>
              <option value="mejoravit">Mejoravit</option>
            </select>
            <label htmlFor="tipoMejoravit">
              Mejoravit<span className="required">*</span>
              {errors.tipoMejoravit && <span className="error-message">{errors.tipoMejoravit}</span>}
            </label>

            <select
              className="form-select"
              value={formData.cesi || ''}
              onChange={(e) => updateFormData({ cesi: e.target.value })}
            >
              <option value="">Seleccione CESI</option>
              <option value="campeche">Campeche</option>
              <option value="mejoravit">Mejoravit</option>
            </select>
            <label htmlFor="cesi">
              CESI<span className="required">*</span>
              {errors.cesi && <span className="error-message">{errors.cesi}</span>}
            </label>

            <br />
            <br />

            <input
              type="text"
              id="cuentaClabe"
              placeholder="123456987"
              value={formData.cuentaClabe || ''}
              onChange={(e) => updateFormData({ cuentaClabe: e.target.value })}
              className={errors.cuentaClabe ? 'error' : ''}
            />
            <label htmlFor="cuentaClabe">
              Cuenta CLABE de la notaría a la que realizará el pago <span className="required">*</span>
              {errors.cuentaClabe && <span className="error-message">{errors.cuentaClabe}</span>}
            </label>

            <input
              type="text"
              id="municipio"
              placeholder="Municipio"
              value={formData.municipio || ''}
              onChange={(e) => updateFormData({ municipio: e.target.value })}
            />
            <label htmlFor="municipio">Municipio</label>

            <input
              type="text"
              id="folioAcuse"
              placeholder="12346"
              value={formData.folioAcuse || ''}
              onChange={(e) => updateFormData({ folioAcuse: e.target.value })}
            />
            <label htmlFor="folioAcuse">
              Número de folio del acuse de carga de evidencia inicial de la mejora
            </label>
          </form>
        </div>
      </div>
      {loanDetails && (
        <div className="loan-calculation-results mb-4 p-3 bg-light rounded">
          <h4 className="mb-3">Detalles del Préstamo</h4>
          <div className="row">
            <div className="col-md-6">
              <p><strong>Pago Mensual:</strong> ${loanDetails.monthlyPayment.toLocaleString()}</p>
              <p><strong>Tasa Anual:</strong> {(loanDetails.annualRate * 100).toFixed(2)}%</p>
            </div>
            <div className="col-md-6">
              <p><strong>Interés Total:</strong> ${loanDetails.totalInterest.toLocaleString()}</p>
              <p><strong>Pago Total:</strong> ${loanDetails.totalPayment.toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}
      <div>
        <button className="prev-btn" onClick={onPrev}>
          <i className="fas fa-arrow-left"></i> Previous
        </button>
        <button className="next-btn" onClick={onNext}>
          SIGUIENTE <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
