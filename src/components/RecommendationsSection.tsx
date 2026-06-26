import { useScrollFade } from '../hooks/useScrollFade';

export default function RecommendationsSection() {
  const ref1 = useScrollFade();
  const ref2 = useScrollFade();
  const ref3 = useScrollFade();

  return (
    <section style={{ background: 'var(--cream)', padding: '16px 32px 80px', textAlign: 'center' }}>

      <div style={{ height: 1, background: 'rgba(92,107,61,0.12)', marginBottom: 48 }} />

      {/* Heart icon */}
      <div className="flex justify-center mb-8">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--green)" opacity="0.6">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </div>

      {/* Recommendations */}
      <div ref={ref1} className="fade-element mb-8">
        <p className="font-sans text-xs tracking-widest uppercase mb-3 font-semibold" style={{ color: 'var(--green)', letterSpacing: '0.2em' }}>
          RECOMENDACIONES
        </p>
        <p className="font-serif italic text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
          Seguir las indicaciones del personal de la boda.<br />
          Ser puntual.
        </p>
      </div>

      <div style={{ height: 1, background: 'rgba(92,107,61,0.1)', margin: '0 48px 32px' }} />

      
      {/* Closing */}
      <div ref={ref3} className="fade-element delay-3">
        <p className="font-sans text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--text-light)', letterSpacing: '0.25em' }}>
          ESPERAMOS CONTAR CON TU PRESENCIA
        </p>
        <h2 className="font-script" style={{ fontSize: 42, color: 'var(--green)' }}>
          ¡Muchas Gracias!
        </h2>

        {/* Decorative bottom ornament */}
        <div className="flex items-center justify-center gap-3 mt-8 opacity-30">
          <div style={{ height: 1, width: 40, background: 'var(--green)' }} />
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M6 0L7.5 4.5H12L8.5 7.5L10 12L6 9.5L2 12L3.5 7.5L0 4.5H4.5L6 0Z" fill="var(--green)"/>
          </svg>
          <svg width="8" height="8" viewBox="0 0 8 8">
            <path d="M4 0L5 3H8L5.5 5L6.5 8L4 6.5L1.5 8L2.5 5L0 3H3L4 0Z" fill="var(--green)"/>
          </svg>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M6 0L7.5 4.5H12L8.5 7.5L10 12L6 9.5L2 12L3.5 7.5L0 4.5H4.5L6 0Z" fill="var(--green)"/>
          </svg>
          <div style={{ height: 1, width: 40, background: 'var(--green)' }} />
        </div>
      </div>
    </section>
  );
}
