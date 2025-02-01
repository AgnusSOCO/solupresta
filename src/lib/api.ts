import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoanApplicationData {
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  nss: string;
  curp: string;
  rfc: string;
  estado_civil: string;
  nombre_empresa: string;
  telefono_empresa: string;
  calle: string;
  numero_exterior: string;
  entidad: string;
  codigo_postal: string;
  municipio: string;
  monto_credito: number;
  plazo_solicitado: number;
  tipo_mejoravit: string;
  cesi: string;
  referencia1_nombre: string;
  referencia1_telefono: string;
  referencia1_celular?: string;
  referencia2_nombre?: string;
  referencia2_telefono?: string;
  referencia2_celular?: string;
  beneficiario_parentesco: string;
  beneficiario_apellido_paterno: string;
  beneficiario_apellido_materno?: string;
}

export const authApi = {
  login: async (credentials: LoginCredentials) => {
    const response = await api.post('/token', new URLSearchParams({
      username: credentials.email,
      password: credentials.password,
    }));
    const { access_token } = response.data;
    localStorage.setItem('token', access_token);
    return response.data;
  },
  
  logout: () => {
    localStorage.removeItem('token');
  },
  
  register: async (userData: LoginCredentials & { nombre: string; apellido_paterno: string }) => {
    const response = await api.post('/users/', userData);
    return response.data;
  },
};

export const loanApi = {
  submitApplication: async (applicationData: LoanApplicationData) => {
    const response = await api.post('/loan-applications/', applicationData);
    return response.data;
  },
  
  getUserApplications: async () => {
    const response = await api.get('/loan-applications/user/me');
    return response.data;
  },
  
  getAllApplications: async () => {
    const response = await api.get('/loan-applications/');
    return response.data;
  },
};
