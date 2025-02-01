import { createContext, useContext, useState, type ReactNode } from 'react';
import { loanApi } from '../lib/api';

interface FormData {
  // Personal Info
  nombre?: string;
  apellidoPaterno?: string;
  apellidoMaterno?: string;
  tipoIdentificacion?: string;
  numeroIdentificacion?: string;
  fechaValidez?: string;
  nss?: string;
  curp?: string;
  rfc?: string;
  telefono?: string;
  correo?: string;
  genero?: string;
  estadoCivil?: string;

  // Employment
  nombreEmpresa?: string;
  telefonoEmpresa?: string;
  tipoVivienda?: string;
  calle?: string;
  numeroExterior?: string;
  numeroInterior?: string;
  lote?: string;
  manzana?: string;
  entidad?: string;
  codigoPostal?: string;
  municipio?: string;
  folioAcuse?: string;

  // Credit Data
  montoCredito?: string;
  plazoSolicitado?: string;
  porcentajeManoObra?: string;
  porcentajeTitulacion?: string;
  tipoMejoravit?: string;
  cesi?: string;
  cuentaClabe?: string;

  // Family References
  referencia1Nombre?: string;
  referencia1Telefono?: string;
  referencia1Celular?: string;
  referencia2Nombre?: string;
  referencia2Telefono?: string;
  referencia2Celular?: string;
  beneficiarioParentesco?: string;
  beneficiarioApellidoPaterno?: string;
  beneficiarioApellidoMaterno?: string;
}

interface FormContextType {
  formData: FormData;
  updateFormData: (newData: Partial<FormData>) => void;
  validateStep: (step: number) => boolean;
  submitForm: () => Promise<void>;
  errors: Record<string, string>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}

