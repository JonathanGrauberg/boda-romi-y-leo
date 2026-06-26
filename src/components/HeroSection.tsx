import { useScrollFade } from '../hooks/useScrollFade';

interface HeroSectionProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  progress: number;
  duration: number;
  currentTime: number;
}

export default function HeroSection({
  audioRef,
  playing,
  setPlaying,
  progress,
  duration,
  currentTime
}: HeroSectionProps) {
  
  const ref1 = useScrollFade();
  const ref2 = useScrollFade();
  const ref3 = useScrollFade();
  const ref4 = useScrollFade();

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  }

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    audio.currentTime = pct * audio.duration;
  }

  function formatTime(s: number) {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  }

  return (
    <section className="texture-overlay" style={{ background: 'var(--cream)', paddingBottom: 48 }}>

      {/* Top green band with names */}
      <div
        style={{
          background: 'var(--green)',
          padding: '48px 32px 56px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Corner ornaments */}
        <svg className="absolute top-4 left-4 opacity-30" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
          <path d="M2 2 L2 10 M2 2 L10 2" />
        </svg>
        <svg className="absolute top-4 right-4 opacity-30" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
          <path d="M22 2 L22 10 M22 2 L14 2" />
        </svg>
        <svg className="absolute bottom-4 left-4 opacity-30" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
          <path d="M2 22 L2 14 M2 22 L10 22" />
        </svg>
        <svg className="absolute bottom-4 right-4 opacity-30" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
          <path d="M22 22 L22 14 M22 22 L14 22" />
        </svg>

        <img
          src="/portada-boda.png"
          alt="hero imagen"
          style={{
           
          }}
        />

        <div ref={ref2} className="fade-element delay-2" style={{ marginTop: 24 }}>
          <div className="ornament-divider text-white/40">
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path d="M0 5 Q5 0 10 5 Q15 10 20 5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
            </svg>
          </div>
          <p className="font-serif text-white/80 tracking-[0.25em] text-sm mt-3" style={{ letterSpacing: '0.2em' }}>
            31 · OCTUBRE · 2026
          </p>
        </div>

        {/* Curved bottom */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 440 32" preserveAspectRatio="none" style={{ width: '100%', height: 32, display: 'block' }}>
            <path d="M0,32 Q220,0 440,32 L440,32 L0,32 Z" fill="var(--cream)" />
          </svg>
        </div>
      </div>

      {/* Quote */}
      <div ref={ref3} className="fade-element delay-1 px-10 pt-10 text-center">
        <svg className="mx-auto mb-3 opacity-30" width="18" height="14" viewBox="0 0 18 14" fill="var(--green)">
          <path d="M0 14V8.4C0 5.6 .933333 3.26667 2.8 1.4C4.66667 .466667 6.53333 0 8.4 0L9.1 1.4C7.7 1.86667 6.53333 2.68 5.6 3.84C4.66667 5 4.2 6.26667 4.2 7.64H7.7V14H0ZM10.3 14V8.4C10.3 5.6 11.2333 3.26667 13.1 1.4C14.9667 .466667 16.8333 0 18.7 0L19.4 1.4C18 1.86667 16.8333 2.68 15.9 3.84C14.9667 5 14.5 6.26667 14.5 7.64H18V14H10.3Z"/>
        </svg>
        <p className="font-serif text-lg italic leading-relaxed" style={{ color: 'var(--text-mid)', fontSize: 16 }}>
          Después de siete años compartiendo sueños, risas, aprendizajes y mucho amor, llegó el momento de dar un paso más en nuestra historia.
          <br/>
          Con inmensa felicidad queremos invitarlos a acompañarnos en la celebración de nuestro casamiento.
        </p>
      </div>

      {/* Music Player */}
      <div ref={ref4} className="fade-element delay-2 mx-6 mt-8 px-5 py-5 rounded-sm decorative-border" style={{ background: 'var(--cream-dark)' }}>
        <p className="font-sans text-xs tracking-widest uppercase text-center mb-1" style={{ color: 'var(--text-light)' }}>
          Dale play a nuestra canción
        </p>
        <p className="text-center mb-4 font-serif italic text-xs" style={{ color: 'var(--text-light)' }}>
          Perfect — Ed Sheeran
        </p>

        {/* Barra de progreso clickeable */}
        <div
          onClick={handleSeek}
          style={{
            height: 3,
            background: 'rgba(92,107,61,0.15)',
            borderRadius: 99,
            marginBottom: 6,
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'var(--green)',
              borderRadius: 99,
              transition: 'width 0.3s linear',
            }}
          />
          {/* Perilla */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: `${progress}%`,
              transform: 'translate(-50%, -50%)',
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'var(--green)',
              boxShadow: '0 0 0 2px var(--cream-dark)',
            }}
          />
        </div>

        {/* Tiempos */}
        <div className="flex justify-between mb-4">
          <span style={{ fontSize: 9, color: 'var(--text-light)', fontFamily: 'monospace' }}>
            {formatTime(currentTime)}
          </span>
          <span style={{ fontSize: 9, color: 'var(--text-light)', fontFamily: 'monospace' }}>
            {formatTime(duration)}
          </span>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6">
          {/* Retroceder 10s */}
          <button
            onClick={() => { if (audioRef.current) audioRef.current.currentTime -= 10; }}
            style={{ color: 'var(--text-mid)', opacity: 0.6, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/>
              <text x="8.5" y="14" fontSize="5" fill="currentColor" stroke="none" fontFamily="sans-serif">10</text>
            </svg>
          </button>

          {/* Play / Pause */}
          <button
            onClick={togglePlay}
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'var(--green)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 12px rgba(92,107,61,0.3)',
              transition: 'transform 0.15s ease',
            }}
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.93)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            )}
          </button>

          {/* Adelantar 10s */}  
          <button
            onClick={() => { if (audioRef.current) audioRef.current.currentTime += 10; }}
            style={{ color: 'var(--text-mid)', opacity: 0.6, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.49-3.51"/>
              <text x="8.5" y="14" fontSize="5" fill="currentColor" stroke="none" fontFamily="sans-serif">10</text>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}