import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
  additionalInfo?: string[];
}

export function Step({ number, title, description, icon, details, additionalInfo }: StepProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: {
      damping: 80,
      stiffness: 150,
    },
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        width: '90%',
        textAlign: 'center',
      }}
      className="bg-white/20 backdrop-blur-md rounded-2xl p-12"
    >
      <div className="text-8xl mb-6">{icon}</div>
      <h3 className="text-4xl font-bold text-white mb-4">
        Paso {number}: {title}
      </h3>
      <p className="text-2xl text-white/90 mb-8">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-white mb-4">Requisitos</h4>
          {details.map((detail, index) => (
            <div
              key={detail}
              style={{
                opacity: spring({
                  frame: frame - index * 8,
                  fps,
                  config: { damping: 80 },
                }),
                transform: `translateX(${spring({
                  frame: frame - index * 8,
                  fps,
                  config: { damping: 80 },
                }) * -20}px)`,
              }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
            >
              <p className="text-lg text-white">{detail}</p>
            </div>
          ))}
        </div>

        {additionalInfo && (
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-white mb-4">Información Adicional</h4>
            {additionalInfo.map((info, index) => (
              <div
                key={info}
                style={{
                  opacity: spring({
                    frame: frame - (index + details.length) * 8,
                    fps,
                    config: { damping: 80 },
                  }),
                  transform: `translateX(${spring({
                    frame: frame - (index + details.length) * 8,
                    fps,
                    config: { damping: 80 },
                  }) * 20}px)`,
                }}
                className="bg-primary-cyan/10 backdrop-blur-sm rounded-xl p-4"
              >
                <p className="text-lg text-white">{info}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}