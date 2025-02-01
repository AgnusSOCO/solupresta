import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

export function Logo() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: {
      damping: 200,
    },
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
      }}
    >
      <img
        src="/assets/images/logos/logo.png"
        alt="SoluPresta Logo"
        style={{
          width: '400px',
          height: 'auto',
        }}
      />
    </div>
  );
}