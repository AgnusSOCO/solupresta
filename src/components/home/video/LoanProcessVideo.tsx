import { AbsoluteFill, Sequence, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { Logo } from './Logo';
import { Step } from './Step';
import { Title } from './Title';
import { Benefits } from './Benefits';
import { Outro } from './Outro';

export function LoanProcessVideo() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="bg-gradient-to-br from-primary-navy to-primary-cyan">
      {/* Logo Animation - Extended to 120 frames */}
      <Sequence from={0} durationInFrames={120}>
        <Logo />
      </Sequence>

      {/* Welcome Title - Extended to 120 frames */}
      <Sequence from={90} durationInFrames={120}>
        <Title 
          text="¡Bienvenido a SoluPresta!" 
          subtitle="Tu aliado financiero para mejorar tu hogar"
          description="Más de 10 años ayudando a familias mexicanas a hacer realidad sus proyectos"
        />
      </Sequence>

      {/* Main Title - Extended to 120 frames */}
      <Sequence from={180} durationInFrames={120}>
        <Title 
          text="Obtén tu préstamo en 3 simples pasos" 
          subtitle="Proceso rápido, seguro y sin complicaciones"
          description="Préstamos desde $5,000 hasta $500,000 MXN"
        />
      </Sequence>

      {/* Step 1: Application - Extended to 150 frames */}
      <Sequence from={270} durationInFrames={150}>
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

      {/* Step 2: Documents - Extended to 150 frames */}
      <Sequence from={390} durationInFrames={150}>
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

      {/* Step 3: Money - Extended to 150 frames */}
      <Sequence from={510} durationInFrames={150}>
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

      {/* Benefits Section - Extended to 150 frames */}
      <Sequence from={630} durationInFrames={150}>
        <Benefits />
      </Sequence>

      {/* Outro - Extended to 90 frames */}
      <Sequence from={750} durationInFrames={90}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
}