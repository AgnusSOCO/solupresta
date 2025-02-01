import type { ReactElement } from 'react';
import { useFormContext } from '../../contexts/FormContext';

interface EmploymentFormProps {
  onNext: () => void;
  onPrev: () => void;
}

export function EmploymentForm({ onNext, onPrev }: EmploymentFormProps): ReactElement {
  const { formData, updateFormData, errors } = useFormContext();
  
  return (
    <div className="row form-content fomr2-page1" id="form2">
      <div className="form2-body">
        <div className="form-heading">
          <p>
            <span style={{ color: 'white', paddingRight: '5px' }}>2.</span>
            Datos de la empresa en la que labora la o el derechohabiente
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 page-1-form2-A">
          <form>
            <input
              type="text"
              id="nombreEmpresa"
              placeholder="Kreattive"
              value={formData.nombreEmpresa || ''}
              onChange={(e) => updateFormData({ nombreEmpresa: e.target.value })}
              className={errors.nombreEmpresa ? 'error' : ''}
              required
            />
            <label htmlFor="nombreEmpresa">
              Nombre de la empresa <span className="required">*</span>
              {errors.nombreEmpresa && <span className="error-message">{errors.nombreEmpresa}</span>}
            </label>
          </form>
        </div>
        <div className="col-md-6 page-1-form2-B">
          <form>
            <input
              type="text"
              id="telefonoEmpresa"
              placeholder="5537334748"
              value={formData.telefonoEmpresa || ''}
              onChange={(e) => updateFormData({ telefonoEmpresa: e.target.value })}
              className={errors.telefonoEmpresa ? 'error' : ''}
              required
            />
            <label htmlFor="telefonoEmpresa">
              Teléfono de la empresa donde trabaja <span className="required">*</span>
              {errors.telefonoEmpresa && <span className="error-message">{errors.telefonoEmpresa}</span>}
            </label>
          </form>
        </div>
      </div>

      <div className="row fomr3-page1" id="form-three-child">
        <div className="form3-body">
          <div className="form-heading">
            <p>
              <span style={{ color: 'white', paddingRight: '5px' }}>3.</span>
              Datos de la vivienda a mejorar
            </p>
          </div>
        </div>
        <div className="col-md-6 page-1-form3-A">
          <form>
            <label style={{ marginBlock: '10px' }} htmlFor="vivienda">
              La vivienda para mejorar es
            </label>
            <div className="custom-select-wrapper">
              <select
                id="tipoVivienda"
                value={formData.tipoVivienda || 'propia'}
                onChange={(e) => updateFormData({ tipoVivienda: e.target.value })}
              >
                <option value="propia">Propia</option>
                <option value="vivienda">vivienda</option>
              </select>
              <i className="fa-solid fa-caret-down custom-dropdown-icon"></i>
            </div>
            <input
              type="text"
              id="calle"
              placeholder="Tres"
              value={formData.calle || ''}
              onChange={(e) => updateFormData({ calle: e.target.value })}
              className={errors.calle ? 'error' : ''}
              required
            />
            <label htmlFor="calle">
              Calle <span className="required">*</span>
              {errors.calle && <span className="error-message">{errors.calle}</span>}
            </label>

            <div className="inner-form-number">
              <div className="inner1-number">
                <input
                  type="text"
                  id="numeroExterior"
                  placeholder="705"
                  value={formData.numeroExterior || ''}
                  onChange={(e) => updateFormData({ numeroExterior: e.target.value })}
                  className={errors.numeroExterior ? 'error' : ''}
                />
                <label htmlFor="numeroExterior">
                  Número exterior <span className="required">*</span>
                  {errors.numeroExterior && <span className="error-message">{errors.numeroExterior}</span>}
                </label>
              </div>
              <div className="inner2-number">
                <input
                  type="text"
                  id="numeroInterior"
                  placeholder="1080"
                  value={formData.numeroInterior || ''}
                  onChange={(e) => updateFormData({ numeroInterior: e.target.value })}
                />
                <label htmlFor="numeroInterior">
                  Número interior
                </label>
              </div>
            </div>

            <div className="inner-form-batch">
              <div className="inner1-number">
                <input
                  type="text"
                  id="lote"
                  placeholder="B16"
                  value={formData.lote || ''}
                  onChange={(e) => updateFormData({ lote: e.target.value })}
                />
                <label htmlFor="lote">Lote</label>
              </div>
              <div className="inner2-number">
                <input
                  type="text"
                  id="manzana"
                  placeholder="A2"
                  value={formData.manzana || ''}
                  onChange={(e) => updateFormData({ manzana: e.target.value })}
                />
                <label htmlFor="manzana">Manzana</label>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6 page-1-form3-B">
          <form>
            <div className="inner-form-Entity">
              <div className="inner1-number">
                <input
                  type="text"
                  id="entidad"
                  placeholder="Cuernavaca"
                  value={formData.entidad || ''}
                  onChange={(e) => updateFormData({ entidad: e.target.value })}
                  className={errors.entidad ? 'error' : ''}
                />
                <label htmlFor="entidad">
                  Entidad <span className="required">*</span>
                  {errors.entidad && <span className="error-message">{errors.entidad}</span>}
                </label>
              </div>
              <div className="inner2-number">
                <input
                  type="text"
                  id="codigoPostal"
                  placeholder="62440"
                  value={formData.codigoPostal || ''}
                  onChange={(e) => updateFormData({ codigoPostal: e.target.value })}
                  className={errors.codigoPostal ? 'error' : ''}
                />
                <label htmlFor="codigoPostal">
                  Código Postal <span className="required">*</span>
                  {errors.codigoPostal && <span className="error-message">{errors.codigoPostal}</span>}
                </label>
              </div>
            </div>
            <input
              type="text"
              id="municipio"
              placeholder="Cuernavaca"
              value={formData.municipio || ''}
              onChange={(e) => updateFormData({ municipio: e.target.value })}
              className={errors.municipio ? 'error' : ''}
            />
            <label htmlFor="municipio">
              Municipio <span className="required">*</span>
              {errors.municipio && <span className="error-message">{errors.municipio}</span>}
            </label>
            <input
              type="text"
              id="folioAcuse"
              placeholder="123456"
              value={formData.folioAcuse || ''}
              onChange={(e) => updateFormData({ folioAcuse: e.target.value })}
            />
          </form>
        </div>
      </div>
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
