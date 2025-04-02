import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

export function Outro() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: {
      damping: 80,
    },
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        width: '100%',
        textAlign: 'center',
      }}
    >
      <div className="space-y-6">
        <img
          src="/assets/images/logos/logo.png"
          alt="SoluPresta Logo"
          className="w-64 mx-auto mb-8"
        />
        <h3 className="text-4xl font-bold text-white mb-4">
          ¡Comienza tu solicitud hoy!
        </h3>
        <p className="text-2xl text-white/90 mb-6">
          Visita solupresta.com
        </p>
        <div className="flex justify-center gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-lg text-white">📞 (55) 8128-9583</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-lg text-white">📧 atencion@solupresta.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}