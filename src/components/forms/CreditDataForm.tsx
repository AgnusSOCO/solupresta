import { useState, useEffect, type ReactElement } from 'react';
import { useFormContext } from '../../contexts/FormContext';
import { calculateLoan, LOAN_LIMITS, type LoanCalculationResult } from '../../utils/loanCalculator';

interface CreditDataFormProps {
  onNext: () => void;
  onPrev: () => void;
}

export function CreditDataForm({ onNext, onPrev }: CreditDataFormProps): ReactElement {
  const { formData, updateFormData, errors } = useFormContext();
  const [loanDetails, setLoanDetails] = useState<LoanCalculationResult | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<'repara' | 'renueva'>('repara');

  useEffect(() => {
    if (formData.montoCredito && formData.plazoSolicitado) {
      const monto = parseFloat(formData.montoCredito);
      const plazo = parseInt(formData.plazoSolicitado);
      if (!isNaN(monto) && !isNaN(plazo)) {
        const result = calculateLoan(monto, plazo * 12, selectedProgram);
        setLoanDetails(result);
      }
    }
  }, [formData.montoCredito, formData.plazoSolicitado, selectedProgram]);

  const validateAmount = (amount: number) => {
    const limits = LOAN_LIMITS[selectedProgram];
    return amount >= limits.min && amount <= limits.max;
  };

  const validateTerm = (years: number) => {
    return years > 0 && years <= LOAN_LIMITS[selectedProgram].maxTerm;
  };

  return (
    <div className="form-content" id="form3">
      <div className="form-heading">
        <h2 className="text-2xl font-semibold text-primary-navy mb-4">Datos del crédito</h2>
        <p className="text-sm text-gray-500 mb-6">
          <span className="text-red-500">*</span> Campos obligatorios
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="tipoMejoravit" className="block text-sm font-medium text-gray-700 mb-1">
              Programa Mejoravit <span className="text-red-500">*</span>
            </label>
            <select
              id="tipoMejoravit"
              value={selectedProgram}
              onChange={(e) => {
                setSelectedProgram(e.target.value as 'repara' | 'renueva');
                updateFormData({ tipoMejoravit: e.target.value });
              }}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-cyan focus:border-transparent"
            >
              <option value="repara">Mejoravit Repara</option>
              <option value="renueva">Mejoravit Renueva</option>
            </select>
            {errors.tipoMejoravit && (
              <p className="mt-1 text-sm text-red-500">{errors.tipoMejoravit}</p>
            )}
          </div>

          <div>
            <label htmlFor="montoCredito" className="block text-sm font-medium text-gray-700 mb-1">
              Monto del crédito <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                id="montoCredito"
                value={formData.montoCredito || ''}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  if (validateAmount(value)) {
                    updateFormData({ montoCredito: e.target.value });
                  }
                }}
                min={LOAN_LIMITS[selectedProgram].min}
                max={LOAN_LIMITS[selectedProgram].max}
                step="0.01"
                className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-cyan focus:border-transparent"
                placeholder={`${LOAN_LIMITS[selectedProgram].min.toLocaleString()} - ${LOAN_LIMITS[selectedProgram].max.toLocaleString()}`}
              />
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Rango: ${LOAN_LIMITS[selectedProgram].min.toLocaleString()} - ${LOAN_LIMITS[selectedProgram].max.toLocaleString()}
            </p>
            {errors.montoCredito && (
              <p className="mt-1 text-sm text-red-500">{errors.montoCredito}</p>
            )}
          </div>

          <div>
            <label htmlFor="plazoSolicitado" className="block text-sm font-medium text-gray-700 mb-1">
              Plazo en años <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="plazoSolicitado"
              value={formData.plazoSolicitado || ''}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (validateTerm(value)) {
                  updateFormData({ plazoSolicitado: e.target.value });
                }
              }}
              min="1"
              max={LOAN_LIMITS[selectedProgram].maxTerm}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-cyan focus:border-transparent"
              placeholder={`1 - ${LOAN_LIMITS[selectedProgram].maxTerm} años`}
            />
            <p className="mt-1 text-sm text-gray-500">
              Máximo {LOAN_LIMITS[selectedProgram].maxTerm} años para Mejoravit {selectedProgram === 'repara' ? 'Repara' : 'Renueva'}
            </p>
            {errors.plazoSolicitado && (
              <p className="mt-1 text-sm text-red-500">{errors.plazoSolicitado}</p>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {loanDetails && (
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-primary-navy mb-4">Detalles del Préstamo</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tasa Anual:</span>
                  <span className="font-semibold text-primary-navy">
                    {(loanDetails.annualRate * 100).toFixed(2)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pago Mensual:</span>
                  <span className="font-semibold text-primary-navy">
                    ${loanDetails.monthlyPayment.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interés Total:</span>
                  <span className="font-semibold text-primary-navy">
                    ${loanDetails.totalInterest.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pago Total:</span>
                  <span className="font-semibold text-primary-navy">
                    ${loanDetails.totalPayment.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-primary-navy mb-4">Información Importante</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-primary-cyan">•</span>
                <span>80% del crédito se entrega mediante Tarjeta Mejoravit para compras en comercios afiliados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-cyan">•</span>
                <span>20% disponible para retiro en ATM para costos de mano de obra</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-cyan">•</span>
                <span>Hasta 30% puede usarse para regularización de vivienda</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-cyan">•</span>
                <span>Tiempo de ejecución: 9 meses + 3 meses de extensión</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button 
          onClick={onPrev}
          className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-cyan"
        >
          Anterior
        </button>
        <button 
          onClick={onNext}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-cyan hover:bg-primary-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-cyan"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}