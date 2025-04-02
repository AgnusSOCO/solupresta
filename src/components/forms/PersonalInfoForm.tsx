import type { ReactElement } from 'react';
import { useFormContext } from '../../contexts/FormContext';

interface PersonalInfoFormProps {
  onNext: () => void;
}

export function PersonalInfoForm({ onNext }: PersonalInfoFormProps): ReactElement {
  const { formData, updateFormData, errors } = useFormContext();

  return (
    <div className="form1-body form-content active" id="form1">
      <div className="form-heading">
        <h2 className="text-2xl font-semibold text-primary-navy mb-6">
          Datos de identificación
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          <span className="text-red-500">*</span> Campos obligatorios
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
              Nombres <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Carlos Roberto"
              value={formData.nombre || ''}
              onChange={(e) => updateFormData({ nombre: e.target.value })}
              className={`form-input w-full rounded-lg border ${errors.nombre ? 'border-red-500' : 'border-gray-300'} focus:border-primary-cyan focus:ring focus:ring-primary-cyan/20`}
            />
            {errors.nombre && <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>}
          </div>

          <div>
            <label htmlFor="apellidoPaterno" className="block text-sm font-medium text-gray-700 mb-1">
              Apellido Paterno <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="apellidoPaterno"
              placeholder="Becerra"
              value={formData.apellidoPaterno || ''}
              onChange={(e) => updateFormData({ apellidoPaterno: e.target.value })}
              className={`form-input w-full rounded-lg border ${errors.apellidoPaterno ? 'border-red-500' : 'border-gray-300'} focus:border-primary-cyan focus:ring focus:ring-primary-cyan/20`}
            />
            {errors.apellidoPaterno && <p className="mt-1 text-sm text-red-500">{errors.apellidoPaterno}</p>}
          </div>

          <div>
            <label htmlFor="apellidoMaterno" className="block text-sm font-medium text-gray-700 mb-1">
              Apellido Materno <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="apellidoMaterno"
              placeholder="Tella"
              value={formData.apellidoMaterno || ''}
              onChange={(e) => updateFormData({ apellidoMaterno: e.target.value })}
              className={`form-input w-full rounded-lg border ${errors.apellidoMaterno ? 'border-red-500' : 'border-gray-300'} focus:border-primary-cyan focus:ring focus:ring-primary-cyan/20`}
            />
            {errors.apellidoMaterno && <p className="mt-1 text-sm text-red-500">{errors.apellidoMaterno}</p>}
          </div>

          <div>
            <label htmlFor="tipoIdentificacion" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Identificación
            </label>
            <select
              id="tipoIdentificacion"
              value={formData.tipoIdentificacion || ''}
              onChange={(e) => updateFormData({ tipoIdentificacion: e.target.value })}
              className="form-select w-full rounded-lg border border-gray-300 focus:border-primary-cyan focus:ring focus:ring-primary-cyan/20"
            >
              <option value="">Seleccione tipo</option>
              <option value="INE">INE</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="Cédula">Cédula Profesional</option>
            </select>
          </div>

          <div>
            <label htmlFor="numeroIdentificacion" className="block text-sm font-medium text-gray-700 mb-1">
              Número de Identificación
            </label>
            <input
              type="text"
              id="numeroIdentificacion"
              placeholder="0331502679145"
              value={formData.numeroIdentificacion || ''}
              onChange={(e) => updateFormData({ numeroIdentificacion: e.target.value })}
              className="form-input w-full rounded-lg border border-gray-300 focus:border-primary-cyan focus:ring focus:ring-primary-cyan/20"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="nss" className="block text-sm font-medium text-gray-700 mb-1">
              NSS <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nss"
              placeholder="81119000989"
              value={formData.nss || ''}
              onChange={(e) => updateFormData({ nss: e.target.value })}
              className={`form-input w-full rounded-lg border ${errors.nss ? 'border-red-500' : 'border-gray-300'} focus:border-primary-cyan focus:ring focus:ring-primary-cyan/20`}
            />
            {errors.nss && <p className="mt-1 text-sm text-red-500">{errors.nss}</p>}
          </div>

          <div>
            <label htmlFor="curp" className="block text-sm font-medium text-gray-700 mb-1">
              CURP <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="curp"
              placeholder="BECT900123MCYNG09"
              value={formData.curp || ''}
              onChange={(e) => updateFormData({ curp: e.target.value })}
              className={`form-input w-full rounded-lg border ${errors.curp ? 'border-red-500' : 'border-gray-300'} focus:border-primary-cyan focus:ring focus:ring-primary-cyan/20`}
            />
            {errors.curp && <p className="mt-1 text-sm text-red-500">{errors.curp}</p>}
          </div>

          <div>
            <label htmlFor="rfc" className="block text-sm font-medium text-gray-700 mb-1">
              RFC <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="rfc"
              placeholder="BETC900721400"
              value={formData.rfc || ''}
              onChange={(e) => updateFormData({ rfc: e.target.value })}
              className={`form-input w-full rounded-lg border ${errors.rfc ? 'border-red-500' : 'border-gray-300'} focus:border-primary-cyan focus:ring focus:ring-primary-cyan/20`}
            />
            {errors.rfc && <p className="mt-1 text-sm text-red-500">{errors.rfc}</p>}
          </div>

          <div>
            <label htmlFor="genero" className="block text-sm font-medium text-gray-700 mb-1">
              Género
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => updateFormData({ genero: 'masculino' })}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  formData.genero === 'masculino'
                    ? 'bg-primary-cyan text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Masculino
              </button>
              <button
                type="button"
                onClick={() => updateFormData({ genero: 'femenino' })}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  formData.genero === 'femenino'
                    ? 'bg-primary-cyan text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Femenino
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="estadoCivil" className="block text-sm font-medium text-gray-700 mb-1">
              Estado Civil
            </label>
            <select
              id="estadoCivil"
              value={formData.estadoCivil || ''}
              onChange={(e) => updateFormData({ estadoCivil: e.target.value })}
              className="form-select w-full rounded-lg border border-gray-300 focus:border-primary-cyan focus:ring focus:ring-primary-cyan/20"
            >
              <option value="">Seleccione estado civil</option>
              <option value="soltero">Soltero/a</option>
              <option value="casado">Casado/a</option>
              <option value="divorciado">Divorciado/a</option>
              <option value="viudo">Viudo/a</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center px-6 py-3 bg-primary-cyan text-white font-semibold rounded-lg shadow-sm hover:bg-primary-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-cyan transition-colors"
        >
          Siguiente
          <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}