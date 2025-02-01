import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const benefits = [
  {
    icon: '⚡',
    title: 'Proceso Rápido',
    description: 'Aprobación en 24 horas',
    details: ['Sin largas esperas', 'Respuesta inmediata', 'Proceso optimizado']
  },
  {
    icon: '🔒',
    title: 'Seguridad Total',
    description: 'Datos protegidos',
    details: ['Encriptación avanzada', 'Certificado SSL', 'Protocolos bancarios']
  },
  {
    icon: '💎',
    title: 'Mejores Tasas',
    description: 'Intereses competitivos',
    details: ['Desde 15.99% anual', 'Sin costos ocultos', 'Transparencia total']
  },
  {
    icon: '🤝',
    title: 'Atención Personalizada',
    description: 'Soporte en todo momento',
    details: ['Asesores expertos', 'Soporte multicanal', 'Respuesta rápida']
  }
];

export function Benefits() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
      }}
      className="text-center"
    >
      <h3 
        style={{
          opacity: spring({
            frame,
            fps,
            config: { damping: 80 },
          }),
        }}
        className="text-4xl font-bold text-white mb-4"
      >
        ¿Por qué elegirnos?
      </h3>

      <p
        style={{
          opacity: spring({
            frame: frame + 10,
            fps,
            config: { damping: 80 },
          }),
        }}
        className="text-xl text-white/80 mb-12"
      >
        Descubre las ventajas de confiar en SoluPresta
      </p>

      <div className="grid grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            style={{
              opacity: spring({
                frame: frame - index * 8,
                fps,
                config: { damping: 80 },
              }),
              transform: `scale(${spring({
                frame: frame - index * 8,
                fps,
                config: { damping: 80 },
              })})`,
            }}
            className="bg-white/20 backdrop-blur-md rounded-2xl p-8"
          >
            <div className="text-6xl mb-4">{benefit.icon}</div>
            <h4 className="text-2xl font-bold text-white mb-2">{benefit.title}</h4>
            <p className="text-lg text-white/90 mb-4">{benefit.description}</p>
            <div className="space-y-2">
              {benefit.details.map((detail, detailIndex) => (
                <p
                  key={detail}
                  style={{
                    opacity: spring({
                      frame: frame - (index * 8 + detailIndex * 4),
                      fps,
                      config: { damping: 80 },
                    }),
                  }}
                  className="text-sm text-white/70"
                >
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}