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
      <div className="mb-6">
        {words.map((word, i) => (
          <span
            key={word}
            style={{
              display: 'inline-block',
              marginRight: '0.3em',
              opacity: spring({
                frame: frame - i * 5, // Slower word appearance
                fps,
                config: { damping: 80 }, // Softer animation
              }),
              transform: `scale(${spring({
                frame: frame - i * 5,
                fps,
                config: { damping: 80 },
              })})`,
            }}
            className="text-5xl font-bold text-white"
          >
            {word}
          </span>
        ))}
      </div>

      {subtitle && (
        <p
          style={{
            opacity: spring({
              frame: frame - words.length * 5,
              fps,
              config: { damping: 80 },
            }),
            transform: `translateY(${spring({
              frame: frame - words.length * 5,
              fps,
              config: { damping: 80 },
            }) * 20}px)`,
          }}
          className="text-2xl text-white/80 mb-4"
        >
          {subtitle}
        </p>
      )}

      {description && (
        <p
          style={{
            opacity: spring({
              frame: frame - (words.length + 5) * 5,
              fps,
              config: { damping: 80 },
            }),
            transform: `translateY(${spring({
              frame: frame - (words.length + 5) * 5,
              fps,
              config: { damping: 80 },
            }) * 20}px)`,
          }}
          className="text-xl text-white/60"
        >
          {description}
        </p>
      )}
    </div>
  );
}