interface FormProviderProps {
  children: ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    const validateEmail = (email: string): boolean => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone: string): boolean => {
      return /^\d{10}$/.test(phone);
    };

    const validateAmount = (amount: string): boolean => {
      const num = parseFloat(amount);
      return !isNaN(num) && num >= 1000 && num <= 1000000;
    };

    switch (step) {
      case 1: // Personal Info
        if (!formData.nombre?.trim()) newErrors.nombre = 'Campo requerido';
        if (!formData.apellidoPaterno?.trim()) newErrors.apellidoPaterno = 'Campo requerido';
        if (!formData.apellidoMaterno?.trim()) newErrors.apellidoMaterno = 'Campo requerido';
        
        if (!formData.nss?.trim()) newErrors.nss = 'Campo requerido';
        else if (!/^\d{11}$/.test(formData.nss)) 
          newErrors.nss = 'NSS debe tener 11 dígitos';
        
        if (!formData.curp?.trim()) newErrors.curp = 'Campo requerido';
        else if (!/^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]\d$/.test(formData.curp)) 
          newErrors.curp = 'CURP inválido';
        
        if (!formData.rfc?.trim()) newErrors.rfc = 'Campo requerido';
        else if (!/^[A-Z]{4}\d{6}[A-Z0-9]{3}$/.test(formData.rfc)) 
          newErrors.rfc = 'RFC inválido';
        
        if (formData.correo && !validateEmail(formData.correo))
          newErrors.correo = 'Correo electrónico inválido';
        
        if (formData.telefono && !validatePhone(formData.telefono))
          newErrors.telefono = 'Teléfono debe tener 10 dígitos';
        break;

      case 2: // Employment & Housing
        if (!formData.nombreEmpresa?.trim()) newErrors.nombreEmpresa = 'Campo requerido';
        
        if (!formData.telefonoEmpresa?.trim()) newErrors.telefonoEmpresa = 'Campo requerido';
        else if (!validatePhone(formData.telefonoEmpresa))
          newErrors.telefonoEmpresa = 'Teléfono debe tener 10 dígitos';
        
        if (!formData.calle?.trim()) newErrors.calle = 'Campo requerido';
        if (!formData.numeroExterior?.trim()) newErrors.numeroExterior = 'Campo requerido';
        if (!formData.entidad?.trim()) newErrors.entidad = 'Campo requerido';
        
        if (!formData.codigoPostal?.trim()) newErrors.codigoPostal = 'Campo requerido';
        else if (!/^\d{5}$/.test(formData.codigoPostal))
          newErrors.codigoPostal = 'Código postal debe tener 5 dígitos';
        
        if (!formData.municipio?.trim()) newErrors.municipio = 'Campo requerido';
        break;

      case 3: // Credit Data
        if (!formData.montoCredito) newErrors.montoCredito = 'Campo requerido';
        else if (!validateAmount(formData.montoCredito))
          newErrors.montoCredito = 'Monto debe estar entre $1,000 y $1,000,000';
        
        if (!formData.plazoSolicitado) newErrors.plazoSolicitado = 'Campo requerido';
        else {
          const plazo = parseInt(formData.plazoSolicitado);
          if (isNaN(plazo) || plazo < 1 || plazo > 5)
            newErrors.plazoSolicitado = 'Plazo debe estar entre 1 y 5 años';
        }
        
        if (!formData.tipoMejoravit?.trim()) newErrors.tipoMejoravit = 'Campo requerido';
        if (!formData.cesi?.trim()) newErrors.cesi = 'Campo requerido';
        
        if (formData.cuentaClabe && !/^\d{18}$/.test(formData.cuentaClabe))
          newErrors.cuentaClabe = 'CLABE debe tener 18 dígitos';
        break;

      case 4: // Family References
        if (!formData.referencia1Nombre?.trim()) newErrors.referencia1Nombre = 'Campo requerido';
        
        if (!formData.referencia1Telefono?.trim()) newErrors.referencia1Telefono = 'Campo requerido';
        else if (!validatePhone(formData.referencia1Telefono))
          newErrors.referencia1Telefono = 'Teléfono debe tener 10 dígitos';
        
        if (formData.referencia1Celular && !validatePhone(formData.referencia1Celular))
          newErrors.referencia1Celular = 'Celular debe tener 10 dígitos';
        
        if (formData.referencia2Telefono && !validatePhone(formData.referencia2Telefono))
          newErrors.referencia2Telefono = 'Teléfono debe tener 10 dígitos';
        
        if (formData.referencia2Celular && !validatePhone(formData.referencia2Celular))
          newErrors.referencia2Celular = 'Celular debe tener 10 dígitos';
        
        if (!formData.beneficiarioParentesco?.trim()) newErrors.beneficiarioParentesco = 'Campo requerido';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    if (!validateStep(4)) {
      throw new Error('Form validation failed');
    }

    await loanApi.submitApplication({
        nombre: formData.nombre || '',
        apellido_paterno: formData.apellidoPaterno || '',
        apellido_materno: formData.apellidoMaterno || '',
        nss: formData.nss || '',
        curp: formData.curp || '',
        rfc: formData.rfc || '',
        estado_civil: formData.estadoCivil || '',
        nombre_empresa: formData.nombreEmpresa || '',
        telefono_empresa: formData.telefonoEmpresa || '',
        calle: formData.calle || '',
        numero_exterior: formData.numeroExterior || '',
        entidad: formData.entidad || '',
        codigo_postal: formData.codigoPostal || '',
        municipio: formData.municipio || '',
        monto_credito: parseFloat(formData.montoCredito || '0'),
        plazo_solicitado: parseInt(formData.plazoSolicitado || '0', 10),
        tipo_mejoravit: formData.tipoMejoravit || '',
        cesi: formData.cesi || '',
        referencia1_nombre: formData.referencia1Nombre || '',
        referencia1_telefono: formData.referencia1Telefono || '',
        referencia1_celular: formData.referencia1Celular,
        referencia2_nombre: formData.referencia2Nombre,
        referencia2_telefono: formData.referencia2Telefono,
        referencia2_celular: formData.referencia2Celular,
        beneficiario_parentesco: formData.beneficiarioParentesco || '',
        beneficiario_apellido_paterno: formData.beneficiarioApellidoPaterno || '',
        beneficiario_apellido_materno: formData.beneficiarioApellidoMaterno
      });
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, validateStep, submitForm, errors }}>
      {children}
    </FormContext.Provider>
  );
}
