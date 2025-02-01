import type { ReactElement } from 'react';
import { useFormContext } from '../../contexts/FormContext';

interface FamilyReferencesFormProps {
  onNext: () => void;
  onPrev: () => void;
  isSubmitting?: boolean;
}

export function FamilyReferencesForm({ onNext, onPrev, isSubmitting = false }: FamilyReferencesFormProps): ReactElement {
  const { formData, updateFormData, errors } = useFormContext();
  return (
    <div className="form5-container form-content" id="form4">
      <div className="form-heading">
        <p>
          <span style={{ color: 'white', paddingRight: '5px' }}>5.</span>
          Referencias familiares del derechohabiente
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 border-center page-2-form5-A">
          <form>
            <h4 className="inner-form-heading">Primer referencia</h4>
            <input
              type="text"
              id="referencia1Nombre"
              placeholder="123456987"
              value={formData.referencia1Nombre || ''}
              onChange={(e) => updateFormData({ referencia1Nombre: e.target.value })}
              className={errors.referencia1Nombre ? 'error' : ''}
            />
            <label htmlFor="referencia1Nombre">
              Nombre completo <span className="required">*</span>
              {errors.referencia1Nombre && <span className="error-message">{errors.referencia1Nombre}</span>}
            </label>

            <input
              type="text"
              id="referencia1Telefono"
              placeholder="5537335748"
              value={formData.referencia1Telefono || ''}
              onChange={(e) => updateFormData({ referencia1Telefono: e.target.value })}
              className={errors.referencia1Telefono ? 'error' : ''}
            />
            <label htmlFor="referencia1Telefono">
              Teléfono <span className="required">*</span>
              {errors.referencia1Telefono && <span className="error-message">{errors.referencia1Telefono}</span>}
            </label>

            <input
              type="text"
              id="referencia1Celular"
              placeholder="7773121869"
              value={formData.referencia1Celular || ''}
              onChange={(e) => updateFormData({ referencia1Celular: e.target.value })}
            />
            <label htmlFor="referencia1Celular">Celular</label>
          </form>
        </div>

        <div className="col-md-6 page-2-form5-A">
          <form>
            <h4 className="inner-form-heading">Segunda referencia</h4>
            <input
              type="text"
              id="referencia2Nombre"
              placeholder="Elisa de la Fuente"
              value={formData.referencia2Nombre || ''}
              onChange={(e) => updateFormData({ referencia2Nombre: e.target.value })}
            />
            <label htmlFor="referencia2Nombre">
              Nombre completo
            </label>

            <input
              type="text"
              id="referencia2Telefono"
              placeholder="5537335768"
              value={formData.referencia2Telefono || ''}
              onChange={(e) => updateFormData({ referencia2Telefono: e.target.value })}
            />
            <label htmlFor="referencia2Telefono">Teléfono</label>

            <input
              type="text"
              id="referencia2Celular"
              placeholder="7894512"
              value={formData.referencia2Celular || ''}
              onChange={(e) => updateFormData({ referencia2Celular: e.target.value })}
            />
            <label htmlFor="referencia2Celular">Celular</label>
          </form>
        </div>
      </div>

      <div className="form5-container">
        <div className="form-heading">
          <p>
            <span style={{ color: 'white', paddingRight: '5px' }}>6.</span>
            Beneficiario en caso de fallecimiento del titular
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 page-2-form6-A">
            <form>
              <input
                type="text"
                id="beneficiarioParentesco"
                placeholder="Madre"
                value={formData.beneficiarioParentesco || ''}
                onChange={(e) => updateFormData({ beneficiarioParentesco: e.target.value })}
                className={errors.beneficiarioParentesco ? 'error' : ''}
              />
              <label htmlFor="beneficiarioParentesco">
                Parentesco<span className="required">*</span>
                {errors.beneficiarioParentesco && <span className="error-message">{errors.beneficiarioParentesco}</span>}
              </label>

              <input
                type="text"
                id="beneficiarioApellidoPaterno"
                placeholder="5537335748"
                value={formData.beneficiarioApellidoPaterno || ''}
                onChange={(e) => updateFormData({ beneficiarioApellidoPaterno: e.target.value })}
                className={errors.beneficiarioApellidoPaterno ? 'error' : ''}
              />
              <label htmlFor="beneficiarioApellidoPaterno">
                Beneficiario apellido paterno<span className="required">*</span>
                {errors.beneficiarioApellidoPaterno && <span className="error-message">{errors.beneficiarioApellidoPaterno}</span>}
              </label>
            </form>
          </div>
          <div className="col-md-6 d-flex align-items-end page-2-form6-B">
            <div>
              <form>
                <input
                  type="text"
                  id="beneficiarioApellidoMaterno"
                  placeholder="5537335748"
                  value={formData.beneficiarioApellidoMaterno || ''}
                  onChange={(e) => updateFormData({ beneficiarioApellidoMaterno: e.target.value })}
                />
                <label htmlFor="beneficiarioApellidoMaterno">
                  Beneficiario apellido materno
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>

      <button 
        className="prev-btn" 
        onClick={onPrev} 
        disabled={isSubmitting}
      >
        <i className="fas fa-arrow-left"></i> Previous
      </button>
      <button 
        className="next-btn" 
        onClick={(e) => {
          e.preventDefault();
          void onNext();
        }}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Enviando...
          </>
        ) : (
          <>
            Submit <i className="fas fa-check"></i>
          </>
        )}
      </button>
    </div>
  );
}
