import { Player } from '@remotion/player';
import { LoanProcessVideo } from './video/LoanProcessVideo';

export function VideoSection() {
  return (
    <section className="section-transition" aria-labelledby="video-title">
      <div className="container relative">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 id="video-title" className="text-4xl font-bold mb-4">
            <span className="text-primary-navy">Conoce el</span>{' '}
            <span className="text-primary-cyan">Proceso</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre lo fácil que es obtener tu préstamo con SoluPresta
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <Player
            component={LoanProcessVideo}
            durationInFrames={1200} // Extended to 40 seconds for better pacing
            fps={30}
            compositionWidth={1920}
            compositionHeight={1080}
            style={{
              width: '100%',
              aspectRatio: '16/9',
            }}
            controls
            autoPlay
            loop
          />
        </div>
      </div>
    </section>
  );
}