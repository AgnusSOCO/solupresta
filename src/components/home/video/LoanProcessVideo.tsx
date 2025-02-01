import { AbsoluteFill, Sequence, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Logo } from './Logo';
import { Step } from './Step';
import { Title } from './Title';
import { Benefits } from './Benefits';
import { Outro } from './Outro';

export function LoanProcessVideo() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Add spacing between sequences for smoother transitions
  const SPACING = 30;

  // Calculate sequence timings with spacing
  const sequences = {
    logo: { start: 0, duration: 150 },
    welcome: { start: 150 + SPACING, duration: 180 },
    mainTitle: { start: 330 + SPACING * 2, duration: 180 },
    step1: { start: 510 + SPACING * 3, duration: 180 },
    step2: { start: 690 + SPACING * 4, duration: 180 },
    step3: { start: 870 + SPACING * 5, duration: 180 },
    benefits: { start: 1050 + SPACING * 6, duration: 180 },
    outro: { start: 1230 + SPACING * 7, duration: 120 }
  };

  return (
    <AbsoluteFill className="bg-gradient-to-br from-primary-navy via-primary-navy/90 to-primary-cyan">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-1/4 left-1/4 w-[1000px] h-[1000px] bg-primary-cyan/3 rounded-full blur-[120px] mix-blend-screen"
          style={{
            transform: `translate(${Math.sin(frame / 120) * 50}px, ${Math.cos(frame / 120) * 50}px)`,
          }}
        />
        <div 
          className="absolute -bottom-1/4 right-1/4 w-[1200px] h-[1200px] bg-primary-navy/3 rounded-full blur-[130px] mix-blend-screen"
          style={{
            transform: `translate(${Math.cos(frame / 120) * 50}px, ${Math.sin(frame / 120) * 50}px)`,
          }}
        />
      </div>

      {/* Logo Animation */}
      <Sequence from={sequences.logo.start} durationInFrames={sequences.logo.duration}>
        <Logo />
      </Sequence>

      {/* Welcome Title */}
      <Sequence from={sequences.welcome.start} durationInFrames={sequences.welcome.duration}>
        <Title 
          text="¡Bienvenido a SoluPresta!" 
          subtitle="Tu aliado financiero para mejorar tu hogar"
          description="Más de 10 años ayudando a familias mexicanas a hacer realidad sus proyectos"
        />
      </Sequence>

      {/* Main Title */}
      <Sequence from={sequences.mainTitle.start} durationInFrames={sequences.mainTitle.duration}>
        <Title 
          text="Obtén tu préstamo en 3 simples pasos" 
          subtitle="Proceso rápido, seguro y sin complicaciones"
          description="Préstamos desde $5,000 hasta $500,000 MXN"
        />
      </Sequence>

      {/* Step 1: Application */}
      <Sequence from={sequences.step1.start} durationInFrames={sequences.step1.duration}>
        <Step
          number={1}
          title="Solicitud en línea"
          description="Completa el formulario con tus datos básicos desde la comodidad de tu hogar"
          icon="📝"
          details={[
            "Proceso 100% en línea",
            "Sin papeleo inicial",
            "Formulario intuitivo",
            "Disponible 24/7",
            "Asistencia en línea"
          ]}
          additionalInfo={[
            "Tiempo estimado: 15 minutos",
            "Respuesta inicial inmediata",
            "Guía paso a paso"
          ]}
        />
      </Sequence>

      {/* Step 2: Documents */}
      <Sequence from={sequences.step2.start} durationInFrames={sequences.step2.duration}>
        <Step
          number={2}
          title="Envía tus documentos"
          description="Sube tus documentos de manera segura a través de nuestra plataforma"
          icon="📄"
          details={[
            "Identificación oficial vigente",
            "Comprobante de domicilio reciente",
            "Comprobante de ingresos",
            "Estado de cuenta bancario",
            "CURP y RFC"
          ]}
          additionalInfo={[
            "Fotos o escaneos claros",
            "Documentos no mayores a 3 meses",
            "Verificación rápida"
          ]}
        />
      </Sequence>

      {/* Step 3: Money */}
      <Sequence from={sequences.step3.start} durationInFrames={sequences.step3.duration}>
        <Step
          number={3}
          title="¡Recibe tu dinero!"
          description="Aprobación rápida y depósito directo a tu cuenta"
          icon="💰"
          details={[
            "Aprobación en 24 horas",
            "Depósito inmediato",
            "Sin comisiones ocultas",
            "Tasas competitivas",
            "Plazos flexibles"
          ]}
          additionalInfo={[
            "Transferencia bancaria segura",
            "Confirmación por SMS y email",
            "Tabla de amortización detallada"
          ]}
        />
      </Sequence>

      {/* Benefits Section */}
      <Sequence from={sequences.benefits.start} durationInFrames={sequences.benefits.duration}>
        <Benefits />
      </Sequence>

      {/* Outro */}
      <Sequence from={sequences.outro.start} durationInFrames={sequences.outro.duration}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
}
