import React, { useState, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { authApi } from '../lib/api';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { Mail, Lock, User, Building2, AlertCircle } from 'lucide-react';

type UserRole = 'customer' | 'employee' | 'admin';

interface LoginForm {
  email: string;
  password: string;
  role: UserRole;
}

export function Login(): ReactElement {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
    role: 'customer'
  });

  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      setIsLoading(true);
      await authApi.login({
        email: formData.email,
        password: formData.password
      });
      window.location.href = '/';
    } catch (err) {
      setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-primary-navy/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative">
          <div className="max-w-md mx-auto">
            {/* Login Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm backdrop-filter">
              {/* Logo */}
              <div className="text-center mb-8">
                <img 
                  src="/assets/images/logos/mobile-logo.png" 
                  alt="SoluPresta" 
                  className="h-12 mx-auto mb-6 opacity-0 animate-fade-in"
                  style={{ animationDelay: '150ms' }}
                />
                <h1 className="text-2xl font-bold text-primary-navy opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
                  Iniciar Sesión
                </h1>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center gap-3 opacity-0 animate-fade-in" role="alert">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-cyan focus:border-transparent transition-all"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Contraseña
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-cyan focus:border-transparent transition-all"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Usuario
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-cyan focus:border-transparent transition-all appearance-none"
                      required
                    >
                      <option value="customer">Cliente</option>
                      <option value="employee">Empleado</option>
                      <option value="admin">Administrador</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-primary-cyan border-gray-300 rounded focus:ring-primary-cyan"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Recordar sesión
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-primary-cyan hover:text-primary-navy transition-colors">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={formData.email === '' || formData.password === '' || isLoading}
                  className="w-full flex items-center justify-center px-6 py-3 bg-primary-cyan text-white font-semibold rounded-lg shadow-sm hover:bg-primary-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-cyan transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Iniciando sesión...
                    </>
                  ) : (
                    <>
                      Iniciar Sesión
                      <svg 
                        className="ml-2 -mr-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Register Link */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">¿No tienes una cuenta?</p>
                <Link 
                  to="/register" 
                  className="mt-3 inline-flex items-center justify-center px-6 py-3 border border-primary-cyan text-primary-cyan font-semibold rounded-lg hover:bg-primary-cyan hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-cyan transition-all w-full group"
                >
                  <User className="w-5 h-5 mr-2" />
                  Crear Cuenta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}