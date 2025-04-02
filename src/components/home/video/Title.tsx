import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface TitleProps {
  text: string;
  subtitle?: string;
  description?: string;
}

export function Title({ text, subtitle, description }: TitleProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(' ');

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <div className="mb-8">
        {words.map((word, i) => (
          <span
            key={word}
            style={{
              display: 'inline-block',
              marginRight: '0.3em',
              opacity: spring({
                frame: frame - i * 8, // Slower word appearance
                fps,
                config: { 
                  damping: 100,
                  stiffness: 200,
                  mass: 1.5
                },
              }),
              transform: `scale(${spring({
                frame: frame - i * 8,
                fps,
                config: { 
                  damping: 100,
                  stiffness: 200,
                  mass: 1.5
                },
              })})`,
            }}
            className="text-6xl font-bold text-white drop-shadow-lg"
          >
            {word}
          </span>
        ))}
      </div>

      {subtitle && (
        <p
          style={{
            opacity: spring({
              frame: frame - words.length * 8,
              fps,
              config: { 
                damping: 100,
                stiffness: 200,
                mass: 1.5
              },
            }),
            transform: `translateY(${spring({
              frame: frame - words.length * 8,
              fps,
              config: { 
                damping: 100,
                stiffness: 200,
                mass: 1.5
              },
            }) * 30}px)`,
          }}
          className="text-3xl text-white/90 mb-6 drop-shadow-md"
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p
          style={{
            opacity: spring({
              frame: frame - (words.length + 8) * 8,
              fps,
              config: { 
                damping: 100,
                stiffness: 200,
                mass: 1.5
              },
            }),
            transform: `translateY(${spring({
              frame: frame - (words.length + 8) * 8,
              fps,
              config: { 
                damping: 100,
                stiffness: 200,
                mass: 1.5
              },
            }) * 30}px)`,
          }}
          className="text-2xl text-white/80 drop-shadow-sm"
        >
          {description}
        </p>
      )}
    </div>
  );
}