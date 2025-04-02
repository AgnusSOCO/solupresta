import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { Contact } from './pages/Contact'
import { LoanApplication } from './pages/LoanApplication'
import { ApplicationSuccess } from './pages/ApplicationSuccess'
import { BlogPost1 } from './pages/BlogPost1'
import { BlogPost2 } from './pages/BlogPost2'
import { BlogPost3 } from './pages/BlogPost3'
import { HomeWork } from './pages/HomeWork'
import { Login } from './pages/Login'
import { FormProvider } from './contexts/FormContext'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <FormProvider>
        <div className="min-h-screen w-full relative overflow-hidden">
          {/* Global Animated Background */}
          <div className="fixed inset-0 pointer-events-none">
            {/* Primary Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
            
            {/* Animated Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Large Primary Orbs */}
              <div className="absolute -top-1/4 left-1/4 w-[1000px] h-[1000px] bg-primary-cyan/3 rounded-full blur-[120px] mix-blend-multiply animate-float" />
              <div className="absolute -bottom-1/4 right-1/4 w-[1200px] h-[1200px] bg-primary-navy/3 rounded-full blur-[130px] mix-blend-multiply animate-float-delayed" />
              
              {/* Medium Secondary Orbs */}
              <div className="absolute top-1/3 -right-1/4 w-[800px] h-[800px] bg-primary-cyan/2 rounded-full blur-[100px] mix-blend-multiply animate-float-slow" />
              <div className="absolute bottom-1/4 -left-1/4 w-[900px] h-[900px] bg-primary-navy/2 rounded-full blur-[110px] mix-blend-multiply animate-float-delayed-slow" />
              
              {/* Small Accent Orbs */}
              <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary-cyan/2 rounded-full blur-[80px] mix-blend-multiply animate-pulse-slow" />
              <div className="absolute bottom-1/3 right-1/2 w-[500px] h-[500px] bg-primary-navy/2 rounded-full blur-[90px] mix-blend-multiply animate-pulse-delayed" />
            </div>

            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.015]" />
          </div>

          {/* Content Container */}
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/loan-application" element={<LoanApplication />} />
              <Route path="/application-success" element={<ApplicationSuccess />} />
              <Route path="/blog/1" element={<BlogPost1 />} />
              <Route path="/blog/2" element={<BlogPost2 />} />
              <Route path="/blog/3" element={<BlogPost3 />} />
              <Route path="/home-work" element={<HomeWork />} />
              <Route path="/login" element={<Login />} />
              {/* Add a catch-all route for 404 */}
              <Route path="*" element={
                <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
                  <h1 className="text-4xl font-bold text-primary-navy mb-4">Página no encontrada</h1>
                  <p className="text-xl text-gray-600 mb-8">Lo sentimos, la página que buscas no existe.</p>
                  <Link 
                    to="/"
                    className="inline-flex items-center bg-primary-cyan hover:bg-primary-navy text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Volver al inicio
                  </Link>
                </div>
              } />
            </Routes>
          </div>
        </div>
      </FormProvider>
    </BrowserRouter>
  )
}

export default App