import { type ReactElement, useEffect } from 'react';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';

export function LoanApplication(): ReactElement {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-navy mb-4 opacity-0 animate-fade-in">
            Solicita tu Préstamo
          </h1>
          <p className="text-lg text-gray-600 opacity-0 animate-fade-in" style={{ animationDelay: '150ms' }}>
            Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        {/* Typeform Container */}
        <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-navy/5 rounded-full blur-3xl" />
          </div>

          {/* Typeform Embed */}
          <div 
            data-tf-live="01JJZDR3F57PJ38QNBS9P5RQWD"
            className="relative min-h-[600px] w-full"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}